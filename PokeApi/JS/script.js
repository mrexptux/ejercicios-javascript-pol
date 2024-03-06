let resultadoArray = [];
let cardPokemons$$;
let divBuscador$$;


//Esta funcion va a devolver todos los 151 pokemons que pedimos a la API / y la I es el parametro que le pedimos a la api que queremos que nos devuelva, en este caso 151.
const getPokemon = async () => {

    for (let i = 1; i <= 151; i++) {

        const respuestaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const resultadoAPI = await respuestaApi.json();

        resultadoArray = [...resultadoArray, resultadoAPI];

    }
};


//En base al resultado vamos a mapear los datos de la API.
const mapeadoPokemon = (results) => {
    return results.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other['official-artwork'].front_default,
        type: pokemon.types.map(type => type.type.name).join(', '),
    }));
};


const pintarResultado = (results) => {

    cardPokemons$$.innerHTML = "";

    for (const todosLosPokemons of results) {

        let pokemonDiv = document.createElement("div");
        pokemonDiv.className = "pokemon-card"

        let pokemonName = document.createElement("h4");
        pokemonName.className = "letra-nombre-pokemon";
        pokemonName.textContent = todosLosPokemons.name;

        let pokemonImage = document.createElement("img");
        pokemonImage.setAttribute("src", todosLosPokemons.img)
        pokemonImage.setAttribute("alt", todosLosPokemons.name)

        let tipoPokemon = document.createElement("p");
        tipoPokemon.className = "letra-tipo-pokemon";
        tipoPokemon.textContent = todosLosPokemons.type;

        pokemonDiv.appendChild(pokemonName);
        pokemonDiv.appendChild(pokemonImage);
        pokemonDiv.appendChild(tipoPokemon);

        cardPokemons$$.appendChild(pokemonDiv);
    }
};


//Vamos a crear el buscador.
const dibujarPokemon = () => {

    let input$$ = document.createElement("input");
    input$$.className = "input-buscarPokemon";
    input$$.placeholder = "Busca el Pokemon o el tipo =)";
    divBuscador$$.appendChild(input$$);

    input$$.addEventListener("input", () => buscarPokemon(input$$.value, resultadoArray));
};

//Buscamos con el buscador pasandole el filtro y el results que es el valor del input.
const buscarPokemon = (filtro, results) => {

    //Transformamos el texto a minusculas.
    let textoInput = filtro.toLowerCase();

    //Filtramos lo que son los pokemons por nombre y por tipo.
    let filtrarPokemon = results.filter((pokemon) => pokemon.name.includes(textoInput) || pokemon.types[0].type.name.includes(textoInput));

    pokemon = mapeadoPokemon(filtrarPokemon);
    pintarResultado(pokemon);
}

//Inizializamos todo.
const ininializar = async () => {
    await getPokemon();
    pokemon = mapeadoPokemon(resultadoArray);
    pintarResultado(pokemon);
    dibujarPokemon();
};

//Al cargar la pagina vamos a pintar los elementos
window.onload = () => {
    cardPokemons$$ = document.querySelector(".card-pokemon");
    divBuscador$$ = document.querySelector(".card-pokemon-buscadores");
    ininializar();
};

