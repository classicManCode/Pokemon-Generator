const getPokemon = document.getElementById('getPokemon');

async function fetchData() {
  try{
      const pokemonName = document.getElementById('pokemonName');
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if(!response.ok) {
          throw new Error(`Pokémon not found! Please check the name and try again.`);
      } else {
          const data = await response.json();
          console.log(data);
      }
      
  } catch(error) {
      console.error(error);
  }
}

fetchData();