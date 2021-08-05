import React from "react"
import { useSelector } from 'react-redux'


//info
import Instructions from "../Instructions"



const Leads = () => {

  const leads = useSelector(state => state.leads) || []
  console.log(leads)

  return (

    <div className="main--wrapper">
      <div className="auth--container d-flex flex-column p-relative">
        <Instructions data="You can find all the leads you've gotten with TraffikPilot here. You can export them as .csv or .txt file" />
        <div className="modal-wrapper">
          <div className="heading text--center mx-4">
            <h1 className="mx-2 text--primary text--bolder">Leads</h1><span className="text--secondary">Create Your Lead List</span>
          </div>
          <form className="form">
            {/*<div className="d-flex">
             <div className="w-100 " style={{marginRight:"4px",paddingRight:"4px",borderRight:"1px solid #ccc"}}>
               <h1 className="text--secondary">Name</h1>
               <div className="form--group">
                <input className="border-bottom form--control" type="text"/>
               </div>
               <div className="form--group">
                <input className="border-bottom form--control" type="text"/>
               </div>
               <div className="form--group">
                <input className="border-bottom form--control" type="text"/>
               </div>
              </div>
              <div className="w-100" style={{marginLeft:"4px",paddingLeft:"4px",borderLeft:"0px solid #ccc"}}>
               <h1 className="text--secondary">Email</h1>
                <div className="form--group">
                 <input className="border-bottom form--control" type="text" />
                </div>
                <div className="form--group">
                 <input className="border-bottom form--control" type="text" />
                </div>
                
              </div>
              </div>*/}

            {/*style={{marginRight:"4px",paddingRight:"4px",borderRight:"1px solid #ccc"}}*/}

            <div className="table">
              <div className="tr">
                <div className="td"><h1 className="text--secondary text--center">Name</h1></div>
                <div className="td"><h1 className="text--secondary text--center">Email</h1></div>
              </div>
              <div className="tbody">
                <div className="tr">
                  <div className="td">
                    <div className="form--group" style={{ margin: "5px" }}>
                      <input className="form--control" type="text" />
                    </div>
                  </div >
                  <div className="td">
                    <div className="form--group" style={{ margin: "5px" }}>
                      <input className="form--control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="tr">
                  <div className="td">
                    <div className="form--group" style={{ margin: "5px" }}>
                      <input className="form--control" type="text" />
                    </div>
                  </div >
                  <div className="td">
                    <div className="form--group" style={{ margin: "5px" }}>
                      <input className="form--control" type="text" />
                    </div>
                  </div>
                </div>

                <div className="tr">
                  <div className="td">
                    <div className="form--group" style={{ margin: "5px" }}>
                      <input className="form--control" type="text" />
                    </div>
                  </div >
                  <div className="td">
                    <div className="form--group" style={{ margin: "5px" }}>
                      <input className="form--control" type="text" />
                    </div>
                  </div>
                </div>

                {leads.map(lead => {
                  if (lead !== null) {
                    return (
                      <>
                        <div className="tr">
                          <div className="td">
                            <div className="form--group" style={{ margin: "5px" }}>
                              <input className="form--control" type="text" />
                            </div>
                          </div >
                          <div className="td">
                            <div className="form--group" style={{ margin: "5px" }}>
                              <input className="form--control" type="text" value={lead} />
                            </div>
                          </div>
                        </div>

                      </>

                    )
                  } else {
                    return null;
                  }
                })}

              </div>
            </div>

            <div className="btn--group">
              <button className="btn btn-outline-primary btn--round text--primary">Cancel</button>
              <button className="btn btn-outline-primary btn-primary btn--round text--primary">Done</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Leads