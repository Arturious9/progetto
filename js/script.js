"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = +prompt("Какую поставите оценку фильму?", ""),
        c = prompt("Один из последних просмотренных фильмов?", ""),
        d = +prompt("Какую поставите оценку фильму?", "");


// const movies = {
//         a: b,
//         c: d
// };

// console.log(movies);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);