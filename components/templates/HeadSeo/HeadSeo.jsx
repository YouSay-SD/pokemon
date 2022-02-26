import Head from 'next/head'

const HeadSeo = ({ title = 'Create Next App', content = 'Generated by create next app' }) => {
  return (
    <Head>
      <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadSeo