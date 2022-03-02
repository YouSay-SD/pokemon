import axios from 'axios'
import { getSession, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSinglePokemon } from 'actions/poke'
import HeadSeo from 'templates/HeadSeo/HeadSeo'
import LayoutSingle from 'templates/LayoutSingle/LayoutSingle'
import { capitalizeFirstLetter } from 'utils/utils'
import Loader from 'atoms/Loader/Loader'

const Single = ({ data }) => {
  const { status } = useSession()
  const dispatch = useDispatch()
  const name = capitalizeFirstLetter(data.name)

  // Set Single Pokemon Data
  useEffect(() => {
    dispatch(setSinglePokemon(data))
  }, [dispatch, data])

  // Loading
  if (status === 'loading') {
    return <Loader />
  }

  return (
    <>
      <HeadSeo title={`Pokemon | ${name}`} />
      <LayoutSingle />
    </>
  )
}

export default Single

// Static Props
export const getServerSideProps = async (context) => {
  const { params: { single } } = context
  const { data } = await axios.get(`${process.env.APP_URL}/api/pokemon/${single}`).then(data => data)

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
      data
    }
  }
}
