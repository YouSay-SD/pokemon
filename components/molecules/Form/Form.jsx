import { Alert, FloatingLabel, Form as FormBootstrap, Button, Spinner } from 'react-bootstrap'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import styles from './Form.module.scss'
import { useState } from 'react'

// eve.holt@reqres.in
// cityslicka

const Form = () => {
  const { register, formState, handleSubmit } = useForm()
  const router = useRouter()
  const [errorLogin, setErrorLogin] = useState()
  const [loading, setLoading] = useState(false)
  const { errors } = formState

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setLoading(true)

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: `${window.location.origin}`
    })

    if (res) setLoading(false)

    if (res.ok) {
      router.push(res.url)
    } else {
      setErrorLogin(true)
    }
  })

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {/* Email Adress */}
      <div className={styles['input-container']}>
        <FloatingLabel label="Email address">
          <FormBootstrap.Control
            type="email"
            placeholder="name@example.com"
            {...register('email', {
              required: {
                value: true,
                message: 'Emaill adress is required'
              }
            })}
          />
        </FloatingLabel>
        {errors.email && <Alert className={styles.alert} variant='danger'>{errors.email.message}</Alert>}
      </div>

      {/* Password */}
      <div className={styles['input-container']}>
        <FloatingLabel label="Password">
          <FormBootstrap.Control
            type="password"
            placeholder="name@example.com"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required'
              }
            })}
          />
        </FloatingLabel>
        {errors.password && <Alert className={styles.alert} variant='danger'>{errors.password.message}</Alert>}
      </div>

      <Button variant="primary" disabled={loading} type=''>
        {loading &&
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        }

        {loading ? '  Loading...' : 'Search'}
      </Button>

      {errorLogin && <Alert className={styles.alert} variant='danger'>Wrong credentials</Alert>}
    </form>
  )
}

export default Form
