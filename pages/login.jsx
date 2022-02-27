import FormAndGallery from '../components/organisms/FormAndGallery/FormAndGallery'
import HeadSeo from '../components/templates/HeadSeo/HeadSeo'
import Layout from '../components/templates/Layout/Layout'

const Login = () => {
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
