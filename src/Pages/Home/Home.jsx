import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import '../../asset/css/home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="bg-img">
        <NavBar />
      </div>
      <div className="container">
        <div>
          <img src="https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80s" alt="img" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac cursus tortor. Proin nec ante eu diam egestas
          aliquam ac sit amet quam. Praesent tincidunt erat diam. Nam ullamcorper magna erat, in tincidunt eros hendrerit
          sed. Nulla nec risus elit. In dictum mollis porta. Nulla facilisi. Maecenas ut lectus urna. Aenean nec rhoncus
          nibh, nec venenatis augue. Aliquam at metus aliquet, posuere nisl ac, maximus tellus.
        </p>
      </div>
      <div className="container-reversed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac cursus tortor. Proin nec ante eu diam egestas
          aliquam ac sit amet quam. Praesent tincidunt erat diam. Nam ullamcorper magna erat, in tincidunt eros hendrerit
          sed. Nulla nec risus elit. In dictum mollis porta. Nulla facilisi. Maecenas ut lectus urna. Aenean nec rhoncus
          nibh, nec venenatis augue. Aliquam at metus aliquet, posuere nisl ac, maximus tellus.
        </p>
        <div>
          <img src="https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="img" />
        </div>
      </div>
      <h1 className="title">Contacts</h1>
      <div id="contact-container">
        <div className="contact">
          <img src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png" alt="img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac cursus tortor. Proin nec ante eu diam egestas
            aliquam ac sit amet quam. Praesent tincidunt erat diam. Nam ullamcorper magna erat, in tincidunt eros hendrerit
            sed. Nulla nec risus elit. In dictum mollis porta. Nulla facilisi. Maecenas ut lectus urna. Aenean nec rhoncus
            nibh, nec venenatis augue. Aliquam at metus aliquet, posuere nisl ac, maximus tellus.
          </p>
        </div>
        <div className="contact">
          <img src="https://www.pngkey.com/png/full/119-1195864_avatar-transparent-female-cartoon.png" alt="img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac cursus tortor. Proin nec ante eu diam egestas
            aliquam ac sit amet quam. Praesent tincidunt erat diam. Nam ullamcorper magna erat, in tincidunt eros hendrerit
            sed. Nulla nec risus elit. In dictum mollis porta. Nulla facilisi. Maecenas ut lectus urna. Aenean nec rhoncus
            nibh, nec venenatis augue. Aliquam at metus aliquet, posuere nisl ac, maximus tellus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home