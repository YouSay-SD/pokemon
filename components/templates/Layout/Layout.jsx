import { motion, MotionConfig } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Logout from '../../atoms/Logout/Logout'

const Layout = ({ children }) => {
  const { data: isLogged } = useSession()

  return (
    <MotionConfig transition={{ duration: 0.7 }}>
      <motion.div
        animate='layoutAnimate'
        initial='layoutInitial'
        exit='layoutExit'
        variants={{
          layoutInitial: {
            opacity: 0,
            filter: 'blur(10px)',
            transform: 'translateY(-20px)'
          },
          layoutAnimate: {
            opacity: 1,
            filter: 'blur(0px)',
            transform: 'translateY(0px)'
          },
          layoutExit: {
            opacity: 0,
            filter: 'blur(10px)',
            transform: 'translateY(-50px)'
          }
        }}
      >
        <main>
          {isLogged && <Logout /> }
          {children}
        </main>
      </motion.div>
    </MotionConfig>
  )
}

export default Layout
