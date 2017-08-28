import { CHARACTERSLOADED } from '../actions/loadCharacters';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CHARACTERSLOADED:
      return action.data.results;
    default:
      return state;
  }
};

export default reducer;
