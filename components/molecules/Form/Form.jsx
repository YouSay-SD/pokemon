import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Button from '../../atoms/Button/Button'
import styles from './Form.module.scss'

// eve.holt@reqres.in
// cityslicka

const Form = () => {
  const { register, formState, handleSubmit } = useForm()
  const router = useRouter()
  const { errors } = formState

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: `${window.location.origin}`
    })

    if (res?.error) {
      console.log('ERROR')
    } else {
      console.log('LOGGEADO')
    }

    // console.log('res', res.url)
    if (res.url) router.push(res.url)
  })

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles['input-container']}>
        <label htmlFor="email">Email *</label>
        <input
          className={styles.input}
          id="email"
          type="email"
          {...register('email', {
            required: {
              value: true,
              message: 'Debes ingresar tu nombre'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className={styles['input-container']}>
        <label htmlFor="password">Password *</label>
        <input
          className={styles.input}
          id="password"
          type="password"
          {...register('password', {
            required: {
              value: true,
              message: 'Debes ingresar tu nombre'
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <Button className={styles.submit}>Submit</Button>
    </form>
  )
}

export default Form
