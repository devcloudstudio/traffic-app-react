import React from "react"

const Banner = ({ brand, ad_data, onClose }) => {

  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        <img className="ads-avatar" alt="banner" src={brand.avatar} />
        <p>{ad_data.message}</p>
        <span className="close" onClick={() => onClose()}>
          <span style={{ margin: '10px', cursor: 'pointer', position: 'relative', 'top': '-7px' }} class="fa fa-times" aria-hidden="true" onClick={() => onClose()}>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Banner