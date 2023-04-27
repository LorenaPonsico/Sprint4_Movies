// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result = movies.map((name) => name.director); // funcion map sobre el array de objetos busca y devuelve un array nuevo (no modifica original) con lo que le pidas (en este caso el nombre de directores) 
  // console.log(result) //para ver el resultado por consola
  return result; // cuando llame a la funcion devolvere el resultado
}

// Exercise 2:
// Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const result = movies.filter((movie) => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesXDirector = getMoviesFromDirector(movies, director);
  const sumaScore = moviesXDirector.reduce((acumulador, movie) => {
    return acumulador += movie.score;
  }, 0);

  const averageNote = Number((sumaScore / moviesXDirector.length).toFixed(2));
  return averageNote;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const moviesFilteredByTitle = movies.map((name) => name.title);
  const orderMovies = moviesFilteredByTitle.sort().slice(0, 20); // sort ordena y slice muestra en este caso de la posicion 0 al 20 del array
  return orderMovies
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const copyArray = [...array]; // copia del array
  return copyArray.sort((a, b) => { //aplico sort para ordenar los objetos
    const yearOrder = a.year - b.year;
    const newArrayOrder = yearOrder || a.title.localeCompare(b.title); //  localCompare se utiliza para comparar los títulos y determinar su orden alfabético.
    return newArrayOrder
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {

  const moviesXGenre = movies.filter((movie) => movie.genre.includes(genre) && movie.score != '');

  const sumScoreXGenre = moviesXGenre.reduce((acumulador, movie) => {
    acumulador += movie.score;
    return acumulador;
  }, 0);

  const lenghtOfFilmsXGenre = Number(moviesXGenre.length);
  const averageScoreXGenre = Number((sumScoreXGenre / lenghtOfFilmsXGenre).toFixed(2));
  return averageScoreXGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
