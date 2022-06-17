"use strict";

const numberOfMovies = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
        count: numberOfMovies,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const a = prompt("Один из просмотренных вами ранее фильмов", ""),
        b = +prompt("Ваша оценка этому фильму?", ""),
        c = prompt("Один из просмотренных вами ранее фильмов", ""),
        d = +prompt("Ваша оценка этому фильму?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);