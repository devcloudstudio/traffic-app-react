import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import mock_articles from '../../mock/hijacked-articles'
import { BANNER, POP_UP, SOCIAL } from '../../models/AdStyle'
import Banner from '../../Components/Layout/Ads/Banner';
import PopUp from '../../Components/Layout/Ads/Popup';
import Social from '../../Components/Layout/Ads/Social'

const ArticlePost = (props) => {
  /**
   * NOTE
   * Brand and AD (message) IDs are provided; so, they should be fetched separately in production code
   */

  // const [article, setArticle] = useState({})

  useEffect(() => {
    fetchTrend()
  }, [])

  const [article, setArticle] = useState()

  const fetchTrend = async () => {
    const { data } = await axios.get(`https://traffic-application.herokuapp.com/api/user/activity/hijacked/content/${props.match.params.id}`)

    setArticle(data)
  }

  console.log(article, 'i am')

  const [show, setShow] = useState(true)
  const onClose = () => {
    setShow(false)
  }

  if (article == null) {
    return (
      <h1>This article is not available</h1>
    )
  }

  let ad = null;
  const ad_data = article
  const style = article?.messageStyle

  console.log(style)

  switch (style) {

    case 'banner':
      ad = show && (<Banner avatar={article.brand_img} ad_data='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae orci sed libero blandit rutrum. Donec sodales consequat massa, vel sollicitudin nisi varius ut. Ut at nulla nunc. Quisque laoreet.' onClose={onClose} show={show} />)
      break;
    case 'popup':
      const optinBaitText = "Join us";
      const optinButtonText = "Join";
      const optinPreferredName = "MTN";
      const optinBestEmail = 'mtn@gmail.com'
      const data = { optinBaitText, optinButtonText, optinPreferredName, optinBestEmail }
      ad = show && (<PopUp data={data} onClose={onClose} ad_data={ad_data} avatar={article.brand_img} ad_data={ad_data} />)
      break;
    case 'social':
      ad = show && (<Social trafficSent='' color=''  avatar={article.brand_img} ad_data={article.message} onClose={onClose} show={show} />)
      break;

    default:
      break;
  }

  return (
    <div style={{ width: "100%", height: "100%", background: 'white' }}>
      <iframe src={article.link} width="100%" height="100%" frameborder="0"></iframe>
      
      {ad}
    </div >
  )
}

export default ArticlePost