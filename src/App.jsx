import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

// Pages
import Video from "./Pages/Video/Video"
import Login from "./Pages/Auth/Login"
import SignUp from "./Pages/Auth/SignUp"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Profile from "./Pages/Profile/Profile";
import Trend from "./Pages/Trend/Trend";
import Logout from "./Pages/Logout";
import Post from "./Pages/Post/Post";

//Routes
import { UserRoute } from './Components/Routes/User'
import { GuestRoute } from './Components/Routes/Guests'
import Home from "./Pages/Home/Home"
import PasswordReset from "./Pages/PasswordReset/PasswordReset"
import Confirm from "./Pages/Confirm/Confirm"
import VideoPost from "./Pages/Post/VideoPost"
import VideoDesc from "./Pages/Post/VideoDesc"
import ArticlePost from "./Pages/Post/ArticlePost"

export const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <GuestRoute path="/" component={Login} exact />
          <GuestRoute path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/post/article/:id" component={ArticlePost} />

          <Route path="/post/video/:id" component={VideoPost} />
          <Route path="/post/vid/:id/:img" component={VideoDesc} />
          <Route path="/signup" component={SignUp} />
          <Route path="/password-reset" component={PasswordReset} />
          <Route path="/confirm:token" component={Confirm} />
          <Route path="/post" component={Post} />
          <GuestRoute path="/signup" component={SignUp} />
          <UserRoute path="/trend" component={() => <Trend />} />
          <UserRoute path="/videos" component={() => <Video />} />
          <UserRoute path="/profile" component={() => <Profile />} />
          <UserRoute path="/demo" component="" />
          <Route path="/logout" component={Logout} />
          <UserRoute path="/dashboard" component={() => <Dashboard />} exact />
          <UserRoute path="*" component={() => <Dashboard />} />
        </Switch>
      </Router>
    </main>
  )
}
