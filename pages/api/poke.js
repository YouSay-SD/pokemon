/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
  const limit = 20

  const getAllPokemons = async () => {
    const apiUrl = `${process.env.POKE_ENDPOINT}/pokemon/?limit=${limit}`
    const allPokemons = await axios.get(apiUrl).then(({ data }) => data.results)
    const allPokemonsData = await allPokemons.map(({ url }) => getPokemonData(url))
    return Promise.all(allPokemonsData)
  }

  const getPokemonData = async (pokemon) => {
    return await axios.get(pokemon).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        moves: data.moves,
        sprites: data.sprites
      }
    })
  }

  const data = await getAllPokemons()

  res.status(200).json({ data })
}
