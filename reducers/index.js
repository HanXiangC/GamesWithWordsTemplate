import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import userdemographics from './userinfo';
import nextpage from './nextpage';
import questionque from './questionque';
import questionlist from './questionlist';
import userid from './user';


export const rootReducer = combineReducers({
  nextpage,
  questionque,
  questionlist,
  userdemographics,
  userid,
  routing: routerReducer,
});
