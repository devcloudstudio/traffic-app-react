import React from "react"
import Modal from "../../../Components/Modal/Modal"

const ContentPreview = (props) => {
  let t = props.modalData
  return (
    <Modal {...props}>
      <div className="">
        <div className="heading text--center mb-5">
          <h1 className="my-2 text--primary text--bolder">Content Preview</h1><span className="text--secondary">Content Preview with your Brand and messages</span>
        </div>
        <div className="modal-card-preview">
          <div className="modal--image">
            <img src={t.image !== null ? t.image : ""} />
          </div>
          <div className="card--body px-2">
            <h3 className="text--bolder text--white">{t.title !== null ? t.title : " "}</h3>
            <div className="card-options d-flex">
              <span className="text--secondary py-2">{t.duration !== null ? t.duration : " "}</span>
            </div>
            <div className="card-footer">
              <p className="footer--text text--secondary">{t.subtitle !== null ? t.subtitle : " "}.</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ContentPreview