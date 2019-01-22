const fs = require('fs');
const KEYS = require(`../../keys.js`);
const axios = require(`axios`);
const moment = require(`moment`);
const Spotify = require(`node-spotify-api`);

const helpers = require(`../helpers/helpers`);
const writeToFile = helpers.writeToFile;
const findRottenTomatoes = helpers.findRottenTomatoes;
const getSearchTerm = helpers.getSearchTerm;

const concert = (userInput) => {
	const artist = getSearchTerm(userInput, `Bokassa`);
	const url = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${KEYS.bandsInTown.key}`;
	axios.get(url).then((res) => {
		const data = res.data[0];
		const nextEvent = {
			Band: data.lineup[0],
			Venue: data.venue.name,
			City: data.venue.city,
			Country: data.venue.country,
			Date: moment(data.datetime).format(`DD/MM/YYYY`)
		};
		writeToFile(`concert-this`, nextEvent);
		console.table(nextEvent);
	})
	.catch((err) => {
		console.log(`We had a problem. Could not find the band '${artist}'\n${err}`);
	});
};

const song = (userInput) => {
	const songTitle = getSearchTerm(userInput, `La vie en rose`);
	const spotify = new Spotify({
		id: KEYS.spotify.id,
		secret: KEYS.spotify.secret
	});
	spotify.search({ type: `track`, query: `${songTitle}` }).then((res) => {
		const data = res.tracks.items[0];
		if (!data) return console.log(`Could not find the song or band named ${songTitle}`);
		const songInfo = {
			Artist: data.album.artists[0].name,
			Song: data.name,
			OnSpotify: data.external_urls.spotify,
			Album: data.album.name,
			Year: moment(data.album.release_date).format(`DD/MM/YYYY`)
		};
		
		writeToFile(`spotify-this-song`, songInfo);
		console.table(songInfo);
	});
};

const movie = (userInput) => {
	const movieTitle = getSearchTerm(userInput, `Tron`);
	const url = `http://www.omdbapi.com/?apikey=${KEYS.omdb.key}&t=${movieTitle}`;
	axios
		.get(url)
		.then((res) => {
			if (!res.data.Title) return console.log(`Could not find the movie ${movieTitle}`);
			const movie = res.data;
			const movieInfo = {
				Title: movie.Title,
				Year: movie.Year,
				Rating: movie.Rated,

				//  need function because this field is not always in omdb
				RottenTomatoes: findRottenTomatoes(movie),
				Country: movie.Country,
				Language: movie.Language,
				Plot: movie.Plot,
				Actors: movie.Actors
			};
			writeToFile(`movie-this`, movieInfo);
			console.table(movieInfo);
		})
		.catch((err) => {
			throw `We had a problem. ${err}`;
		});
};

const doWhatItSays = () => {
	fs.readFile(`./app/random.txt`, `utf8`, (err, data) => {
		if (err) throw err;
		const query = data.split(`,`)[1];
		const songToLook = [];
		// song function requires an array to be passed as an argument
		// this satisfies that requirement
		songToLook[3] = query;

		song(songToLook);
	});
};

module.exports.concert = concert;
module.exports.song = song;
module.exports.movie = movie;
module.exports.doWhatItSays = doWhatItSays;