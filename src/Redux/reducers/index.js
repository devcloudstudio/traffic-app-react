import { combineReducers } from 'redux'
import user from './userReducer'
import alert from './alertReducer'
import profile from './userProfileReducer'
import brands from './BrandReducer'
import { messageReducer } from './messageReducer'
import { leadsReducer } from './leadsReducer'
import {hijacks} from './hijacked'


export default combineReducers({
    user,
    alert,
    profile,
    brands,
    hijacks,
    messages: messageReducer,
    leads: leadsReducer
})