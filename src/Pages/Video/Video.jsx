import React, { Fragment, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from 'axios'
import Cards from "./Card/Card";
import VideoCards from "./Card/VideoCard";



import Tab from "../../Components/Layout/Tab"


import Leads from "../../Components/Layout/LeadTab/Leads"
import Brand from "../../Components/Layout/BrandTab/Brand"
import Message from "../../Components/Layout/MessageTab/Message"
import Thumbnail from "../../Components/Layout/Thumbnail"
import Connect from "../../Components/Layout/Connect"




//Modal
import Publish from "./Modal/Publish.jsx"
import VideoSeo from "./Modal/VideoSeo"


import ContentPreview from "./Modal/ContentPreview"
import ContentLink from "./Modal/ContentLink"
import CardPreview from "./Modal/CardPreview"
import Share from "./Modal/Share"


import ConfirmModal from "./Modal/ConfirmModal"


// AdsContent Modals
import BannerModal from "./Modal/AdModal/Banner"
import BannerHiajackModal from "./Modal/CtaModal/Banner"
import { Loader } from "../../Components/Layout/Loader";



const Videos = (props) => {
  const [source, setSource] = useState('')
  const [amount, setAmount] = useState('')
  const [keyword, setKeyword] = useState('')
  const [youtubeVidResults, setYoutubeVidResults] = useState([])
  const [vimeoRes, setVimeoResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [show, setShow] = useState(false)
  const [tab, setTab] = useState("home")
  const [modal, setModal] = useState(null)
  let [modalData, setModalData] = useState(null)


  const onCancel = () => {
    console.log("Close Modal")
    setShow(false)
  }

  const showHandler = () => {
    console.log("show Modal")
    setShow(true)
  }

  let { hash } = useLocation()
  useEffect(() => {
    setTab(hash.split("?")[0].substring(1))
  }, [hash])


  const handleSubmit = e => {
    e.preventDefault()
    if (source == "youtube") {
      getYoutubevideos()
    } else if (source === "vimeo") {
      getVimeoVideos()
    } else {
      alert('Please select source')
    }
  }


  async function getYoutubevideos() {
    setIsLoading(true)
    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${keyword}&maxResults=${amount}&key=AIzaSyB2cGXPRcxvrqv1_--HRLHPnkmC3TVoUCA&part=snippet`)
    console.log(keyword)

    const { items } = data

    setIsLoading(false)
    setYoutubeVidResults(items)
  }



  const access_token = '41b228338b45ad58fa557669981834af'

  async function getVimeoVideos() {
    setIsLoading(true)
    const { data } = await axios.get(`https://api.vimeo.com/videos?query=${keyword}&per_page=${amount}`, {
      headers: {

        'Authorization': `Bearer ${access_token}`
      }
    })

    setIsLoading(false)
    setVimeoResults(data.data)
  }





  return (
    <Fragment>
      {/*modal==="publish" ? <Publish show={show} rightBtnContent="Publish" leftBtnContent="Cancel" onCancel={onCancel}/>: null*/}
      {modal === "videoseo" ? <VideoSeo show={show} rightBtnContent="Export as .txt file" leftBtnContent="Cancel" onCancel={onCancel} /> : null}

      {modal === "ContentPreview" ? <ContentPreview modalData={modalData} setSource={setSource} source={source} show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel} /> : null}
      {modal === "ContentLink" ? <ContentLink modalData={modalData} setSource={setSource} source={source} showHandler={showHandler} setModal={setModal} show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel} /> : null}
      {modal === "Share" ? <Share modalData={modalData} show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel} /> : null}


      {modal === "Hijack" ? <CardPreview setModalData={setModalData} modalData={modalData} setSource={setSource} source={source} show={show} showHandler={showHandler} setModal={setModal} rightBtnContent="Cancel" onCancel={onCancel} /> : null}
      {modal === "BannerModal" ? <BannerModal modalData={modalData} showHandler={showHandler} setModal={setModal} show={show} /> : null}


      {modal === "BannerHiajackModal" ? <BannerHiajackModal modalData={modalData} showHandler={showHandler} setModal={setModal} show={show} onCancel={onCancel} /> : null}
      {modal === "Confirm" ? <ConfirmModal modalData={modalData} showHandler={showHandler} setModal={setModal} show={show} onCancel={onCancel} /> : null}

      {/*Right*/}
      <section className="right">
        <div className="container mx-2">

          {/*Navbar*/}
          <div className="navbar my-2">
            <form onSubmit={handleSubmit}>
              <ul className="d-flex list-item-group nav nav-left border">
                <li className="list-item">
                  <select className="selectBox text--primary" onChange={e => {
                    setSource(e.target.value)
                    setModalData(null)
                    setModal("")
                  }}>
                    <option>select Source</option>
                    <option value="youtube">Youtube</option>
                    <option value="vimeo">Vimeo</option>
                  </select>
                </li>
                <li className="list-item">
                  <div className="form--container">
                    <input value={keyword} onChange={e => setKeyword(e.target.value)} className="nav-form" type="text" placeholder="search by keywords" />
                  </div>
                </li>
                <li className="list-item">
                  <select className="selectBox text--primary" onChange={e => setAmount(e.target.value)}>
                    <option>Amount to Fetch</option>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                  </select>
                </li>

                <button className="nav-form" style={{ padding: '15px 20px', border: 'none', outline: 'none' }} type="submit"><i className="fas fa-search"></i></button>
              </ul>
            </form>

            <ul className="d-flex nav nav-right">

              {/*<li className="list-item transform-first d-sm-none"><button className="btn btn-primary">Import your channel</button></li>*/}
              <li className="list-item transform-secon"><span className="icon--container" onClick={() => props.setLightMode(!props.lightMode)}><i className={`fas ${props.lightMode ? 'fa-sun' : 'fa-moon'}`}></i></span></li>
              <li className="list-item transform-first"><span className="icon--container"><i className="fas fa-question-circle"></i></span></li>
              <li className="list-item transform-second"><span className="icon--container"><i className="fas fa-bell"></i></span></li>
              <li className="list-item nav--profile d-flex">
                <div className="nav-profile--container"> <img alt="a" className="profile--img" src="https://i.ibb.co/ckQ2jb8/profile.jpg" /></div><span className="profile-name text--white">Name</span><i className="text--white fas fa-caret-down d-sm-none"></i>
              </li>
            </ul>
          </div>

          {/*Tab*/}
          <Tab tab={tab} setTab={setTab} />
          {tab === "" ? <VideoCards vimeovideos={vimeoRes} videos={youtubeVidResults} setModalData={setModalData} setModal={setModal} showHandler={showHandler} /> : null}

          {tab === "brand" ? <Brand /> : null}
          {tab === "leads" ? <Leads /> : null}
          {tab === "hijack" ? <Cards setModal={setModal} showHandler={showHandler} /> : null}
          {tab === "message" ? <Message /> : null}
          {tab === "thumbnail" ? <Thumbnail /> : null}
          {tab === "import" ? <Connect /> : null}
          {isLoading && <Loader />}
        </div>
      </section>
    </Fragment>
  )
}

export default React.memo(Videos)


