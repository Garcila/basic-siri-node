require(`dotenv`).config();

const input = require(`./app/helpers/input`);
const userInput = input.userInput;
const command = input.command;

const actions = require(`./app/search/actions`);
const concert = actions.concert;
const song = actions.song;
const movie = actions.movie;
const doWhatItSays = actions.doWhatItSays;

const liriIt = (command) => {
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
			console.log(`Sorry I do not recognize that command - ${command}`);
			break;
	}
};

liriIt(command);
