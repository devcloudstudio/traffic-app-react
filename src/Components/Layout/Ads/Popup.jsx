import React, { useState } from "react"
import AdsModal from "../../AdsModal/AdsModal"

const PopUp = (props) => {
   const style = {
      maxWidth: "50px",
      maxHeight: "50px"
   }
   const { optinBaitText, optinButtonText, optinPreferredName, optinBestEmail } = props.data
   const { brand, ad_data } = props
   const [show, setshow] = useState(true)

   return (
      <AdsModal show={show}>
         <div className="popup-container">
            <div className="popup-wrapper" >
               <div className="popup-header">
                  {brand?.avatar && <img className="popup-avatar" src={brand.avatar} />}
                  {/* {brand?.name && < h2 style={{ margin: 'auto' }} > {brand.name}</h2>} */}
                  <span style={{ margin: '10px', cursor: 'pointer' }} className="close" class="fa fa-times" aria-hidden="true" onClick={() => props.onClose()}>
                  </span>
               </div>
               {ad_data?.img ? <img className="popup-ad-img" src={ad_data.img} alt={brand.name} /> : < h2 style={{ margin: 'auto' }} > {brand.name}</h2>}
               <p>{ad_data.message}</p>
               {/* <div className="popup-form">
               <h3 className="text--primary text--center">{optinBaitText} </h3>
               <div className="form-group">
                  <input type="text" className="popup-input" placeholder={optinPreferredName} />
               </div>
               <div className="form-group">
                  <input type="text" className="popup-input" placeholder={optinBestEmail} />
               </div>

               <button className="btn btn-primary w-100">{optinButtonText}</button>
            </div> */}
            </div>
         </div>
      </AdsModal >
   )
}

export default PopUp