import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import HeadSeo from '../../components/templates/HeadSeo/HeadSeo'
import Layout from '../../components/templates/Layout/Layout'
import { capitalizeFirstLetter } from '../../utils/utils'

const Single = ({ data }) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const name = capitalizeFirstLetter(data.name)

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
      <HeadSeo title={`Pokemon | ${name}`} />

      <Layout>
        {name}
      </Layout>
    </>
  )
}

export default Single

// Static Props
export const getStaticProps = async ({ params: { single } }) => {
  const { data } = await axios.get(`http://localhost:3000/api/pokemon/${single}`).then(data => data)
  return {
    props: {
      data
    }
  }
}

// Static Paths - Routes pre-rendering
export const getStaticPaths = async () => {
  const { data } = await axios.get('http://localhost:3000/api/poke').then(({ data }) => data)
  const paths = data.map(({ name }) => {
    return {
      params: {
        single: name
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}
