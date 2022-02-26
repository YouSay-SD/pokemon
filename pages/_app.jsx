import { Provider } from 'react-redux'
import { store } from '../store/store'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps, router }) {
  return (
    <Provider store={ store }>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Provider>
  )
}

export default MyApp
