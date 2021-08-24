"use strict";

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt('How many films have you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you seen?', '');
    }
}

// start(); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt ('One of last seen films?', ''),
              rate = prompt ('How do you rate it?', '');
   
       if (lastFilm != null && rate != null && lastFilm != '' && rate != '' && lastFilm.length < 50) {
           personalMovieDB.movies[lastFilm] = rate;    
           console.log('done');
       } else {
           console.log('error');
           i--;
       }
   }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log ('That`s not too much');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ('You are classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log ('wow! you are movie fun');
    } else {
        console.log ('problem');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if  (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);




function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite genre number ${i}?`, '');
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

