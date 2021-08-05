import {GET_LEADS } from '../actions/types'

export const leadsReducer = (state = [], action) =>{
    switch(action.type){
        case GET_LEADS:
            return action.payload
        default:
            return state
    }
}