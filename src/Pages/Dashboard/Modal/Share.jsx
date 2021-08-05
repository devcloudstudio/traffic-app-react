import React,{useState,Fragment} from "react"
import Modal from "../../../Components/Modal/Modal"
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LivejournalShareButton,
  MailruShareButton,
  MailruIcon,
  OKShareButton,
  PinterestShareButton,
  PinterestIcon,
  PocketShareButton,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton
} from "react-share";


const Share = (props)=>{
  const url = props.modalData.link
  return(
	    <Modal {...props} leftBtnContent="Cancel" rightBtnContent="DONE">
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="mx-2 text--primary text--bolder">Share</h1>
            </div>

            <div className="btn--group" style={{flexDirection:"row", flexWrap: 'wrap'}}>
               <span className="share-icon">
                 <FacebookShareButton url={url}>
                  <FacebookIcon size={32} />
                </FacebookShareButton> 
               </span>
               <span className="share-icon">
                  <FacebookMessengerShareButton url={url}>
                    <FacebookMessengerIcon size={32} />
                </FacebookMessengerShareButton>
               </span>
               <span className="share-icon">
                 <TwitterShareButton url={url}>
                    <TwitterIcon size={32} />
                </TwitterShareButton>
               </span>
               <span className="share-icon">
               <PinterestShareButton url={url}>
                  <PinterestIcon size={32} />
                </PinterestShareButton>
               </span>
               <span className="share-icon">
                <LinkedinShareButton url={url}>
                  <LinkedinIcon size={32} />
              </LinkedinShareButton>
               </span>

              <span className="share-icon">
              <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} />
          </WhatsappShareButton>
               </span>

               <span className="share-icon">
               <TelegramShareButton url={url}>
            <TelegramIcon size={32} />
          </TelegramShareButton>
               </span>

               <span className="share-icon">
               <RedditShareButton url={url}>
            <RedditIcon size={32} />
          </RedditShareButton>
               </span>

               <span className="share-icon">
               <ViberShareButton url={url}>
            <ViberIcon size={32} />
          </ViberShareButton>
               </span>

               <span className="share-icon">
                  <LineShareButton url={url}>
            <LineIcon size={32} />
          </LineShareButton>
               </span>

             </div>
             
         </div>
       </Modal>
  )
}

export default Share
