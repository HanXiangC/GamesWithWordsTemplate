import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { pushkinReducer } from 'pushkin-react';
import error from './error';
import userInfo from './userInfo';
import { reducer as formReducer } from 'redux-form';
import nextpage from './nextpage';
// import { START_PROGRESS } from '../actions/progress';

// const SAVE_ANSWERS = 'SAVE_ANSWERS';
// function saveAnswers(state = { saveAnswers: false, precent: 0}, action) {
//   switch (action.type) {
//     case SAVE_ANSWERS: {
//       return {
//         saveAnswers: true,
//       };
//     }
//     case START_PROGRESS: {
//       return {
//         precent: action.precent
//       }
//     }
//     default:
//       return state;
//   }
// }
export const rootReducer = combineReducers({
  pushkin: pushkinReducer,
  error,
  nextpage,
  userInfo,
  routing: routerReducer,
  form: formReducer,
});
