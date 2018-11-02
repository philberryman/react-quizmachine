import { combineReducers } from 'redux';
import question from './question';
import answers from './answers';
import score from './score';
import gameStatus from './gameStatus';
import difficulty from './difficulty';




export default combineReducers({
  question,
  answers,
  score,
  gameStatus,
  difficulty
});
