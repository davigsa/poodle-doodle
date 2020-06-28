import {
  GET_USER_DETAILS,
  SIGNUP_USER,
  SIGNIN_USER,
  GET_USER_BY_ID,
} from "../types/userTypes";

const initialState = {
  me: {},
  user: {},
  Iam: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNIN_USER:
      return {
        ...state,
        me: action.payload,
      };
    case SIGNUP_USER:
      return {
        ...state,
        me: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        Iam: action.payload,
      };
    default:
      return state;
  }
}
