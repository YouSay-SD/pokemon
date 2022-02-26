import styles from './P.module.scss'

const P = ({ children, className = '' }) => {
  return (
    <p className={`${styles.p} ${className}`}>{children}</p>
  )
}

export default P
