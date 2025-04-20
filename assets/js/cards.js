document.addEventListener('DOMContentLoaded', async () => {

    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').
        then(data => data.json());
    let pokemones = respuesta.results;


    let div = document.querySelector('.pokecard');
    pokemones.forEach(async (pokemon, index) => {

        let pokemonUrl = await fetch(pokemon.url).then(data => data.json());
        let imgUrl = pokemonUrl.sprites.other.dream_world.front_default;


        div.innerHTML += `
        <div class="col">
        <div class="card mb-3 h-100">
            <h4 class="card-header">${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}</h4>
            <div class="card-body">
                <h5 class="card-title">Pokedex Index: ${index + 1}</h5>
            </div>
            <div class="card-body">
            <img src="${imgUrl}" class="card-img-top" alt="${pokemon.name}"></img>
            </div>
        </div>
        </div>`
    });
});

