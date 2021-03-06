import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SET_EXPENSES,
} from '../actions/actionTypes';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];

    case REMOVE_EXPENSE:
      return [...state].filter(({ id }) => id !== action.expense.id);

    case EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        }
        return expense;
      });

    case SET_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};
