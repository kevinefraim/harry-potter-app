const characterName = document.querySelector("#characterName");
const casa = document.querySelector("#casa");
const actor = document.querySelector("#actor");
const imgCharacter = document.querySelector("#imgCharacter");
const cardContainer = document.querySelector("characterCards");
//consumiendo api de personajes de HP
const showCharacters = async () => {
  const response = await fetch(
    "https://fedeperin-harry-potter-api.herokuapp.com/personajes"
  );
  const characters = await response.json();

  //Insertando datos en html
  characters.map((character) => {
    characterCards.innerHTML += `
      <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${character.imagen}" alt="" id="imgCharacter">
            <div class="card-body">
              <h5 class="card-title" id="characterName">${character.personaje}</h5>
              <p class="card-text" id="casa">Casa: ${character.casaDeHogwarts}</p>
              <p class="card-text" id="actor">Actor: ${character.interpretado_por}</p>
              
            </div>
          </div>
      `;
  });
};
//Ejecutando funcion cuando carga la pagina
window.onload = showCharacters();
