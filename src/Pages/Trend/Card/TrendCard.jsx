import React, { Fragment } from "react"

const TrendCard = ({ setModal, showHandler, trends, setModalData }) => {
  return (
    <Fragment>
      <div className="cards">

        {trends.map(t => (
          <div className="card"> {/*CARD Start */}
            <div className="img--container"><img alt="a" src={t.image} /></div>
            <div className="card--body">
              <h4 className="text--white">{t.title}</h4>
              <div className="card-options d-flex">
                <span className="text--secondary date">{t.duration !== null ? t.duration : " "}</span>
                <div className="options" ><span className="share" onClick={() => {
                  setModal("ContentLink")
                  showHandler()
                  setModalData(t)
                }}> <i className="text--primary fas fa-share-alt"></i></span>
                  <button className="btn btn-outline-primary text--primary m-card-btn" onClick={() => {
                    setModal("Hijack")
                    showHandler()
                    setModalData(t)
                  }}>Hijack</button>
                  <button className="btn btn-primary m-card-btn" onClick={() => {
                    setModal("ContentPreview")
                    showHandler()
                    setModalData(t)
                  }}>View</button>
                </div>
              </div>
              <div className="card-footer">
                <p className="footer--text text--secondary">{t.subtitle !== null ? t.subtitle : " "}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </Fragment>
  )
}
export default TrendCard