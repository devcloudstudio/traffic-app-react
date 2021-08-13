import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../../mock/hijacked-articles'

const ArticlePost = (props) => {
  const { id } = useParams()
  const article = articles.find(x => x.id === parseInt(id));

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
      <div className="message-card--body card--body" style={{ margin: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
        <img src={article.message.img} className="brand-img" />
        <div className="message-card-topbar justify-content-center">
          <h3>{article.message.style}</h3>
          <p className="message-content">{article.message.message}</p>
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

export default ArticlePost