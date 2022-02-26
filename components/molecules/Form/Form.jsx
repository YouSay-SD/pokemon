import { useForm } from 'react-hook-form'
import styles from './Form.module.scss'

const Form = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    console.log('data', data)
  })

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles['input-container']}>
        <label htmlFor="username">Username *</label>
        <input
          id="username"
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: 'Debes ingresar tu nombre'
            }
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div className={styles['input-container']}>
        <label htmlFor="password">Password *</label>
        <input
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

      <button>Submit</button>
    </form>
  )
}

export default Form
