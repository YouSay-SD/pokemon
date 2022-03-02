import styles from './ColorType.module.scss'

const ColorType = ({ type, className }) => {
  return (
    <div className={`${styles['color-type']} ${styles[type]} ${className}`} />
  )
}

export default ColorType
