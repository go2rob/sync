import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addExpense: ["expense"]
});

export const ExpenseTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  all: [
    {
      id: 1,
      title: "Dinner",
      amount: 505,
      createdAt: "Sat Aug 04 2018 05:19:15 GMT+0530 (IST)"
    },
    {
      id: 2,
      title: "Petrol",
      amount: 200,
      createdAt: "Sat Aug 04 2018 06:19:15 GMT+0530 (IST)"
    },
    {
      id: 3,
      title: "Snacks",
      amount: 100,
      createdAt: "Sat Aug 04 2018 12:19:15 GMT+0530 (IST)"
    },
    {
      id: 4,
      title: "Furniture",
      amount: 3500,
      createdAt: "Sat Aug 04 2018 15:19:15 GMT+0530 (IST)"
    }
  ]
});

/* ------------- Reducers ------------- */

export const add = (state, { expense }) => {
  const all = [...state.all, expense];
  return state.merge({ all });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_EXPENSE]: add
});
