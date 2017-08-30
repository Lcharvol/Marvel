import { combineReducers } from 'redux';
import characters from './characters';
import character from './character';
import resultInfo from './resultInfo';
import sucess from './sucess';
import user from './user';

const reducer = combineReducers({
  user,
  sucess,
  characters,
  character,
  resultInfo,
});

export default reducer;
