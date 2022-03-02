import { Container } from 'react-bootstrap'
import { capitalizeFirstLetter } from '../../../utils/utils'
import Avatar from '../../atoms/Avatar/Avatar'
import Title from '../../atoms/Title/Title'
import Evolutions from '../../molecules/Evolutions/Evolutions'
import Skills from '../../molecules/Skills/Skills'
import styles from './SingleContent.module.scss'

const SingleContent = ({ avatar, type, name, moves, evolutions }) => {
  return (
    <section className={styles['single-content']}>
      <Container>
        <Avatar
          className={styles.avatar}
          src={avatar}
          alt={name}
          type={type}
        />

        <div className={styles.info}>
          <Title className={styles.title} size='lg'>{capitalizeFirstLetter(name)}</Title>

          <div className={styles.tables}>
            <Evolutions evolutions={evolutions} />
            <Skills skills={moves} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SingleContent
