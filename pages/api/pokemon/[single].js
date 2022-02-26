/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default async (req, res) => {
  const { query: { single } } = req

  const getPokemon = async () => {
    const apiUrl = `${process.env.POKE_ENDPOINT}/pokemon/${single}`
    const pokemon = await axios.get(apiUrl).then(({ data }) => data)
    const { evolution_chain } = await axios.get(pokemon.species.url).then(({ data }) => data)
    const { chain } = await axios.get(evolution_chain.url).then(({ data }) => data)
    const firstEvo = chain.species.name
    const secondEvo = chain.evolves_to[0].species.name
    const thirdEvo = chain.evolves_to[0].evolves_to[0]?.species.name
    console.log('evo', firstEvo, secondEvo, thirdEvo)
    return pokemon
  }

  const data = await getPokemon()

  res.status(202).json(data)
}
