import React from "react";

const VideoCard = ({
  setModal,
  showHandler,
  videos,
  vimeovideos,
  setModalData,
}) => {
  const modalView = (data, video) => {
    setModal(data);
    showHandler();
    setModalData(video);
  };

  return (
    <>
      <div className='cards'>
        {videos.map((video) => (
          <>
            <div className='card' key={video.id}>
              {" "}
              {/*CARD Start */}
              <div className='img--container'>
                <iframe
                  width='100%'
                  height='100%'
                  style={{ width: "100%", height: "100%" }}
                  className='img-frame'
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>
              <div className='card--body'>
                <h4 className='text--white'>
                  {video.snippet.title !== null
                    ? video.snippet.title
                    : " No title  "}
                </h4>
                <div className='card-options d-flex'>
                  <span className='text--secondary date'>
                    {video.snippet.publishedAt}
                  </span>
                  <div className='options'>
                    <span
                      className='share'
                      onClick={() => modalView("ContentLink", video)}
                    >
                      {" "}
                      <i className='fas fa-share'></i>
                    </span>
                    <button
                      className='btn btn-outline-primary text--primary m-card-btn'
                      onClick={() => modalView("Hijack", video)}
                    >
                      Hijack
                    </button>
                    <button
                      className='btn btn-primary m-card-btn'
                      onClick={() => modalView("ContentPreview", video)}
                    >
                      <span className='fa fa-eye'></span>
                    </button>
                  </div>
                </div>
                <div className='card-footer'>
                  <p
                    className='footer--text text--secondary'
                    style={{ color: "#ddd" }}
                  >
                    {video.snippet.description !== null
                      ? video.snippet.description
                      : " No Description "}
                  </p>
                </div>
              </div>
            </div>{" "}
            {/*CARD End */}
          </>
        ))}

        {vimeovideos.map((video) => {
          const id = video.uri.slice(8);
          const description = video.description;
          const link = video.link;
          const tags = video.tags;

          return (
            <div className='card' key={video.id}>
              {" "}
              {/*CARD Start */}
              <div className='img--container'>
                <iframe
                  width='100%'
                  height='100%'
                  className='iframe'
                  src={`https://player.vimeo.com/video/${id}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=189862`}
                  frameborder='0'
                  allow='autoplay; fullscreen'
                  allowfullscreen
                ></iframe>
              </div>
              <div className='card--body'>
                <h4 className='text--white'>video</h4>
                <div className='card-options d-flex'>
                  <span className='text--secondary date'>21 Jaunary 2013</span>
                  <div className='options'>
                    <span
                      className='share'
                      onClick={() => modalView("ContentLink", video)}
                    >
                      {" "}
                      <i className='text--primary fas fa-share-alt'></i>
                    </span>
                    <button
                      className='btn btn-outline-primary text--primary m-card-btn'
                      onClick={() => modalView("Hijack", video)}
                    >
                      Hijack
                    </button>
                    <button
                      className='btn btn-primary m-card-btn'
                      onClick={() => modalView("ContentPreview", video)}
                    >
                      <span className='fa fa-eye'></span>
                    </button>
                  </div>

                  {/*<div className="options"><span className="share"> <i className="text--primary fas fa-download"></i></span>
		            <button className="btn btn-outline-primary text--primary m-card-btn">Hijack</button>
		            <button className="btn btn-primary m-card-btn" 
		             onClick={()=>{
		            	setModal("videoseo") 
		            	showHandler()
		             }}
		            >Copy SEO Tags</button>
		          </div>*/}
                </div>
                <div className='card-footer'>
                  <p
                    className='footer--text text--secondary'
                    style={{ color: "#ddd" }}
                  >
                    saw
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoCard;
