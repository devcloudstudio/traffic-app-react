import { combineReducers } from 'redux'
import user from './userReducer'
import alert from './alertReducer'
import profile from './userProfileReducer'
import brands from './BrandReducer'
import { messageReducer } from './messageReducer'
import { leadsReducer } from './leadsReducer'


export default combineReducers({
    user,
    alert,
    profile,
    brands,
    messages: messageReducer,
    leads: leadsReducer
})