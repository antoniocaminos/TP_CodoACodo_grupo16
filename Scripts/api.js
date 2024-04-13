/* const api_key = 'df5e2f1b886764d65236120a86ec7dd5'; 
const api_url = 'https://api.themoviedb.org/3/';
 */
const api_key = 'df5e2f1b886764d65236120a86ec7dd5';
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
    // Verificar si hay películas en los resultados
    if (data.results && data.results.length > 0) {
      // Iterar sobre las películas y mostrar la información de cada una
      data.results.forEach(movie => {
        console.log('Título:', movie.title);
        console.log('ID:', movie.id);
        // Agrega más información de la película si es necesario
        console.log(movie.title);
      });
    } else {
      console.log('No se encontraron películas.');
    }
  })
  .catch(err => console.error('Hubo un problema al obtener los datos:', err));
