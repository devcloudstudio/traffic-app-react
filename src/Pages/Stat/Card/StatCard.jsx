import React, { Fragment } from "react"

const StatCard = ({ t, setModal, showHandler, setModalData }) => {
  return (
    <Fragment>
      <div className="stat-card p-relative" style={{ textAlign: 'center' }}>
        <div className="card--body">
          <h3 className="text--bolder text--white lg-text">{t.title}</h3>
        </div>
      </div>
    </Fragment>
  )
}
export default StatCard