import { combineReducers } from 'redux';
import characters from './characters';
import resultInfo from './resultInfo';

const reducer = combineReducers({
  characters,
  resultInfo,
});

export default reducer;
