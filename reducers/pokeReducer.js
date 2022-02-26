import { types } from '../types/types'

const initState = {
  pokemons: [],
  filteredPokemons: []
}

export const pokeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }

    case types.SET_FILTERED_POKEMONS:
      return {
        ...state,
        filteredPokemons: action.payload
      }

    default:
      return state
  }
}
