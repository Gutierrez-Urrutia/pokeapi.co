
const pokemon = async () => {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').
        then(data => data.json());
    const pokemones = respuesta.results;

    let table = document.querySelector('.poketable');

    pokemones.forEach((pokemon, index) => {

        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = `${index + 1}`;
        let td = document.createElement('td');
        td.innerHTML = `${pokemon.name}`;

        tr.appendChild(th);
        tr.appendChild(td);
        table.appendChild(tr);
    });
};

pokemon();