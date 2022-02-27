import { Provider } from 'react-redux'
import { store } from '../store/store'
import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps, router }) {
  return (
    <Provider store={ store }>
      <SessionProvider session={pageProps.session}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
