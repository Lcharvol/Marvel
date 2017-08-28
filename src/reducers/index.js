import { combineReducers } from 'redux';
import characters from './characters';
import character from './character';
import resultInfo from './resultInfo';

const reducer = combineReducers({
  characters,
  character,
  resultInfo,
});

export default reducer;
