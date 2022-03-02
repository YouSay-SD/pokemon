/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
  const { body } = req
  const limitPerPage = 8
  const offset = body.page === 1 ? 0 : limitPerPage * (body.page - 1)

  // Get All Pokemons
  const getPokemons = async () => {
    const apiUrl = `${process.env.POKE_ENDPOINT}/pokemon/?limit=${body.page === 3 ? 4 : limitPerPage}&offset=${offset}`
    const allPokemons = await axios.get(apiUrl).then(({ data }) => data.results)
    const allPokemonsData = await allPokemons.map(({ url }) => getPokemonData(url))
    return Promise.all(allPokemonsData)
  }

  // Get Pokemon Data
  const getPokemonData = async (pokemon) => {
    return await axios.get(pokemon).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        moves: data.moves,
        sprites: data.sprites,
        type: data.types[0].type.name
      }
    })
  }

  const data = await getPokemons()

  res.status(200).json({ data })
}
