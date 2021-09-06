import React, { Fragment } from "react"

const StatCard = ({ hijackedTitle, hijackedLength, t, setModal, showHandler, setModalData }) => {

  return (
    <Fragment>
      <div className="stat-card p-relative" style={{ textAlign: 'center' }}>
        <div className="card--body">
          <h3 className="text--bolder text--white lg-text">{hijackedTitle}</h3>
          <p className="text--bolder text--white lg-text">{hijackedLength}</p>
        </div>
        
      </div>
    </Fragment>
  )
}
export default StatCard