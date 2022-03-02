import Image from 'next/image'
import styles from './Avatar.module.scss'

const Avatar = ({ src, alt, type, className = '' }) => {
  return (
    <div className={`${styles['avatar-container']} ${className}`}>
      <Image
        className={`${styles.avatar} ${styles[type]}`}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export default Avatar
