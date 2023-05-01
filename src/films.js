// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const newArrayAllDirectors = movies.map((name) => name.director); // funcion map sobre el array de objetos original busca y devuelve un array nuevo (no modifica original) con lo que le pidas (en este caso el nombre de directores) 
  // const newArrayAllDirectors = movies.map(function (name){ return name.director}); // funcion map clasica sin arrow function
  return newArrayAllDirectors; // cuando llame a la funcion devolvere el resultado
}

// Exercise 2:
// Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const newArrayMoviesXDirector = movies.filter((movie) => movie.director.includes(director)); // funcion filter devuelve un nuevo array filtrado con una condicion que le pasamos 
  return newArrayMoviesXDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesXDirector = getMoviesFromDirector(movies, director);
  const sumaScore = moviesXDirector.reduce((valorAcumulado, movie) => {
    return valorAcumulado += movie.score
  }, 0); // el metodo reduce va sumando los valores, 0 es la posicion por donde empieza a contar

  const averageNoteXDirector = Number((sumaScore / moviesXDirector.length).toFixed(2));
  return averageNoteXDirector;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const moviesFilteredByTitle = movies.map((name) => name.title);
  const orderMovies = moviesFilteredByTitle.sort().slice(0, 20); // sort ordena el array y slice muestra en este caso de la posicion 0 al 20 del array
  return orderMovies
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const copyArray = movies.map((movie) => ({ ...movie })); // copia del array
  return copyArray.sort((a, b) => { //aplico sort para ordenar los objetos
    const yearOrder = a.year - b.year;
    const newArrayOrder = yearOrder || a.title.localeCompare(b.title); //  localCompare se utiliza para comparar los títulos y determinar su orden alfabético.
    return newArrayOrder
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const moviesXGenre = movies.filter((movie) => movie.genre.includes(genre) && movie.score != ''); //hago un filtro de las peliculas por genero y que contengan puntuacion 
  const sumScoreXGenre = moviesXGenre.reduce((acumulador, movie) => { // con el reduce sumo todas las puntuaciones desde la posicion 0
    acumulador += movie.score;
    return acumulador;
  }, 0);

  const lenghtOfMoviesXGenre = Number(moviesXGenre.length); // cojo la cantidad de posiciones del array (cantidad de peliculas)
  const averageScoreXGenre = Number((sumScoreXGenre / lenghtOfMoviesXGenre).toFixed(2)); // divido la suma de las puntuaciones entre el total de peliculas y limito a 2 decimales
  return averageScoreXGenre; // devuelvo la media por genero
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const arrayDurationInMinuts = array.map((movies) => ({ ...movies })); // copia del array

  arrayDurationInMinuts.forEach((movie) => { //recorro la copia del array y por cada pelicula entraigo la duracion, para poder modificar las horas y convertir y sumar los minutos
    let duration = movie.duration;
    let hours = Number(duration.match(/\d+(?=h)/g));
    let minutes = Number(duration.match(/\d+(?=min)/g));
    let totalMinutes = Number(hours * 60 + minutes);
    movie.duration = totalMinutes;
  });
  return arrayDurationInMinuts;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const newArrayOfMovies = movies.map((movie) => ({ ...movie })); // copia del array
  const filterXYear = newArrayOfMovies.filter((date) => date.year === year) // filtra cada pelicula por año
  const orderXScore = filterXYear.sort((a, b) => b.score - a.score) // ordena, la primera posicion del array es el numero mas alto

  return [orderXScore[0]] // devuelto pa primera posicion del array, porque solo quiero mostrar la mejor pelicula
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
