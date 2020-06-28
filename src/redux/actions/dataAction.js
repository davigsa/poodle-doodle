import axios from "axios";

import { CREATE_DOODLE, FETCH_DOODLES } from "../types/dataTypes";

export function fetchDoodles() {
  return (dispatch) => {
    axios
      .get("/screams")
      .then((res) => {
        dispatch({ type: FETCH_DOODLES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
}

export function postDoodle(doodleData) {
  return (dispatch) => {
    const token = localStorage.getItem("FBIdToken");
    axios
      .post("/scream", doodleData, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        dispatch({ type: CREATE_DOODLE });
        dispatch(fetchDoodles());
      })
      .catch((err) => console.error(err));
  };
}
