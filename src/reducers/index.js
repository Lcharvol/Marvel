import { combineReducers } from 'redux';
import characters from './characters';
import character from './character';
import resultInfo from './resultInfo';
import sucess from './sucess';

const reducer = combineReducers({
  sucess,
  characters,
  character,
  resultInfo,
});

export default reducer;
