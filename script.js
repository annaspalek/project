"use strict";

function start() {
    numberOfFilms = +prompt('How many films have you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you seen?', '');
    }
}

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you seen?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you seen?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log ('That`s not too much');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log ('You are classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log ('wow! you are movie fun');
        } else {
            console.log ('problem');
        }
    },
    showMyDB: function(hidden) {
    if  (!hidden) {
        console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false; 
        } else personalMovieDB.privat = true;
    },

    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++) {
            // let genre = prompt(`Your favorite genre number ${i}?`, '');

            // if (genre === '' || genre == null) {
            // console.log('incorrect data');
            // i--;
            // } else {
            // personalMovieDB.genres[i - 1] = genre;
            // }
        for (let i = 1; i < 2; i++) {
            let genres = prompt('enter your faforite genres coma sepqreted').toLowerCase;
            if (genres === '' || genres == null) {
            console.log('incorrect data');
            i--;
            } else {
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - is ${item}`);
        });
    }
};



