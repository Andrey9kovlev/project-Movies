const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы - киноман");
} else {
    console.log("Произошла ошибка");
}

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

console.log(personalMovieDB);

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