"use strict";

const numberOfFilms = +prompt('How many films have you seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    console.log ('That`s not too much');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('You are classic viewer');
} else if (personalMovieDB.count >= 30) {
    console.log ('wow! you are movie fun');
} else {
    console.log ('problem');
    };
    
console.log(personalMovieDB);
