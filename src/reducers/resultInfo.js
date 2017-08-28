import { CHARACTERSLOADED } from '../actions/loadCharacters';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CHARACTERSLOADED:
      return {
        ...state,
        total: action.data.total,
        count: action.data.count,
      };
    default:
      return state;
  }
};

export default reducer;
