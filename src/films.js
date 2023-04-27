// Exercise 1: Get the array of all directors.
// getAllDirectors(movies); //llamo a la funciona y le paso el array de objetos de data.js en html
function getAllDirectors(movies) {
  const result = movies.map((name) => name.director); // funcion map sobre el array de objetos busca y devuelve un array nuevo (no modifica original) con lo que le pidas (en este caso el nombre de directores) 
  console.log(result)
  return result; // cuando llame a la funcion devolvere el resultado
}


// Exercise 2:
// Get the films of a certain director
function getMoviesFromDirector(array, director) {

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

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
