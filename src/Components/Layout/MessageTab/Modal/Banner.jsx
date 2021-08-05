import React,{Fragment,useState} from "react"
import Modal from "../../../Modal/Modal"
import Banner from "../../Ads/Banner"
import {useLocation} from "react-router-dom"

const BannerModal = (props)=>{
  const {hash} = useLocation()
  let nextBtn = ""
  const [show,setShow] = useState(true)
  if(hash === ""){
    nextBtn = (
     <div className="btn--group mx-3" >
               <button className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={()=>{
                  props.showHandler()
                  props.setModal("BannerModal")
                }}>Next</button>
           </div>
     )
  }

	return(
         <Modal {...props} isStyle>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="text--primary text--bolder">Ad Content Banner Style Preview</h1>
            </div>
            <div className="modal-card-preview">
       	    <div className="modal--image">
                    {show && <Banner data={props.formData} setShow={setShow} />}
                <img src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
            </div>
            <div className="card--body px-2">
	          {<p className="text--white"></p>}
	      </div>
	      </div>
         </div>
         {nextBtn ? nextBtn : ""}
       </Modal>
	)
}


export default BannerModal