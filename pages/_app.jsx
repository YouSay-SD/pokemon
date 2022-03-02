/* eslint-disable valid-typeof */
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'
import 'styles/sanitize.css/sanitize.css'
import 'styles/sanitize.css/assets.css'
import 'styles/sanitize.css/forms.css'
import 'styles/sanitize.css/reduce-motion.css'
import 'styles/globals.scss'

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
