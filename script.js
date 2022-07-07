"use strict"; 

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const name1 = prompt('Один із останніх переглянутих фільмів?',''),
      grade1 = prompt('На скільки ви його оціните?',''),
      name2 = prompt('Один із останніх переглянутих фільмів?',''),
      grade2 = prompt('На скільки ви його оціните?','');

personalMovieDB.movies[name1] = grade1;
personalMovieDB.movies[name2] = grade2;
      
console.log(personalMovieDB);