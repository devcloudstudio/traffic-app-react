import React, { Fragment, useState } from "react"
import TrendingCard from "./Card/TrendingCard"


const Trendings = ({ trends, setModal, showHandler, setModalData }) => {

   return (
      <Fragment>

         <h2 className="text--white mx-2">Trendings</h2>
         <div className="cards">
            {trends && trends.map(trend => (
               <TrendingCard key={trend} t={trend} setModal={setModal} setModalData={setModalData} showHandler={showHandler} />
            ))}
         </div>
      </Fragment>
   )
}

export default Trendings