import React,{Fragment,useState, useEffect} from "react"
import Modal from "../../../../Components/Modal/Modal"
import Banner from "../../../../Components/Layout/Ads/Banner"
import ls from 'localstorage-ttl'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { saveTrendHijacked } from "../../../../Redux/actions/userActions"

import BannerPreview from '../../../../Components/Layout/Ads/Banner';
import PopUp from '../../../../Components/Layout/Ads/Popup';
import Social from '../../../../Components/Layout/Ads/Social';



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
      const valueId = ls.get('brand') 

     
    
      const token = localStorage.getItem('user-token')
       
      const { data: { avatar }} = await axios.get(`http://localhost:5000/api/user/activity/brand-avatar/${valueId._id}`, {
       headers: {
          Authorization: `Bearer ${token}`
      }
      })
     
      setAvatar(avatar)
    }
 
}

async function cachedIdMessage(){
    if(ls.get('content')) {
      const messageId = ls.get('content') 
      console.log(messageId)
      const token = localStorage.getItem('user-token')
       
      const { data } = await axios.get(`http://localhost:5000/api/user/activity/message/${messageId._id}`, {
       headers: {
          Authorization: `Bearer ${token}`
      }
      })
     
      console.log('sweet content', data)
      setContent(data)
    }
}

const dispatch = useDispatch()


const saveHijack = () => {
  const content = {
    trend_img: t.image,
    title: t.title,
    link: t.link,
    brand_img: brandavatar,
    message: messageContent.message,
    messageStyle: messageContent.style
  }
 dispatch(saveTrendHijacked(content))
}


	return(
         <Modal {...props} isStyle>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="text--primary text--bolder">Ad Content Banner Style Preview</h1>
            </div>
            <div className="modal-card-preview">
       	    <div className="modal--image">
                     
                    
                <iframe src={t.link} style={{width: '100%'}}></iframe>
            </div>
            <div className="card--body px-2">
	           {<p className="text--white">{messageContent.message !==null? messageContent.message : t.title}</p>} 
	      </div>
	      </div>
         </div>
          <div className="btn--group mx-3" >
               <button className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={()=>{
                  props.showHandler() 
                  props.setModal("BannerHiajackModal")
                  saveHijack()
                }}>Save</button>
           </div>
       </Modal>
	)
}


export default BannerModal