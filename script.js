"use strict"; 

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let nameOFFilm = [];
    let gradeOfFilm = [];
    first: for (let i = 0; i < 2; i++) {
        nameOFFilm[i] = prompt('Один із останніх переглянутих фільмів?','');
        gradeOfFilm[i] = prompt('На скільки ви його оціните?','');
        personalMovieDB.movies[nameOFFilm[i]] = gradeOfFilm[i];
        if ((nameOFFilm[i].length > 50 || nameOFFilm[i].length == 0 || nameOFFilm[i].length == null) || 
        (gradeOfFilm[i].length > 50 || gradeOfFilm[i].length == 0 || gradeOfFilm[i].length == null)) {
            console.log('error');
            i--;
            continue first;
    }
}
}

rememberMyFilms();

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш улюблений жанр за номером ${i + 1}`,'');
    }
}

writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Переглянуто мало фільмів');
    }
    else if (10 <= personalMovieDB.count <= 30) {
        alert('Ви файний глядач');
    }
    else if (personalMovieDB.count > 30) {
        alert('Ви кіноман');
    }
    else if (personalMovieDB.count == 0) {
        alert('Помилка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();


