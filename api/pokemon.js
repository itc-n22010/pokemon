import axios from 'axios'

export async function getRandomPokemonImage () {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
  const { results } = response.data
  const randomPokemon = results[Math.floor(Math.random() * results.length)]
  const pokemonResponse = await axios.get(randomPokemon.url)
  return pokemonResponse.data.sprites.front_default
}
