import React,{Fragment,useRef,useState} from "react"
import Modal from "../../../../Components/Modal/Modal"
import Banner from "../../../../Components/Layout/Ads/Banner"

const BannerModal = (props)=>{
  const [show,setShow] = useState(false)
  let t = props.modalData
  console.log("Ctamodal Banner",t)
  let inputRef = useRef() 
  const copyToClipboard = (e) => {
    inputRef.current.select();
    document.execCommand('copy');
    inputRef.current.focus();
  };

	return(
         <Modal {...props} isStyle={true} leftBtnContent="Cancel">
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="text--primary text--bolder">Hijack</h1><span className="text--secondary">Hijack this content</span>
            </div>
            <div className="modal-card-preview">
       	      <div className="modal--image">
                {show && <Banner data={t} setShow={setShow}/>}
                <img src={t.image} />
              </div>

	          </div>
            <div className="form--group" style={{width:"300px",margin:"15px auto"}}>
                <label className="text--secondary">Copy Hijacked Link</label>
                <input className="border-bottom form--control" type="text" value={t.link} onClick={copyToClipboard} ref={inputRef}/>
                <i class="fas fa-copy text--primary copy-icon" onClick={copyToClipboard}></i>
             </div>
            <div className="btn--group" style={{flexDirection:"row"}}>
                <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={()=>{
                  props.showHandler() 
                  props.setModal("Share")
                }}>Select Hot traffic sources</button>
                <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={()=>{
                  props.showHandler() 
                  props.setModal("Confirm")
                }}>Get Hot traffic now</button>
             </div>
         </div>
       </Modal>
	)
}

export default BannerModal