import React, { useState, useEffect } from "react"
import axios from 'axios'
import ls from 'localstorage-ttl'

const Social = (props) => {
   console.log("social", props.data)
   const [brandAvatar, setAvatar] = useState('')

   useEffect(() => {
      async function getAvatar() {

         if (ls.get('brand')) {
            const id = ls.get('brand')
            const token = localStorage.getItem('user-token')

            const { data: { avatar } } = await axios.get(`http://localhost:5000/api/user/activity/brand-avatar/${id}`, {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            })

            setAvatar(avatar)
         }
      }
      getAvatar()
   }, [])

   return (
      <div className="social-container">
         <div className="social-wrapper">

            <img className="chathead" alt="brand avatar" src={brandAvatar} />
            <div className="message-widget">
               <span className="close" onClick={() => props.setShow(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
               </span>
               <h5 className="">{props.data.message}</h5>
               <div className="bottom" style={{ color: props.data.color }}>
                  <a href={`http://${props.data.tarfficSent}`} target="_blank">click here</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Social