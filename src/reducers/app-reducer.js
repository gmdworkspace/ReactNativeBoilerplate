import { INCREMENT_COUNT } from '../actions/types';

const initialState = {
  count: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT: {
      const newState = { ...state };
      newState.count = state.count + 1;
      return newState;
    }
    default:
      return state;
  }
}
