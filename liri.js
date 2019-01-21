require(`dotenv`).config();

const KEYS = require(`./keys.js`);
const axios = require(`axios`);
const Spotify = require(`node-spotify-api`);
const moment = require(`moment`);

const userInput = process.argv;
const command = process.argv[2];
console.log('the user input is ', userInput)
console.log('the command is ',command)

const concert = (userInput) => {
	let artist = userInput.length < 4 ? 'Bokassa' : userInput.splice(3, 1);
	let url = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${KEYS.bandsInTown.key}`;
	axios.get(url).then((res) => {
		let data = res.data[0];
		let nextEvent = {
			Band: data.lineup[0],
			Venue: data.venue.name,
			City: data.venue.city,
			Country: data.venue.country,
			Date: moment(data.datetime).format('MM/DD/YYYY')
		};
		console.table(nextEvent);
	});
};

const song = (userInput) => {
	let songTitle = userInput.length < 4 ? `La vie en rose` : userInput.splice(3, 1);
	const spotify = new Spotify({
		id: KEYS.spotify.id,
		secret: KEYS.spotify.secret
	});
	spotify.search({ type: `track`, query: `${songTitle}` }).then((res) => {
		const data = res.tracks.items[0];
		let songInfo = {
			Artist: data.album.artists[0].name,
			Song: data.name,
			OnSpotify: data.external_urls.spotify,
			Album: data.album.name,
			Year: moment(data.album.release_date).format(`DD/MM/YYYY`)
		};
		console.table(songInfo);
	});
};

const movie = (userInput) => {
	let movieTitle = userInput.length < 4 ? 'Tron' : userInput.splice(3, 1);
	let url = `http://www.omdbapi.com/?apikey=${KEYS.omdb.key}&t=${movieTitle}`;
	axios
		.get(url)
		.then((res) => {
			let movie = res.data;
			let movieInfo = {
				Title: movie.Title,
				Year: movie.Year,
				Rating: movie.Rated,
				RottenTomatoes: movie.Ratings[1].Value,
				Country: movie.Country,
				Language: movie.Language,
				Plot: movie.Plot,
				Actors: movie.Actors
			};
			console.table(movieInfo);
		})
		.catch((err) => {
			throw `We had a problem. ${err}`;
		});
};

switch (command) {
	case `concert-this`:
		concert(userInput);
		break;
	case `spotify-this-song`:
		song(userInput);
		break;
	case `movie-this`:
		movie(userInput);
		break;
	case `do-what-it-says`:
		doWhatItSays();
		break;
	default:
		console.log(`Sorry I do not recognize that command`);
		break;
}
