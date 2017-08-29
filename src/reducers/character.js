import { CHARACTERLOADED } from '../actions/loadCharacter';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CHARACTERLOADED:
      if (action.data) {
        return action.data.results;
      }
      return [];
    default:
      return state;
  }
};

export default reducer;
