//fetch languages
const api_key = "df5e2f1b886764d65236120a86ec7dd5";
const languagesUrl = `https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}&language=es-ES`;
fetch(languagesUrl)
  .then((response) => response.json())
  .then(data => {
    var selectLanguage = document.getElementById("language"); // Seleccionar el elemento select
    // Iterar sobre los datos y agregar opciones al select
    data.sort((a, b) => a.english_name.localeCompare(b.english_name));
    data.forEach(language => {
      var option = document.createElement("option");
      option.textContent = language.english_name;
      selectLanguage.appendChild(option);
    });
  })
  .catch(error => {
    console.error("Error al cargar los idiomas:", error);
  });

// Fetch countries
const countriesUrl = `https://api.themoviedb.org/3/configuration/countries?api_key=${api_key}&language=es-ES`;
fetch(countriesUrl)
  .then((response) => response.json())
  .then((data) => {
    // Obtener el elemento select
    var selectLocation = document.getElementById("location"); // Hacer una solicitud para cargar el archivo JSON
    // Iterar sobre los datos y agregar opciones al select
    data.sort((a, b) => a.native_name.localeCompare(b.native_name));
    data.forEach((country) => {
      var option = document.createElement("option");
      option.value = country.iso_3166_1;
      option.textContent = country.native_name;
      selectLocation.appendChild(option);
    });
  })
  .catch((error) => console.error(error));

  //función subir archivo(imagen)
  function handleFileUpload(event) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado
    console.log('Archivo seleccionado:', file);
    // Agregar lógica adicional (ver vista previa, validar tipo o tamaño del archivo, etc)
  }
  // Agregar un evento 'change' al input de tipo file
document.getElementById('avatar').addEventListener('change', handleFileUpload);
  
//función enviar formulario
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevenir la recarga de la página
  this.reset(); // Limpiar el formulario
  alert('Formulario enviado con éxito'); // Mostrar mensaje de éxito
  window.location.reload();
  window.scrollTo(0, 0);
});