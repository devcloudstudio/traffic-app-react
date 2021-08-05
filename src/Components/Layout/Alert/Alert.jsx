import React from "react"
import {setAlert} from "../../../Redux/actions/alertAction"
import {useSelector} from "react-redux"

const Alert = ()=>{

	const alerts = useSelector(state=>state.alert);
	
	return(
	<div className="alert-container">
	     {(alerts !== null  && alerts.length > 0) && alerts.map(alert => (
	      <div className={`alert alert-${alert.alertType} anim`}>
	        {alert.msg}
	      </div>
	     ))}
  
     </div>
	)
}

export default Alert