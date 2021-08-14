import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import articles from '../../mock/hijacked-articles'
import { BANNER, POP_UP } from '../../models/AdStyle'
import Banner from '../../Components/Layout/Ads/Banner';
import PopUp from '../../Components/Layout/Ads/PopUp';

const ArticlePost = (props) => {
  const { id } = useParams()
  const article = articles.find(x => x.id === parseInt(id));
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

  switch (article.message.style) {
    case BANNER:
      const { img, message } = article.message
      ad = show && (<Banner img={img} message={message} onClose={onClose} show={show} />)
      break;
    case POP_UP:
      const optinBaitText = "Join us";
      const optinButtonText = "Join";
      const optinPreferredName = "MTN";
      const optinBestEmail = 'mtn@gmail.com'
      const data = { optinBaitText, optinButtonText, optinPreferredName, optinBestEmail }
      ad = show && (<PopUp data={data} onClose={onClose} message={article.message} />)
      break;

    default:
      break;
  }

  return (
    <div style={{ width: "100%", height: "100%", background: 'white', display: 'flex', flexDirection: 'column' }}>
      <img className="post-img"
        src={article.trend_img} alt=""
      />
      <img style={{ borderRadius: '10px', width: '100px', height: '100px', position: 'absolute', top: '0', left: '0', margin: '10px' }} src={article.brand_img} className="brand-img" />
      <h3 style={{ alignSelf: 'center' }}>
        {article.title}
      </h3>
      <div>
        <div>
          <span>
            {/* {article.message} */}
          </span>
        </div>
      </div>
      {ad}
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

export default ArticlePost