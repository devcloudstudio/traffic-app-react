import React, { Fragment, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useDispatch } from 'react-redux'
import ls from 'localstorage-ttl'

import TrendCard from "./Card/TrendCard";
import Cards from "./Card/Card";
import Tab from "../../Components/Layout/Tab"


// Tabs
import Leads from "../../Components/Layout/LeadTab/Leads"
import CreateBrand from "../../Components/Layout/BrandTab/CreateNewBrand"
import Brands from "../../Components/Layout/BrandTab/Brand"
import Message from "../../Components/Layout/MessageTab/Message"
import Thumbnail from "../../Components/Layout/Thumbnail"


// Modal
// import HijackedTrend from "../Layout/hijackTab/HijackedTrend" 
import ContentPreview from "./Modal/ContentPreview"
import ContentLink from "./Modal/ContentLink"
import Hijack from "./Modal/Hijack"
import Share from "./Modal/Share"
import ConfirmModal from "./Modal/ConfirmModal"


// AdsContent Modals
import BannerModal from "./Modal/AdModal/Banner"
import BannerHiajackModal from "./Modal/CtaModal/Banner"
import { Loader } from "../../Components/Layout/Loader";
import { getBrands, getLeads, getMessages } from "../../Redux/actions/userActions";




const Trend = (props) => {

  const [show, setShow] = useState(false)
  const [tab, setTab] = useState(null)
  const [modal, setModal] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  let [modalData, setModalData] = useState(null)

  // let hash = window.location.hash
  const onCancel = () => {
    console.log("Close Modal")
    setShow(false)
  }
  const showHandler = () => {
    console.log("show Modal")
    setShow(true)
  }

  const [keyword, setKeyWord] = useState('')
  const [trends, setTrends] = useState([])



  const handleSubmit = async (e) => {
    e.preventDefault()
    if (ls.get('searches')) {
      setIsLoading(true)
      const searches = ls.get(`searches-${keyword}`)
      setIsLoading(false)
      setTrends(searches)
    } else {
      setIsLoading(true)
      try {
        const { data } = await axios.get(`http://localhost:5000/api/trends/fetch/trend?keyword=${keyword}`)
        ls.set(`searches-${keyword}`, data, 86400000)
        setIsLoading(false)
        setTrends(data)
      } catch (err) {
        console.log(err.message)
      }

    }

  }


  let { hash } = useLocation()
  useEffect(() => {
    setTab(hash.split("?")[0].substring(1))
  }, [hash])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBrands())
    dispatch(getMessages())
    dispatch(getLeads())
  }, [])


  return (
    <Fragment>

      {/*Modal for only*/}

      {modal === "ContentPreview" ? <ContentPreview modalData={modalData} show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel} /> : null}
      {modal === "ContentLink" ? <ContentLink modalData={modalData} showHandler={showHandler} setModal={setModal} show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel} /> : null}
      {modal === "Share" ? <Share modalData={modalData} show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel} /> : null}

      {modal === "Hijack" ? <Hijack modalData={modalData} modalData={modalData} show={show} showHandler={showHandler} setModal={setModal} onCancel={onCancel} /> : null}
      {modal === "BannerModal" ? <BannerModal modalData={modalData} showHandler={showHandler} setModal={setModal} show={show} /> : null}

      {modal === "BannerHiajackModal" ? <BannerHiajackModal modalData={modalData} showHandler={showHandler} setModal={setModal} show={show} onCancel={onCancel} /> : null}
      {modal === "Confirm" ? <ConfirmModal modalData={modalData} showHandler={showHandler} setModal={setModal} show={show} onCancel={onCancel} /> : null}
      {/*Right*/}
      <section className="right">
        <div className="container mx-2">

          {/*Navbar*/}
          <div className="navbar my-2">
            <form onSubmit={handleSubmit} style={{ width: "auto" }}>
              <ul className="d-flex list-item-group nav nav-left border">
                <li className="list-item">
                  <div className="form--container">
                    <input value={keyword} onChange={e => setKeyWord(e.target.value)} className="nav-form" type="text" placeholder="search by keywords" />
                  </div>
                </li>
                <li className="">
                  <button className="nav-form" type="submit" style={{ padding: '15px 20px', border: 'none', outline: 'none' }} ><i className="fas fa-search"></i></button>
                </li>
              </ul>
            </form>

            <ul className="d-flex nav nav-right">
              <li className="list-item"><span className="icon--container" onClick={() => props.setLightMode(!props.lightMode)}><i className={`fas ${props.lightMode ? 'fa-sun' : 'fa-moon'}`}></i></span></li>

              <li className="list-item transform-first"><span className="icon--container"><i className="fas fa-question-circle"></i></span></li>
              <li className="list-item transform-second"><span className="icon--container"><i className="fas fa-bell"></i></span></li>
              <li className="list-item nav--profile d-flex">
                <div className="nav-profile--container"> <img alt="a" className="profile--img" src="https://i.ibb.co/9ycTC57/image-2021-07-07-165600.png" /></div><span className="profile-name text--white">Name</span><i className="text--white fas fa-caret-dow d-sm-none"></i>
              </li>
            </ul>
          </div>

          <Tab setTab={setTab} tab={tab} />
          {tab === "" ? <TrendCard trends={trends} setModal={setModal} setModalData={setModalData} showHandler={showHandler} /> : null}
          {tab === "brand" ? <Brands /> : null}
          {tab === "leads" ? <Leads /> : null}
          {tab === "hijack" ? <Cards setModal={setModal} showHandler={showHandler} /> : null}
          {tab === "message" ? <Message /> : null}
          {tab === "import" ? <Thumbnail /> : null}
          {isLoading && <Loader />}
        </div>
      </section>
    </Fragment>
  )
}
export default Trend



/*
const showModalHandler = (modal)=>{
     switch(modal){
      case "ContentPreview":
        return <ContentPreview modalData={modalData}  show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel}/> ;
      case "ContentLink":
       return <ContentLink modalData={modalData} showHandler={showHandler} setModal={setModal}  show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel}/>
      case "Share":
       return <Share modalData={modalData}  show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel}/>;
      case "Hijack":
       return <Hijack modalData={modalData} modalData={modalData} show={show} showHandler={showHandler} setModal={setModal} onCancel={onCancel}/>;
      case "BannerModal" :
       return <BannerModal modalData={modalData} showHandler={showHandler} setModal={setModal}  show={show}/>;
      case "BannerHiajackModal":
       return <BannerHiajackModal modalData={modalData} showHandler={showHandler} setModal={setModal}  show={show} />;
     }
  }

  */