import {
  SUBMIT_USER_INFO_BEGIN,
  SUBMIT_USER_INFO_SUCCESS,
  SUBMIT_COMMENTS_BEGIN,
  SUBMIT_COMMENTS_SUCCESS,
  USER_ID,
} from '../actions/userinfo';

// import {
//   SET_RESULTS
// } from '../actions/questionque';

export default function userInfo(state = {}, action) {
  switch (action.type) {
    case SUBMIT_USER_INFO_SUCCESS: {
      return {
        ...state,
        gender: action.data.gender,
        age: action.data.age,
        takenBefore: action.data.takenBefore,
        languageDisorder: action.data.languageDisorder,
        education: action.data.education,
        isFetching: false,
      };
    }
    case SUBMIT_USER_INFO_BEGIN: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_ID: {
      return {
        ...state,
        id: action.id,
        isFetching: false,
      };
    }
    case SUBMIT_COMMENTS_BEGIN: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case SUBMIT_COMMENTS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        nativeLanguages: action.data.nativeLanguages,
        primaryLanguages: action.data.primaryLanguages,
      };
    }
    // case SET_RESULTS: {
    //   return {
    //     ...state,
    //     results: action.results,
    //   };
    // }
    default:
      return state;
  }
}
