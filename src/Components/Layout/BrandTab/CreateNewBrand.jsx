import React, { useState, Fragment } from "react"
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { saveBrand } from '../../../Redux/actions/userActions'
import { useHistory } from 'react-router-dom'

const CreateNewBrand = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const [brand, setBrand] = useState({ name: '', slogan: '', avatar: '' })
  const handleChange = e => setBrand({ ...brand, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(saveBrand(brand, history))
  }

  const [show, setShow] = useState(true)
  const [tab, setTab] = useState("home")

  const onCancel = () => {
    console.log("Close Modal")
    setShow(false)
  }

  const showHandler = () => {
    console.log("show Modal")
    setShow(true)
  }

  return (
    <Fragment>
      <div className="main--wrapper">
        <div className="auth--container d-flex">
          <div className="modal-wrapper d-flex">
            <div className="heading text--center mx-4">
              <h1 className="mx-2 text--primary text--bolder">Brands</h1><span className="text--secondary">Create Your Brand</span>
            </div>
            <div className="form--group">
              <div className="dropbox-container flex-column">

                {brand.avatar !== "" ? <img src={brand.avatar ? brand.avatar : ''} style={{ width: "200px" }} /> : (
                  <Fragment>
                    <span className="text--white">Drag and drop  to upload Brand Image</span>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setBrand({ ...brand, avatar: base64 })} onChange={showHandler} className="btn btn-outline-primary btn-primary btn--round text--primary my-2 file-input" />
                  </Fragment>
                )}

              </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form--group">
                <input name="name" value={brand.name} onChange={handleChange} className="border-bottom form--control" type="text" placeholder="Brand Name" />
              </div>
              <div className="form--group">
                <input value={brand.slogan} name="slogan" onChange={handleChange} className="border-bottom form--control" type="text" placeholder="Brand Slogan" />
              </div>
              <div className="btn--group mt-5 w-100">
                <button className="btn btn-outline-primary btn--round text--primary ">Cancel</button>
                <button className="btn btn-outline-primary btn-primary btn--round text--primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateNewBrand