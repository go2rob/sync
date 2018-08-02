import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  increment: null,
  decrement: null
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  counterValue: 5
})

/* ------------- Reducers ------------- */

export const increment = (state) => {
  const counterValue = state.counterValue + 1;
  return state.merge({ counterValue })
}

export const decrement = (state) => {
  const counterValue = state.counterValue - 1;
  return state.merge({ counterValue })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement
})
