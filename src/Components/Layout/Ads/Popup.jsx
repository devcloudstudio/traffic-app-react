import React from "react"

const PopUp = (props) => {
   const style = {
      maxWidth: "50px",
      maxHeight: "50px"
   }
   const { optinBaitText, optinButtonText, optinPreferredName, optinBestEmail } = props.data
   const { img, message } = props


   return (
      <div className="popup-container">
         <div className="popup-wrapper" >
            <div className="popup-header">
               <span className="close" onClick={() => props.onClose()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
               </span>
            </div>
            <img className="popup-avatar" src={img} />
            <p>{message}</p>
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
   )
}

export default PopUp