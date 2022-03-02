import Image from 'next/image'
import styles from './Logout.module.scss'
import { signOut } from 'next-auth/react'

const Logout = () => {
  return (
    <div
      className={styles.logout}
      onClick={() => signOut()}
    >
      <Image
        src='/logout.png'
        alt='Logout'
        width={30}
        height={30}
      />
    </div>
  )
}

export default Logout
