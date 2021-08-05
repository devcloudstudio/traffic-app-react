import React,{Fragment,useState, useEffect} from "react"
import Modal from "../../../../Components/Modal/Modal"
import Banner from "../../../../Components/Layout/Ads/Banner"
import ls from 'localstorage-ttl'
import axios from 'axios'

const BannerModal = (props)=>{
  const [show,setShow] = useState(true)
  const t = props.modalData
 console.log("Admodal Banner",t)
 const [brandavatar, setAvatar] = useState('')
 const [messageContent, setContent] = useState('')


useEffect(() => {
  cachedIdBrand()
  cachedIdMessage()
}, [])

async function cachedIdBrand(){
 

    if(ls.get('brand')) {
      const id = ls.get('brand') 
      const token = localStorage.getItem('user-token')
       
      const { data: { avatar }} = await axios.get(`http://localhost:5000/api/user/activity/brand-avatar/${id}`, {
       headers: {
          Authorization: `Bearer ${token}`
      }
      })
     
      setAvatar(avatar)
    }
 
}

async function cachedIdMessage(){
    if(ls.get('content')) {
      const id = ls.get('content') 
      const token = localStorage.getItem('user-token')
       
      const { data: { content }} = await axios.get(`http://localhost:5000/api/user/activity/message/${id}`, {
       headers: {
          Authorization: `Bearer ${token}`
      }
      })
      console.log(content)
     
      setContent(content)
    }
}



	return(
         <Modal {...props} isStyle>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="text--primary text--bolder">Ad Content Banner Style Preview</h1>
            </div>
            <div className="modal-card-preview">
       	    <div className="modal--image">
                     {show && <Banner avatar={brandavatar}  data={t} setShow={setShow}/>}
                <img src={t.image} />
            </div>
            <div className="card--body px-2">
	          {<p className="text--white">{messageContent !==null? messageContent : t.title}</p>}
	      </div>
	      </div>
         </div>
          <div className="btn--group mx-3" >
               <button className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={()=>{
                  props.showHandler() 
                  props.setModal("BannerHiajackModal")
                }}>Save</button>
           </div>
       </Modal>
	)
}


export default BannerModal