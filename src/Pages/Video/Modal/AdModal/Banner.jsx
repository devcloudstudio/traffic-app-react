import React,{Fragment} from "react"
import Modal from "../../../../Components/Modal/Modal"
import Banner from "../../../../Components/Layout/Ads/Banner"

const BannerModal = (props)=>{
	return(
         <Modal {...props} isStyle>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="text--primary text--bolder">Ad Content Banner Style Preview</h1>
            </div>
            <div className="modal-card-preview">
       	    <div className="modal--image">
                     <Banner/>
                <img src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
            </div>
            <div className="card--body px-2">
	          {<p className="text--white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi obcaecati in eaque! Expedita, placeat ea. Sit labore perferendis optio, corporis natur non natus.</p>}
	      </div>
	      </div>
         </div>
          <div className="btn--group mx-3" >
               <button className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={()=>{
                  props.showHandler() 
                  props.setModal("BannerHiajackModal")
                }}>Next</button>
           </div>
       </Modal>
	)
}


export default BannerModal