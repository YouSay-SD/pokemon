import { types } from '../types/types'

// Set Pokemons
export const setPokemons = (pokemons) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_POKEMONS,
      payload: pokemons
    })
  }
}

// Set Filtered Pokemons
export const setFilteredPokemons = (pokemons) => {
  return async (dispatch) => {
    await dispatch({
      type: types.SET_FILTERED_POKEMONS,
      payload: pokemons
    })
  }
}
