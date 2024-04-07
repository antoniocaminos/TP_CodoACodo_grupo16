
/* api 
fetch('https://dummyapi.online/api/movies')
  .then((response) => response.json())
  .then((json) => console.log(json));
*/
fetch('https://dummyapi.online/api/movies')
.then(response => response.json())
.then(data => {
    // Encontrar la película específica en los datos
    const movie = data.find(movie => movie.id === 1);

    // Renderizar los detalles de la película en la página
    const movieInfoDiv = document.getElementById('movie-info');
    const movieDetailsHTML = `
        <img src="${movie.image}" alt="${movie.movie}">
        <h2>${movie.movie}</h2>
        <p>Rating: ${movie.rating}</p>
        <a href="${movie.imdb_url}" target="_blank">Ver en IMDb</a>
    `;
    movieInfoDiv.innerHTML = movieDetailsHTML;
})
.catch(error => console.error('Error al obtener los detalles de la película:', error));