
/* api 
fetch('https://dummyapi.online/api/movies')
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch('https://dummyapi.online/api/movies')
.then(response => response.json())
.then(data => {
    // Encontrar la película específica en los datos
    const movie = data.find(movie => movie.id === 1);

    // Renderizar los detalles de la película en la página
    const movieInfoDiv = document.getElementById('movie-info');
    const movieDetailsHTML = `
        <img img="${movie.image}" alt="${movie.movie}">
        <h2>${movie.movie}</h2>
        <p>Rating: ${movie.rating}</p>
        <a href="${movie.imdb_url}" target="_blank">Ver en IMDb</a>
    `;
    movieInfoDiv.innerHTML = movieDetailsHTML;
})
.catch(error => console.error('Error al obtener los detalles de la película:', error));*/
const apiKey = '8312ad50'; // Reemplaza 'YOUR_API_KEY' con tu clave de API de OMDb

    // URL de ejemplo para obtener detalles de una película específica (reemplaza 'MOVIE_TITLE' con el título de la película que deseas buscar)
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=MOVIE_TITLE`;

    // Hacer la solicitud a la API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const movieDetails = document.getElementById('movie-details');

        // Crear elementos HTML para mostrar los detalles de la película
        const movieTitle = document.createElement('h2');
        movieTitle.textContent = data.Title;

        const moviePoster = document.createElement('img');
        moviePoster.src = data.Poster;
        moviePoster.alt = 'Poster de la película';

        const moviePlot = document.createElement('p');
        moviePlot.textContent = data.Plot;

        const movieYear = document.createElement('p');
        movieYear.textContent = `Año: ${data.Year}`;

        // Agregar elementos al contenedor principal
        movieDetails.appendChild(movieTitle);
        movieDetails.appendChild(moviePoster);
        movieDetails.appendChild(moviePlot);
        movieDetails.appendChild(movieYear);
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });