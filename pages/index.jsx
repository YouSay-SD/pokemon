import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPokemons } from 'actions/poke'
import PokeCards from 'components/organisms/PokeCards/PokeCards'
import HeadSeo from 'templates/HeadSeo/HeadSeo'
import Layout from 'templates/Layout/Layout'
import { getSession, useSession } from 'next-auth/react'

const Home = ({ pokemons }) => {
  const { status } = useSession()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPokemons(pokemons))
  }, [dispatch, pokemons])

  // Loading
  if (status === 'loading') {
    return <p>LOADING...</p>
  }

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
export const getServerSideProps = async (context) => {
  const { query: { page = 1 } } = context

  const { data } = await axios.post('http://localhost:3000/api/poke', {
    page: +page
  }).then(({ data }) => data)

  // Redirect to Login if you don't logged
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemons: data,
      page: +page
    }
  }
}
