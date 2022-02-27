import { useSelector } from 'react-redux'
import Container from '../../atoms/Container/Container'
import Searcher from '../../atoms/Searcher/Searcher'
import Grid from '../Grid/Grid'
import styles from './PokeCards.module.scss'

const PokeCards = () => {
  const { pokemons, filteredPokemons } = useSelector(state => state.poke)
  const items = filteredPokemons.length > 0 ? filteredPokemons : pokemons

  return (
    <div className={styles['poke-cards']}>
      <Container>
        <Searcher />
        <Grid items={items} />
      </Container>
    </div>
  )
}

export default PokeCards
