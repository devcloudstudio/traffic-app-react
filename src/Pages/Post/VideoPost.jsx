import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../../mock/hijacked-articles'

const VideoPost = (props) => {
  const { id } = useParams()
  const article = articles.find(x => x.id === parseInt(id));
  console.log(id)

  return (
    <div style={{ background: 'white', width: '100%', height: '100%' }}>{article.description}</div>
  )
}

export default VideoPost