let numberOfFilms;



function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    }  
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: '',
    genres: [],
    privat: false
}
console.log(numberOfFilms);

//Классический цикл for
/*
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error');
        i--;
    }
}
*/

//Цикл while
/*
let n = 0;
while (n < 2) {

    n++;
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error');
        n--;
    }
}
*/

//Цикл do while


function rememberMyFilms() {
    let z = 0;
    do {
        z++
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error');
            z--;
        }
    } while (z < 2);


};

rememberMyFilms();


function detectPersonalLevel() {


    if (personalMovieDB.count < 10) {
        console.log('Вы посмотрели мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический кинозритель')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман')
    } else {
        console.log('Ошибка');
    }

}

detectPersonalLevel();





function showMyDB() {

    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    };

};

showMyDB();

function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        let g = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(g);
    };

};

writeYourGenres();


console.log(personalMovieDB);