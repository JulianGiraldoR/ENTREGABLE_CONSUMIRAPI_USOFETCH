let list_pokemon = document.getElementById("pokemonList")

/*consume la api (pokeapi.co) y me trae los datos correspondientes a los pokemon*/
function Consult_Pokemon(id,num){
    fetch( `https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function(response){
        response.json()
        .then(function(pokemon) {
            Create_Pokemon(pokemon,num)
        })
    })
}

/*funcion para buscar un pokemon al azar */
function Consult_Pokemones(){
    let Id_pokemon =Math.round(Math.random()*150)
    

    Consult_Pokemon(Id_pokemon,1)
    
}

/* funcion que me muestra el pokemon creado al azar para mostrar los datos de ese pokemon */
function Create_Pokemon(pokemon,num){
    let item = list_pokemon.querySelector(`#pokemon-${num}`)

    let image = item.getElementsByTagName("img")[0]
    image.setAttribute("src",pokemon.sprites.front_default)

    let name = item.getElementsByTagName("p")[0]
    name.textContent=pokemon.name
    

    let ability_1 = item.getElementsByTagName("p")[2]
    ability_1.textContent=pokemon.abilities[0].ability.name
    
    let ability_2 = item.getElementsByTagName("p")[3]
    ability_2.textContent=pokemon.abilities[1].ability.name

    
  

}
Consult_Pokemones()