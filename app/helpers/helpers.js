const fs = require('fs');

const writeToFile = (instruction, data) => {
  // flag 'a' appends to the file
	const logStream = fs.createWriteStream(`./log.txt`, { flags: `a` }, (err) => console.log(err));
	logStream.write(`${instruction} => ${JSON.stringify(data)},\n`);
	logStream.end(``);
};

const findRottenTomatoes = (movie) => {
	const data = movie.Ratings.find((company) => company.Source === 'Rotten Tomatoes');
	const rating = data ? data.Value : 'N/A';
	return rating;
};

const getSearchTerm = (userInput, fallbackTerm) => {
	const termToSearch = userInput.length < 4 ? fallbackTerm : userInput.slice(3).join(``);
	return termToSearch;
};

module.exports.writeToFile = writeToFile;
module.exports.findRottenTomatoes = findRottenTomatoes;
module.exports.getSearchTerm = getSearchTerm;
