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
            <button class="btn btn-primary" onclick="openTrailer('${movie.id}', '${movie.title}')">Ver Trailer</button>
          </div>
        </div>
      `;
      moviesContainer.appendChild(movieCard);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const carouselItems = document.querySelectorAll(".carousel-item"); // Select all carousel items

    // Loop through the first three carousel items and add movie data to them
    for (let i = 0; i < Math.min(data.results.length, 7); i++) {
      const movie = data.results[i];
      const carouselItem = carouselItems[i];
      const movieHtml = `
        <img class="d-block w-100 carousel-img" src="${baseImageUrl}${movie.backdrop_path}" alt="${movie.title}">
        <div class="carousel-caption d-none d-block">
          <h2><span>${movie.title}</span></h2>
          <h5><span>${movie.overview}</span></h5>
        </div>
      `;
      carouselItem.innerHTML = movieHtml;
    }
  })
  .catch((error) => console.error("Error fetching data:", error));

  function openTrailer(movieId, movieTitle) {
    // You need to fetch the trailer URL based on the movie ID
    const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`;

    fetch(trailerUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the first video in the results array is the trailer
        const trailerKey = data.results[0].key;
        const iframeUrl = `https://www.youtube.com/embed/${trailerKey}`;

        // Set the trailer iframe source
        const trailerIframe = document.createElement("iframe");
        trailerIframe.setAttribute("src", iframeUrl);
        trailerIframe.setAttribute("width", "100%");
        trailerIframe.setAttribute("height", "315");
        trailerIframe.setAttribute("allowfullscreen", "true");

        // Clear existing trailer content and append new trailer iframe
        const trailerContainer = document.getElementById("trailerContainer");
        trailerContainer.innerHTML = "";
        trailerContainer.appendChild(trailerIframe);

        // Set modal title
        const modalTitle = document.getElementById("trailerModalLabel");
        modalTitle.textContent = `Trailer - ${movieTitle}`;

        // Show the modal
        const modal = new bootstrap.Modal(
          document.getElementById("trailerModal")
        );
        modal.show();

        // Add event listener to stop video when modal is closed
        modal._element.addEventListener("hidden.bs.modal", function () {
          trailerIframe.setAttribute("src", "");
        });
      })
      .catch((error) => console.error("Error fetching trailer data:", error));
  }