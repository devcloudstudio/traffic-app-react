import React,{useRef} from 'react'
import Modal from "../../../Components/Modal/Modal"


const ContentLink = (props)=>{
  let t = props.modalData
  let inputRef = useRef() 
  let copyButtonRef = useRef() 
  const copyToClipboard = (e) => {
    inputRef.current.select();
    document.execCommand('copy');
    inputRef.current.focus();
    copyButtonRef.current.innerHTML = "Copied!"
  };

	return(
	   <Modal {...props}>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="mx-2 text--primary text--bolder">Content Link</h1><span className="text--secondary py-2">Copy or share the link to get free traffic</span>
            </div>
       	    <div className="form--group">
                {/*<label className="text--secondary"></label>*/}
                <input className="border-bottom form--control" type="text" ref={inputRef} value={t.link ? t.link : "" } placeholder="http://demos.rea/app/xaa" style={{paddingBottom:"10px"}}/>
            </div>
            <div className="btn--group" style={{flexDirection:"column"}}>
                <button className="btn btn-outline-primary btn--round text--primary btn-modal" ref={copyButtonRef} onClick={copyToClipboard}>Copy Link</button>
                <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={()=>{
                  props.showHandler() 
                  props.setModal("Share")
                }}>Sharing</button>
             </div>
             
         </div>
       </Modal>
	)
}

export default ContentLink