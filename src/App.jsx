import React, { useEffect, Fragment, useState } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"



// Pages
import Video from "./Pages/Video/Video"
import Login from "./Pages/Auth/Login"
import SignUp from "./Pages/Auth/SignUp"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Sidebar from "./Components/Sidebar/Sidebar"
import Profile from "./Pages/Profile/Profile";
import Trend from "./Pages/Trend/Trend";
import Logout from "./Pages/Logout";


//Modal
import Success from "./Components/Layout/Success"
import Share from "./Components/Layout/Share"
// import CardPreview from "./Components/Layout/CardPreview"


// Message Modal
// import Popup from "./Components/Layout/MessageTab/Modal/Social"
// import Popup from "./Components/Layout/CtaModal/Social"



//Routes
import { UserRoute } from './Components/Routes/User'
import { GuestRoute } from './Components/Routes/Guests'


//Hoks
import { SwitchColor } from "./Hooks/SwitchColor"

export const App = () => {
  const [lightMode, setLightMode] = SwitchColor()
  return (
    <Fragment>
      <main>
        <Router>
          {/*<Share show={true}/>*/}
          <Switch>
            <GuestRoute path="/" component={Login} exact />
            <GuestRoute path="/login" component={Login} />
            <GuestRoute path="/signup" component={SignUp} />
            <UserRoute path="/trend" component={() => <Trend lightMode={lightMode} setLightMode={setLightMode} />} />
            <UserRoute path="/videos" component={() => <Video lightMode={lightMode} setLightMode={setLightMode} />} />
            <UserRoute path="/profile" component={() => <Profile lightMode={lightMode} setLightMode={setLightMode} />} />
            <UserRoute path="/bonus" component="" />
            <Route path="/logout" component={Logout} />
            <UserRoute path="/trannings" component="" />
            <UserRoute path="/dashboard" component={() => <Dashboard lightMode={lightMode} setLightMode={setLightMode} />} exact />
            <UserRoute path="*" component={() => <Dashboard lightMode={lightMode} setLightMode={setLightMode} />} />
          </Switch>
        </Router>
      </main>
    </Fragment>
  )
}
