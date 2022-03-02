import Link from 'next/link'
import Avatar from 'atoms/Avatar/Avatar'
import ColorType from 'atoms/ColorType/ColorType'
import P from 'atoms/P/P'
import Title from 'atoms/Title/Title'
import styles from './Card.module.scss'

const Card = ({ id, type, name, sprites: { other } }) => {
  return (
    <article className={styles.card}>
      <Link href={`/pokemon/${name}`}>
        <a>
          <ColorType
            className={`${styles['img-container']}`}
            type={type}
          />

          <Avatar
            className={styles.avatar}
            src={other['official-artwork'].front_default}
            alt={name}
            type={type}
          />

          <div className={styles.content}>
            <P className={styles.id}>#{id}</P>
            <Title className={styles.title}>{name}</Title>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default Card
