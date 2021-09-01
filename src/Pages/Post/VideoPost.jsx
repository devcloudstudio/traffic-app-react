import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import youtubeVideos from '../../mock/youtube-video'
import { brands } from '../../mock/brands'
//import messages from '../../mock/messages'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchHijackedVideos } from '../../Redux/actions/userActions'
import { Link } from 'react-router-dom'
import ls from 'localstorage-ttl'


const VideoPost = (props) => {
  const [vids, setVideos] = useState([])

  const dispatch = useDispatch()



  // const messages = useSelector(state => state.messages) || []
  // const { id } = useParams()
  // console.log(id)
  // let videos = youtubeVideos.items;
  // const video = videos.find(x => x.id.videoId === id)
  // const brand = brands[0]
  // const ad = messages[0]

  // if (!video) return null;
  // https://www.youtube.com/watch?v=WBqVwK8-e7Q


  const fetchvideos = async () => {

    const { data } = await axios.get('http://localhost:5000/api/user/activity/hijack/video')

    setVideos(data)
  }

  console.log(vids)

  return (
    <div style={{ width: "100%", height: "100%", background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div id="videos" className="video-container">
        <div className="youtube" id={ls.get('video-id')} src='https://images.unsplash.com/photo-1498588543704-e0d466ddcfe5?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTE2ODUxfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' style={{ width: 500, height: 294 }} />
      </div>

      {/* <div className="message-card--body card--body" style={{ margin: '20px' }}>
      <div className="youtube" id={vidid} src={vidLink} style={{width: 500, height: 294}} />
        <img src={ad.img} className="brand-img" alt="" />
        <div className="message-card-topbar justify-content-center">
          <h3>{ad.style}</h3>
          <p className="message-content">{ad.message}</p>
        </div>
      </div> */}
      {/* <div style={{ margin: '20px' }}>
        <div className="brand-card-topbar justify-content-center">
          <div>
            <img src={brand.avatar} className="brand-img" />
          </div>
          <h3>{brand.name}</h3>
        </div>
        <p className="brand-slogan">{brand.slogan}</p>
      </div> */}
    </div >


  )
}

const VideoCard = () => {
  return (

    <div className="youtube" id="8DEDzXbwqyM" src="" style={{ width: 500, height: 294 }} />
  )
}






export default VideoPost