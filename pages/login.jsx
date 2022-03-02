import { getSession, useSession } from 'next-auth/react'
import FormAndGallery from 'organisms/FormAndGallery/FormAndGallery'
import HeadSeo from 'templates/HeadSeo/HeadSeo'
import Layout from 'templates/Layout/Layout'
import Loader from 'atoms/Loader/Loader'

const Login = () => {
  const { status } = useSession()

  // Loading
  if (status === 'loading') {
    return <Loader />
  }

  return (
    <>
      <HeadSeo title='Pokemon | Login' />

      <Layout>
        <FormAndGallery />
      </Layout>
    </>
  )
}

export default Login

export async function getServerSideProps (context) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
