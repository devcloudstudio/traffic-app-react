import React,{useState,Fragment} from "react"
import Modal from "../Modal/Modal"
import ConfirmModal from "./ConfirmModal"
import EditModal from "./EditModal"
import FileBase from 'react-file-base64'


const Thumbnail = ()=>{
  const [show,setShow] = useState(false)
  const [modal,setModal] = useState(null)
  

   const [brand, setBrand] = useState({name: '', slogan: '', avatar: ''})
  
  

  const handleChange = e => setBrand({...brand, [e.target.name]: e.target.value})


    const onCancel = ()=>{
      console.log("Close Modal")
      setShow(false)
    }
    const showHandler = ()=>{
      console.log("show Modal")
      setShow(true)
    }

   const submitHandler = (e)=>{
     e.preventDefault()

     alert("Thumbnail saved")
   }
	return(
    <Fragment>
     {modal === "editmodal" && brand.avatar.length > 0 ?  <EditModal avatar={brand.avatar} setBrand={setBrand} show={show} onCancel={onCancel} /> : null}
     
     
     <div className="main--wrapper">
        <div className="auth--container d-flex">
          <div className="modal-wrapper d-flex">
            <div className="heading text--center mx-4">
              <h1 className="mx-2 text--primary text--bolder">Create Thumbnail</h1>
              <span className="text--secondary">Upload the image you wish to use as Thumbnail</span>
            </div>
            <form onSubmit={submitHandler}>
              <div className="form--group">
                <div className="dropbox-container flex-column">
                    
                    {brand.avatar !== "" ? <img src={brand.avatar ? brand.avatar : ''} style={{width:"200px"}}/>:(
                     <Fragment>
                       <span className="text--white">Drag and drop  to upload Brand Image</span>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setBrand({ ...brand, avatar: base64 })}   className="btn btn-outline-primary btn-primary btn--round text--primary my-2 file-input" />
                      </Fragment>
                    )}

               </div>
              </div>
              <div className="my-2">
                <div className="btn btn-outline-primary btn-primary btn--round text--primary" style={{width:"100%",textAlign:"center"}} onClick={()=>{ 
                  setShow(true)
                  setModal("editmodal")
                 }}>Edit Thumbnail</div>
              </div>
              <div className="btn--group mt-5">
                <button className="btn btn-outline-primary btn--round text--primary" style={{flex:"0.9"}}>Back</button>
                <button className="btn btn-outline-primary btn-primary btn--round text--primary" type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </Fragment>
	)
}

export default Thumbnail