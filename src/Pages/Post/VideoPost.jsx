import React from 'react'
import { useParams } from 'react-router-dom'
import youtubeVideos from '../../mock/youtube-video'
import { brands } from '../../mock/brands'
//import messages from '../../mock/messages'
import { useSelector } from 'react-redux'

const VideoPost = (props) => {
  const messages = useSelector(state => state.messages) || []
  const { id } = useParams()
  console.log(id)
  let videos = youtubeVideos.items;
  const video = videos.find(x => x.id.videoId === id)
  const brand = brands[0]
  const ad = messages[0]

  if (!video) return null;

  return (
    <div style={{ width: "100%", height: "100%", background: 'white', display: 'flex', flexDirection: 'column' }}>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          //frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h3>
          {video.snippet.title}
        </h3>
        <div>
          <span>
            {video.snippet.description}
          </span>
        </div>
      </div>
      <div className="message-card--body card--body" style={{ margin: '20px' }}>
        <img src={ad.img} className="brand-img" alt="" />
        <div className="message-card-topbar justify-content-center">
          <h3>{ad.style}</h3>
          <p className="message-content">{ad.message}</p>
        </div>
      </div>
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

export default VideoPost