import { LOAD_PROFILE } from "../actions/types";

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
