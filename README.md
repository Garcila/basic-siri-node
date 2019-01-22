<center><h1>LIRI 🦁</h1></center> 

<div align="center">
  <!-- Made By -->
  <a href="https://garcila.github.io/">
    <img src='https://img.shields.io/badge/made%20by-not%20a%20%F0%9F%A4%96-blue.svg'
      alt="Builder" />
  </a>
  <!-- Inspired by -->
  <a href="https://bootcamp.learn.utoronto.ca/coding/landing-2/?s=Google-Brand&hp=1&&60829831671_kwd-487761142440__296493434781_g_c___dc&pkw=%2Bu%20%2Bof%20%2Bt%20%2Bbootcamp&pcrid=296493434781&pmt=b&utm_source=google&utm_medium=cpc&utm_campaign=%5BS%5D+Brand+-+Exact&utm_term=%2Bu%20%2Bof%20%2Bt%20%2Bbootcamp&utm_content=296493434781&d=google&k=%2Bu%20%2Bof%20%2Bt%20%2Bbootcamp&gclid=Cj0KCQiA-JXiBRCpARIsAGqF8wX4c1lBsQgBO8d4bfNZ6IOnwElwmwOyB3vHS2jd1P_I3POkgVrOZnIaAixzEALw_wcB&gclsrc=aw.ds">
    <img src="https://img.shields.io/badge/inspired-uot%20bootcamp-brightgreen.svg"
      alt="University of Toronto Bootcamp" />
  </a>
</div>

A Siri substitute... as long as you want to:
- 💻 Use the terminal to ask questions
- 🎹 Find your favourite band's next concert
- 🎵 Find that song you have stuck in your head
- 🎥 Get more information about that old movie
- 📂 Save your searches in a text file


## Getting Started

To start using LIRI, just clone, npm install and add water 💦.

```
git clone git@github.com:Garcila/basic-siri-node.git
npm install

The water 💦 part just means that you should wait a minute
```

Once all is ready, go to your terminal 💻 and type the following friendly command:

```
node liri.js movie-this <Movie Name>
```

### List of available commands

At the moment these are the available commands for you to ask LIRI 🦁

**1 🎥 movie-this** -  It finds a movie and gives you back the following information:

- Title
- Year it was released
- Rating
- Rotten Tomatoes review (in %)
- Country
- Language
- Plot
- Actors

```
node liri.js movie-this Tron
```

**2 🎹 concert-this** -  It finds a concert and gives you back the following information:

- Band
- Venue
- City
- Country
- Date

```
node liri.js concert-this Bokassa
```

**3 🎵 spotify-this-song** - It finds a song or artist and gives you back the following information:

- Artist
- Song
- OnSpotify (link to the song)
- Album
- Year released

```
node liri.js spotify-this-song Bokassa
```

**4 ❔ do-what-it-says** - I'll let you figure out this one on your own.  It's harmless

```
node liri.js do-what-it-says
```

## Example

##### Request
```
node liri.js concert-this bokassa
```
##### Response

![Image of a response](./assets/response.png)

## Built With

* [Node](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [Moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [dotenv](https://www.npmjs.com/package/dotenv) - Easily work with environment variables
* [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) - A simple library for the Spotify REST API

## Author

* **German Arcila** - *Initial work* - [Filling the Bucket](https://garcila.github.io/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

