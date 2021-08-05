import React,{Fragment} from "react"
import Modal from "../../Modal/Modal"
import Popup from "../Ads/Popup"

const PopupModal = (props)=>{
	return(
         <Modal {...props} show="true" isStyle={true} leftBtnContent="Cancel">
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="text--primary text--bolder">Hijack</h1><span className="text--secondary">Hijack this content</span>
            </div>
            <div className="modal-card-preview" style={{margin:"50px"}}>
       	      <div className="modal--image">
                <Popup/>
                <img style={{maxHeight: "200px"}} src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
              </div>
	          </div>
            <div className="form--group" style={{width:"300px",margin:"15px auto"}}>
                <label className="text--secondary">Copy Hijacked Link</label>
                <input className="border-bottom form--control" type="text" value="https://www.hiacked.com"/>
                <i class="fas fa-copy text--primary copy-icon"></i>
             </div>
             <div className="btn--group" style={{flexDirection:"row"}}>
                <button className="btn btn-outline-primary btn--round text--primary btn-modal">Select Hot traffic sources</button>
                <button className="btn btn-outline-primary btn--round text--primary btn-modal">Get Hot traffic now</button>
             </div>
         </div>
       </Modal>
	)
}

export default PopupModal