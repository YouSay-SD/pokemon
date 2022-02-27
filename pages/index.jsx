import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPokemons } from '../actions/poke'
import PokeCards from '../components/organisms/PokeCards/PokeCards'
import HeadSeo from '../components/templates/HeadSeo/HeadSeo'
import Layout from '../components/templates/Layout/Layout'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Home = ({ data }) => {
  const { data: session, status } = useSession()
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(setPokemons(data))
  }, [dispatch, data])

  // Redirect to Login if you don't logged
  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [])

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
export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/poke').then(({ data }) => data)
  return {
    props: {
      data
    }
  }
}
