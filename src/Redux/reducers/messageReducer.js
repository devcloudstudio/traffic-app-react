import { GET_MESSAGES, SAVE_MESSAGE } from "../actions/types";

export const messageReducer = (state =[], action) => {
    switch(action.type){
        case GET_MESSAGES:
            return action.payload
        case SAVE_MESSAGE:
            return action.payload
        default:
            return state
    }
}