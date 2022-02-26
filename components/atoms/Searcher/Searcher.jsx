/* eslint-disable no-unused-expressions */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilteredPokemons } from '../../../actions/poke'
import styles from './Searcher.module.scss'

const Searcher = () => {
  const { pokemons } = useSelector(state => state.poke)
  const dispatch = useDispatch()

  const handleInputChange = ({ target: { value } }) => {
    const filteredPokemons = pokemons.filter(({ name }) => name.includes(value))
    dispatch(setFilteredPokemons(filteredPokemons))
  }

  useEffect(() => {
    () => {
      dispatch(setFilteredPokemons([]))
    }
  })

  return (
    <input
      autoComplete='false'
      className={styles.searcher}
      onChange={handleInputChange}
    />
  )
}

export default Searcher
