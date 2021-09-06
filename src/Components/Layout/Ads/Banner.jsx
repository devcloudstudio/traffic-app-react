import React from "react"

const Banner = ({ brand, ad_data, avatar, onClose }) => {

  return (
    <div className="banner-container" style={{width: '100%', padding: 20}}>
      <div className="banner-wrapper">
        <img className="ads-avatar" alt="banner" src={avatar} />
        <p style={{textAlign: 'center'}}>{ad_data}</p>
        <span className="close" onClick={() => onClose()}>
          <span style={{ margin: '10px', cursor: 'pointer', position: 'relative', 'top': '-7px' }} class="fa fa-times" aria-hidden="true" onClick={() => onClose()}>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Banner