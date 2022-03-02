import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Searcher from 'atoms/Searcher/Searcher'
import Paginator from 'molecules/Paginator/Paginator'
import Grid from 'molecules/Grid/Grid'
import styles from './PokeCards.module.scss'

const PokeCards = () => {
  const { pokemons } = useSelector(state => state.poke)

  return (
    <div className={styles['poke-cards']}>
      <Container>
        <div className={styles.content}>
          <Searcher />
          <Grid items={pokemons} />
          <Paginator/>
        </div>
      </Container>
    </div>
  )
}

export default PokeCards
