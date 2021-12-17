const characterName = document.querySelector("#characterName"); //Nombre del personaje
const casa = document.querySelector("#casa"); //Casa del personaje
const actor = document.querySelector("#actor"); //Actor del personaje
const imgCharacter = document.querySelector("#imgCharacter"); //Imagen del personaje
const cardContainer = document.querySelector("characterCards"); //Contenedor de las cards de personajes
const charactersArr = []; //Array donde inserto los datos obtenidos de la API
const btnTodos = document.querySelector("#btnTodos"); //Boton para mostar todos los personajes

//Funcion para mostrar personajes
const showCharacters = (persona) => {
  characterCards.innerHTML += `
      <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${persona.imagen}" alt="" id="imgCharacter">
            <div class="card-body">
              <h5 class="card-title" id="characterName">${persona.personaje}</h5>
              <p class="card-text" id="casa">Casa: ${persona.casaDeHogwarts}</p>
              <p class="card-text" id="actor">Actor: ${persona.interpretado_por}</p>
              <button type="button" class="btn btn-secondary">+Más Info</button>
              
            </div>
          </div>
      `;
};

//consumiendo api de personajes de HP
const getApi = async () => {
  const response = await fetch(
    "https://fedeperin-harry-potter-api.herokuapp.com/personajes"
  );
  const characters = await response.json();
  characters.map((character) => {
    charactersArr.push(character); //Haciendo un push de los datos de la API al array
  });
  //Insertando datos en html
  charactersArr.map((character) => {
    showCharacters(character);
  });
};

//Ejecutando funcion cuando carga la pagina
window.onload = getApi();

//Funcion de busqueda
const formBusqueda = document.querySelector("#formBusqueda");
const busqueda = document.querySelector("#busqueda");
const btnBusqueda = document.querySelector("#btnBusqueda");

//Funcion de filtro por nombre de personaje
const charactersFilter = (e) => {
  e.preventDefault();
  characterCards.innerHTML = "";
  const filtCharacters = charactersArr.filter((character) =>
    character.personaje.toLowerCase().includes(busqueda.value.toLowerCase())
  );
  filtCharacters.map((character) => {
    showCharacters(character);
  });
  busqueda.value = "";
};

//Eventos
formBusqueda.addEventListener("submit", charactersFilter);
