import styles from './Title.module.scss'

const Title = ({ children, size = 'md', className = '', h = '2' }) => {
  const HTag = `h${h}`

  return (
    <HTag className={`${styles.title} ${styles[size]} ${className}`}>{children}</HTag>
  )
}

export default Title
