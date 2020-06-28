import {
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  SET_ERRORS,
} from "../types/uiTypes";

const initialState = {
  loading: false,
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
