const getPokemon = document.getElementById('getPokemon');

getPokemon.onclick = () => {
    fetchData();
};

pokemonName.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    fetchData();
  }
});

async function fetchData() {
      const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
      const pokeImg = document.getElementById('pokeImg');
      const pkmnName = document.getElementById('pkmnName');
      const pkmnType = document.getElementById('pkmnType');
      const pkmnAbility = document.getElementById('pkmnAbility');

  try{

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if(!response.ok) {
        if(response.status === 404) {
              alert(`No Pokémon with the name '${pokemonName}' was found. Please try another.`);
          }
          throw new Error(`Pokémon not found! Please check the name and try again.`);
          
      } else {
          const data = await response.json();
          console.log(data);
          if(pokemonName === '') {
            alert('Please enter a Pokémon name');
          } else {
            pokeImg.src = data.sprites.front_default;
            pokeImg.classList.add('show');
            pkmnName.textContent = pokemonName.toUpperCase();
            pkmnType.textContent = data.types.map(item => item.type.name).join(', ').toUpperCase();
            pkmnAbility.textContent = data.abilities.map(item => item.ability.name).join(', ').toUpperCase();
          }
      };
      
  } catch(error) {
      console.error(error);
  }
};

