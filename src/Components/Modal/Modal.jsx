import React, { Fragment } from "react"
import ReactDOM from "react-dom"

import Backdrop from "./Backdrop"


const ModalOverlay = ({ children, onCancel, leftBtnContent, rightBtnContent, isStyle, rightBtnHandler }) => {
   let style = {
      width: "80%",
      height: "inherit",
      maxWidth: "1000px",
   }
   const content = (
      <div className="modal" style={isStyle && style}>
         {children}
         {leftBtnContent || rightBtnContent ? (
            <div className="btn--group mx-3" >
               {leftBtnContent && <button className="btn btn-outline-primary btn--round text--primary" onClick={onCancel}>{leftBtnContent}</button>}
               {rightBtnContent && <button className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={console.log("Publishing")}>{rightBtnContent}</button>}// TO-DO
            </div>
         ) : ""}
      </div>
   )

   return ReactDOM.createPortal(content, document.getElementById("modal-hook"))
}

const Modal = props => {
   return (
      <Fragment>
         {props.show && <Backdrop onClick={props.onCancel} />}
         {props.show && <ModalOverlay {...props} />}
      </Fragment>
   )
}
export default Modal