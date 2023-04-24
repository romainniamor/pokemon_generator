const button = document.querySelector(".button");
const pokeCard = document.querySelector(".pokeCard");
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
  pokeName.textContent = `hehe! ... I'm ${response.name}!!!`; // text content remplacé par le nom
  const type = response.types[0].type.name;
  pokeType.textContent = type; // text content remplacé par la catégorie

  if (type === "water" || type === "ice" || type === "flying") {
    pokeType.style.backgroundColor = "#90dcfc";
  } else if (
    type === "fire" ||
    type === "dragon" ||
    type === "fighting" ||
    type === "normal" ||
    type === "electric"
  ) {
    pokeType.style.backgroundColor = "#ff6363";
  } else if (type === "ground" || type === "rock" || type === "bug") {
    pokeType.style.backgroundColor = "5a5c53";
  } else if (type === "grass") {
    pokeType.style.backgroundColor = "#4bf73b";
  }
};

changePokemon(); // appel de la fuction
