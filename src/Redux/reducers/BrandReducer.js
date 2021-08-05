import { SAVE_BRAND, GET_BRANDS } from "../actions/types";

export default function brandReducer(state = [], action) {
  switch (action.type) {
    case GET_BRANDS:
      return action.payload;
    case SAVE_BRAND:
      return action.payload;
    default:
      return state;
  }
}
