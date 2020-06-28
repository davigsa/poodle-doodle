import { CREATE_DOODLE, FETCH_DOODLES } from "../types/dataTypes";

const initialState = {
  doodles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DOODLES:
      return {
        doodles: [...action.payload],
      };
    case CREATE_DOODLE:
      return state;
    default:
      return state;
  }
}
