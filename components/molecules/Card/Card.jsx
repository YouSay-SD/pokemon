import Image from 'next/image'
import Link from 'next/link'
import Title from '../../atoms/Title/Title'
import styles from './Card.module.scss'

const Card = ({ id, name, sprites: { other } }) => {
  return (
    <article className={styles.card}>
      <Link href={`/pokemon/${name}`}>
        <a>
          <div className={styles['img-container']}>
            <p className={styles.id}>{id}</p>
            <Image
              className={styles.img}
              src={other['official-artwork'].front_default}
              width={280}
              height={240}
              alt={name}
            />
          </div>

          <div className={styles.content}>
            <Title className={styles.title}>{name}</Title>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default Card
