"use strict";
const numberOfFilms = +prompt('How many films have you seen?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt ('One of last seen films?', ''),
      rate = prompt ('How do you rate it?', ''),
      lastFilm2 = prompt ('One of last seen films?', ''),
      rate2 = prompt ('How do you rate it?', '');

personalMovieDB.movies[lastFilm] = rate;
personalMovieDB.movies[lastFilm2] = rate2;
    
console.log(personalMovieDB);