const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы - киноман");
        } else {
            console.log("Произошла ошибка");
        }

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log("Ввели некорректные данные или не ввели");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres === '' || genres == null) {
                console.log("Ввели некорректные данные или не ввели");
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        })
    },
};



// rememberMyFilms();


// detectPersonalLevel();



// showMyDB(personalMovieDB.privat);



// writeYourGenres();


// switch (personalMovieDB.count) {
//     case 10:
//         console.log("Просмотрено мало фильмов");
//         break;
//     case 20:
//         console.log("Вы классический зритель");
//         break;
//     case 30:
//         console.log("Вы - киноман");
//         break;
//     default:
//         console.log("Произошла ошибка");
// }


// let i = 0;
// while (i < 2) {
//     const a = prompt("Один из просмотренных фильмов?", ""),
//             b = prompt("На сколько оцените его?", "");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//                 i++;
//             } else {
//                 console.log('error');

// }
// }

// let i = 0;
// do { const a = prompt("Один из просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//     }
// }
//     while (i < 2);