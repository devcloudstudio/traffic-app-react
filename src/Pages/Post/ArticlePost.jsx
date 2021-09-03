import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import mock_articles from '../../mock/hijacked-articles'
import { BANNER, POP_UP, SOCIAL } from '../../models/AdStyle'
import Banner from '../../Components/Layout/Ads/Banner';
import PopUp from '../../Components/Layout/Ads/PopUp';
import Social from '../../Components/Layout/Ads/Social'

const ArticlePost = (props) => {
  /**
   * NOTE
   * Brand and AD (message) IDs are provided; so, they should be fetched separately in production code
   */

  // const [article, setArticle] = useState({})

  // useEffect(() => {
  //   fetchTrend()
  // }, [])

  const [article, setArticle] = useState(mock_articles[1])

  const fetchTrend = async () => {
    const { data } = await axios.get(`https://traffic-application.herokuapp.com/api/user/activity/hijacked/content/${props.match.params.id}`)

    setArticle(data)
  }

  console.log(article)

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
  const ad_data = article.message

  switch (article?.message?.style) {

    case BANNER:
      ad = show && (<Banner brand={article.brand} ad_data={ad_data} onClose={onClose} show={show} />)
      break;
    case POP_UP:
      const optinBaitText = "Join us";
      const optinButtonText = "Join";
      const optinPreferredName = "MTN";
      const optinBestEmail = 'mtn@gmail.com'
      const data = { optinBaitText, optinButtonText, optinPreferredName, optinBestEmail }
      ad = show && (<PopUp data={data} onClose={onClose} ad_data={ad_data} brand={article.brand} ad_data={ad_data} />)
      break;
    case SOCIAL:
      ad = show && (<Social trafficSent='' color='' brand={article.brand} ad_data={ad_data} onClose={onClose} show={show} />)
      break;

    default:
      break;
  }

  return (
    <div style={{ width: "100%", height: "100%", background: 'white' }}>
      <iframe src={article.link} width="100%" height="100%" frameborder="0"></iframe>
      <img src={article.brand_img} className="brand-img" />
      {ad}
    </div >
  )
}

export default ArticlePost