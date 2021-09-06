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
                <img className="popup-ad-img" src='https://i.guim.co.uk/img/media/7a0f078ae4a9358c3dd98ddcd583af19d16ab91d/0_132_4633_2779/master/4633.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d1a282b95726433bee2a41e265814376' alt='' /> : < h2 style={{ margin: 'auto' }} > mybrad</h2>
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