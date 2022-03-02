import { getSession, useSession } from 'next-auth/react'
import FormAndGallery from 'components/organisms/FormAndGallery/FormAndGallery'
import HeadSeo from 'components/templates/HeadSeo/HeadSeo'
import Layout from 'components/templates/Layout/Layout'

const Login = () => {
  const { status } = useSession()

  // Loading
  if (status === 'loading') {
    return <p>LOADING...</p>
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
