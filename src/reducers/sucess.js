import { CHARACTERLOADED } from '../actions/loadCharacter';

const reducer = (state = true, action) => {
  switch (action.type) {
    case CHARACTERLOADED:
        if (action.sucess !== undefined) {
            return action.sucess;
        } else {
            return true;
        }
    default:
        return state;
  }
};

export default reducer;
