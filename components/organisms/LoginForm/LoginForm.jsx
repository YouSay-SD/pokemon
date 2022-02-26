import Title from '../../atoms/Title/Title'
import Form from '../../molecules/Form/Form'
import styles from './LoginForm.module.scss'

const LoginForm = () => {
  return (
    <div className={styles['login-form']}>
      <Title>Login Form</Title>
      <Form />
    </div>
  )
}

export default LoginForm
