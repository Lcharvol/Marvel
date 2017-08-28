import { CHARACTERLOADED } from '../actions/loadCharacter';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CHARACTERLOADED:
      return action.data.results;
    default:
      return state;
  }
};

export default reducer;
