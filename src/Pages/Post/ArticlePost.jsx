import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../../mock/hijacked-articles'
import messages from '../../mock/messages'

const ArticlePost = (props) => {
  const { id } = useParams()
  const article = articles.find(x => x.id === parseInt(id));
  const ad = messages[0]

  return (
    <div style={{ width: "100%", height: "100%", background: 'white', display: 'flex', flexDirection: 'column' }}>
      <img className="post-img"
        src={article.img} alt=""
      />
      <h3 style={{ alignSelf: 'center' }}>
        {article.title}
      </h3>
      <div>
        <div>
          <span>
            {article.description}
          </span>
        </div>
      </div>
      <div className="message-card--body card--body" style={{ margin: '20px' }}>
        <img src={ad.img} className="brand-img" />
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

export default ArticlePost