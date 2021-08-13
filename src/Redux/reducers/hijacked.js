import { GET_HIJACKED_CONTENT, SAVE_HIJACKED_TREND } from "../actions/types";

export const hijacks = (state=[], action) => {
    switch(action.type){
        case GET_HIJACKED_CONTENT:
            return {
                ...state,
                hijacked_content: action.payload
            }
        case SAVE_HIJACKED_TREND:
            return{
                ...state,
                hijacked_content: action.payload
            }
        default:
            return state
    }
}