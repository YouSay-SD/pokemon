import styles from './Button.module.scss'
import { Button as Btn } from 'react-bootstrap'

const Button = (props) => {
  return (
    <Btn {...props} className={`${styles.button} ${props.className}`}>{ props.children }</Btn>
  )
}

export default Button
