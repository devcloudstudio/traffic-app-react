import {
 SET_ALERT,
 REMOVE_ALERT
} from "./types"


export const setAlert = (msg,alertType,timeout=4000)=> async dispatch =>{
  let id = Math.ceil(Math.random()*1000)
  dispatch({
   type: SET_ALERT,
   payload: {msg,id,alertType}
  })

  setTimeout(()=> dispatch({type:REMOVE_ALERT,payload:id}),timeout);
}