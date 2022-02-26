import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPokemons } from '../actions/poke'
import PokeCards from '../components/modules/PokeCards/PokeCards'
import HeadSeo from '../components/templates/HeadSeo/HeadSeo'
import Layout from '../components/templates/Layout/Layout'

const Home = ({ data }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPokemons(data))
  }, [dispatch, data])

  return (
    <>
      <HeadSeo title='Pokemon | Home' />

      <Layout>
        <PokeCards />
      </Layout>
    </>
  )
}

export default Home

// Static Props
export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/poke').then(({ data }) => data)
  console.log('data', data)
  return {
    props: {
      data
    }
  }
}
