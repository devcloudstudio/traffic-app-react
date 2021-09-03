import React from "react"
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
	const content = (
		<div className="adsbackdrop" onClick={props.onClick} />
	)
	return ReactDOM.createPortal(content, document.getElementById("backdrop-hook"))
}
export default Backdrop