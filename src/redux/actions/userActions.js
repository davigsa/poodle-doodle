import axios from "axios";
import jwtDecode from "jwt-decode";

import {
  GET_USER_DETAILS,
  SIGNIN_USER,
  SIGNUP_USER,
  GET_USER_BY_ID,
} from "../types/userTypes";
import { SET_LOADING_FALSE, SET_LOADING_TRUE } from "../types/uiTypes";

export function getUserDetails(userHandle) {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_TRUE });
    axios
      .get(`/user/${userHandle}`)
      .then((res) => {
        dispatch({ type: GET_USER_DETAILS, payload: res.data });
        dispatch({ type: SET_LOADING_FALSE });
      })
      .catch((err) => {
        dispatch({ type: SET_LOADING_TRUE });
        return console.log(err);
      });
  };
}

export function signIn(userData, history) {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_TRUE });
    axios
      .post("/signin", userData)
      .then((res) => {
        const FBIdToken = `Bearer ${res.data}`;
        localStorage.setItem("FBIdToken", FBIdToken);
        const { user_id } = jwtDecode(res.data);
        dispatch(getUserById(user_id));
        dispatch({ type: SIGNIN_USER, payload: res.data });
        dispatch({ type: SET_LOADING_FALSE });
        history.push("/feed");
      })
      .catch((err) => {
        dispatch({ type: SET_LOADING_FALSE });
        console.error(err);
      });
  };
}

export function signUp(userData, history) {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_TRUE });
    axios
      .post("/signup", userData)
      .then((res) => {
        const FBIdToken = `Bearer ${res.data}`;
        localStorage.setItem("FBIdToken", FBIdToken);
        const { user_id } = jwtDecode(res.data);
        dispatch(getUserById(user_id));
        dispatch({ type: SIGNUP_USER, payload: res.data });
        dispatch({ type: SET_LOADING_FALSE });
        history.push("/feed");
      })
      .catch((err) => {
        dispatch({ type: SET_LOADING_FALSE });
        console.error(err);
      });
  };
}

export function getUserById(userId) {
  return (dispatch) => {
    axios
      .get(`/users/${userId}`)
      .then((res) => {
        dispatch({ type: GET_USER_BY_ID, payload: res.data });
      })
      .catch((err) => {});
  };
}
