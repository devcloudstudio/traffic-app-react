import Modal from '../../Modal/Modal';
import React, { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from "../Loader"

const MessageChooser = (props) => {
  const { setModal, showHandler, onCancel, setHijackObjectMessage } = props

  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const listsRef = useRef(new Array())
  const messages = useSelector((state) => state.messages) || []

  const selectMessage = (id) => {
    setHijackObjectMessage(id)
  }

  return (
    <Modal additionalStyle={{ maxHeight: '80%', overflow: 'scroll' }} show={true}>
      <h1 className="text--white brand-heading">Your Saved Brands</h1>
      <div className="cards" style={{ height: '50%' }}>

        {messages && messages.map((message, index) => {

          return (
            <div className={`brand-card`}>  {/*CARD START */}
              <div className="card--body">
                <div className="message-card--body card--body">
                  <img src={message.img} className="brand-img" />
                  <div className="message-card-topbar justify-content-center">
                    <h3 className="text--white">{message.style}</h3>
                    <p className="text--white message-content">{message.message}</p>
                    <div className="brand-options">
                      <span className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={() => {
                        selectMessage(message._id);
                        setModal("Hijack")
                        showHandler()
                      }}>Choose</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {isLoading && <Loader />}
      </div>
    </Modal>
  )
}

export default MessageChooser;
