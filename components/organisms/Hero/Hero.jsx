import Link from 'next/link'
import { Button, Container } from 'react-bootstrap'
import ColorType from 'atoms/ColorType/ColorType'
import styles from './Hero.module.scss'

const Hero = ({ type }) => {
  return (
    <section className={styles.hero}>
      <Container className={styles.cta}>
        <Link href='/'>
          <a>
            <Button>Back Home</Button>
          </a>
        </Link>
      </Container>

      <ColorType type={type} className={styles.color} />
    </section>
  )
}

export default Hero
