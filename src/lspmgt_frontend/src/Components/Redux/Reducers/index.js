import {
  GET_USER_STATUS,
  SIGN_IN_USER,
  SIGN_OUT_USER,
  UPDATE_USER_SETTINGS,
  GET_USER_SETTINGS,
} from '../Actions';

const InitialState = {
  isAdmin: '',
  isLoggedIn: false,
  // userToken: {},
  // userData: {},
  // event: {},
};

const rootReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_USER_STATUS:
      return { ...state, ...action.payload };

    case SIGN_IN_USER:
      return { ...state, ...action.payload };

    case SIGN_OUT_USER:
      return { ...state, ...action.payload };

    case UPDATE_USER_SETTINGS:
      console.log('REDUCER UPDATE USER SETTINGS');
      return { ...state, ...action.payload };

    case GET_USER_SETTINGS:
      console.log('GET UPDATE USER SETTINGS -> ', action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default rootReducer;
