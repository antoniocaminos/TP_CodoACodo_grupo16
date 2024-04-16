const api_key = 'df5e2f1b886764d65236120a86ec7dd5';
const baseImageUrl = 'http://image.tmdb.org/t/p/original';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer df5e2f1b886764d65236120a86ec7dd5'
  }
};

fetch(url)
  .then(response => response.json())
  .then(data => {
    const moviesContainer = document.getElementById('movies-container');
    data.results.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('col-md-4', 'mb-4');
      movieCard.innerHTML = `
        <div class="card">
          <img src="${baseImageUrl}${movie.poster_path}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.overview}</p>
            <p class="card-text"><small class="text-muted">Release Date: ${movie.release_date}</small></p>
          </div>
        </div>
      `;
      moviesContainer.appendChild(movieCard);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
