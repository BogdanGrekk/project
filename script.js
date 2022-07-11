"use strict"; 

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let nameOFFilm = [];
let gradeOfFilm = [];
first: for (let i = 0; i < 2; i++) {
    nameOFFilm[i] = prompt('Один із останніх переглянутих фільмів?','');
    gradeOfFilm[i] = prompt('На скільки ви його оціните?','');
    if ((nameOFFilm[i].length > 50 || nameOFFilm[i].length == 0 || nameOFFilm[i].length == null) || 
    (gradeOfFilm[i].length > 50 || gradeOfFilm[i].length == 0 || gradeOfFilm[i].length == null)) {
        console.log('error');
        i--;
        continue first;
}
}
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

personalMovieDB.movies[nameOFFilm[0]] = gradeOfFilm[0];
personalMovieDB.movies[nameOFFilm[1]] = gradeOfFilm[1];
      
console.log(personalMovieDB);

/*first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k == 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}*/