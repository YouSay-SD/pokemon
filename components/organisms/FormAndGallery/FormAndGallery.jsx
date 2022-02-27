import Image from 'next/image'
import Form from '../../molecules/Form/Form'
import ImageGallery from '../../molecules/ImageGallery/ImageGallery'
import styles from './FormAndGallery.module.scss'

const FormAndGallery = () => {
  return (
    <div className={styles['login-form']}>
      <ImageGallery />

      <div className={styles['form-container']}>
        <Image
          src='/logo.svg.webp'
          alt='Pokemon'
          width={190}
          height={70}
        />

        <Form />
      </div>
    </div>
  )
}

export default FormAndGallery
