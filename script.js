const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: { logan: 8.0, terminator: 9.0 },
  actors: {},
  genres: [],
  privat: false,
};
let a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
