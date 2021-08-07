import React, { Fragment } from "react"
import Modal from "../../../Modal/Modal"

const ContentPreview = (props) => {
  return (
    <Modal {...props}>
      <div className="">
        <div className="heading text--center mb-5">
          <h1 className="text--primary text--bolder">Hijack</h1><span className="text--secondary">Hijack this content</span>
        </div>
        <div className="modal-card-preview">
          <div className="modal--image">
            <img src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
          </div>
          <div className="card--body px-2">
            <h3 className="text--bolder text--white">Lorem ipsum dolor sit amet consectetur, adipisicing elit</h3>
            <div className="card-options d-flex">
              <span className="text--secondary py-2">21 Jaunary 2013</span>
            </div>
            <div className="card-footer">
              <p className="footer--text text--secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi obcaecati in eaque! Expedita, placeat ea. Sit labore perferendis optio, corporis natur non natus.</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

const Social = (props) => {
  return (
    <Fragment>
      <div className="social-container">
        <div className="social-wrapper">

          <img className="chathead" src="https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png" />
          <div className="message-widget">
            <span className="close">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </span>
            <h5 className="">Thank you for visiting our page, we are very happy that you took your time to analyze the data which we ave you.</h5>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <ContentPreview show="true" />
    </Fragment>
  )
}

export default Social