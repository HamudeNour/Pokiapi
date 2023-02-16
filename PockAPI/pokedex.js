let pokemonArray = [];

const miOL = document.getElementById('pokedex');

async function getPokemonData() {
    for (let i = 1; i <= 150; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await response.json();
        pokemonArray.push(pokemon);
    }
    return pokemonArray;
}

function pintarUnPokemon(pokemon) {

    const myLi = document.createElement("li");
    myLi.classList.add("div-pokemon");

    const pokemonName = document.createElement("h2");
    pokemonName.innerText = pokemon.name;
    myLi.appendChild(pokemonName);

    const imagen = document.createElement("img");
    imagen.src = pokemon.image;
    myLi.appendChild(imagen);

    const myId = document.createElement("p");
    myId.innerText = `ID: ${pokemon.id}`; 
    myLi.appendChild(myId);

    const myTipos = document.createElement("p");
    myTipos.innerText = `Tipos: ${pokemon.type}`;
    myLi.appendChild(myTipos);

    miOL.appendChild(myLi);




}

getPokemonData().then((data) => {
    pokemonArray = data.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
    }))

    pokemonArray.forEach(pokemon => {
        pintarUnPokemon(pokemon);
    });
});

