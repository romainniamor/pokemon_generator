const button = document.querySelector("button");
const pokeBall = document.querySelector(".pokeball");
const pokeName = document.querySelector(".pokeName");
const pokeImg = document.querySelector(".pokeImg");
const pokeType = document.querySelector(".pokeType");

button.addEventListener("click", () => {
  button.classList.add("animate"); // on ajoute au button et à la class pokeball animate qui déclence l'animation
  pokeBall.classList.add("animate");

  // on enleve aux elmts au bout de .4s
  setTimeout(() => {
    button.classList.remove("animate");
    pokeBall.classList.remove("animate");
  }, 400);
  changePokemon();
});

const changePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 1010) + 1; //obtention d'un nombre alétoire entier arrondie à la valeur > entre 1 et 1010
  console.log(randomNumber);
  let requestStr = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`; //générer l url de la requete avec le nbre aléatoire
  let data = await fetch(requestStr); // récupération de la reponse avec fetch, recup d une promise
  console.log(data);
  let response = await data.json(); // conversion des data en json
  console.log(response);

  pokeImg.src = response.sprites.front_default; // on remplace la src de l elmt du dom par la response relative au sprite
  pokeName.textContent = response.name; // text content remplacé par le nom
  pokeType.textContent = response.types[0].type.name; // text content remplacé par la catégorie
};

changePokemon(); // appel de la fuction
