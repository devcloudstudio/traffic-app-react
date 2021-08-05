import React, { Fragment, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import CreateNewBrand from "./CreateNewBrand"
// import SelectExistingBrand from "./SelectExistingBrand"
// import CallToAction from "./CallToAction"
import BrandList from "./BrandList"

//info
import Instructions from "../Instructions"

const Brand = () => {

  const [showBrandBox, setShowBrandBox] = useState(null)


  const { hash } = useLocation()
  const query = new URLSearchParams(hash.split("?")[1]);
  useEffect(() => {
    if (query.get("brand")) {
      setShowBrandBox("previewBrand")
    }
  }, [hash])



  return (
    <Fragment>
      {showBrandBox === null ? <div className="flex-container h-sm-100 flex-column p-relative">
        <Instructions data="Customize your brand with your Business name, slogan and image/logo so the traffic you'd get from TraffikPilot can identify you and your business." />
        <div className="btn--group flex-sm-column">
          <button className="btn btn-outline-primary btn-primary btn--round text--primary p-sm-3" onClick={() => setShowBrandBox("previewBrand")}>Select Existing Brands</button>
          <span className="text--secondary my-2">OR</span>
          <button className="btn btn-outline-primary  btn--round text--primary p-sm-3 " onClick={() => setShowBrandBox("createBrand")}>Create New Brand</button>
        </div>
      </div> : null
      }
      {/*showBrandBox === "previewBrand" ? <CreateNewBrand/> : null*/}
      {showBrandBox === "createBrand" ? <CreateNewBrand /> : null}
      {showBrandBox === "previewBrand" ? <BrandList query={query} /> : null}
    </Fragment>
  )
}
export default Brand

