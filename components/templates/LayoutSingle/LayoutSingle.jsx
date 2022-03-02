import React from 'react'
import { useSelector } from 'react-redux'
import Hero from '../../organisms/Hero/Hero'
import SingleContent from '../../organisms/SingleContent/SingleContent'
import Layout from '../Layout/Layout'

const LayoutSingle = () => {
  const { singlePokemon } = useSelector(state => state.poke)

  return (
    <Layout>
      {singlePokemon &&
        <>
          <Hero
            type={singlePokemon.type}
          />
          <SingleContent
            avatar={singlePokemon.sprites.other['official-artwork'].front_default}
            name={singlePokemon.name}
            moves={singlePokemon.moves}
            type={singlePokemon.type}
            evolutions={singlePokemon.evolutions}
          />
        </>
      }
    </Layout>
  )
}

export default LayoutSingle
