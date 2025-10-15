const getPokemon = document.getElementById('getPokemon');

async function fetchData() {
      const pokemonName = document.getElementById('pokemonName').value.toLowerCase;
      const pokeImg = document.getElementById('pokeImg');
      const pkmnName = document.getElementById('pkmnName');
      const pkmnType = document.getElementById('pkmnType');
      const pkmnAbility = document.getElementById('pkmnAbility');

  try{

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if(!response.ok) {
          throw new Error(`Pokémon not found! Please check the name and try again.`);
          if(response.status === 404) {
              alert(`No Pokémon with the name '${pokemonName}' was found. Please try another.`)
          }
      } else {
          const data = await response.json();
          console.log(data);
          if(pokemonName === '') {
            alert()
          }
      }
      
  } catch(error) {
      console.error(error);
  }
}

fetchData();