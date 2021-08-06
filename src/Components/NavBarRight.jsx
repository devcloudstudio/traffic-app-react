import { useHistory, useLocation } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { SwitchColor } from "../Hooks/SwitchColor"


const NavBarRight = () => {
  const [lightMode, setLightMode] = SwitchColor()
  const [isMenuHidden, setIsMenuHidden] = useState(true)

  const history = useHistory()
  const logoutHandler = () => {
    localStorage.removeItem('user-token')
    history.push("/")
  }

  return (
    <ul className="d-flex nav nav-right">
      <li className="list-item"><span className="icon--container" onClick={() => setLightMode(!lightMode)}><i className={`fas ${lightMode ? 'fa-sun' : 'fa-moon'}`}></i></span></li>

      <li className="list-item transform-first"><span className="icon--container"><i className="fas fa-question-circle"></i></span></li>
      <li className="list-item transform-second"><span className="icon--container"><i className="fas fa-bell"></i></span></li>
      <li className="list-item nav--profile d-flex">
        <div className="nav-profile--container">
          <img alt="a" className="profile--img" src="https://i.ibb.co/9ycTC57/image-2021-07-07-165600.png" />
        </div>
        <div className="social-wrapper">
          <button onClick={() => setIsMenuHidden(!isMenuHidden)} class="dropdown-menu-btn" type="button" id="dropdownMenuButton">
            <span>Name</span><span style={{ margin: '0 5px 0 5px' }} className="fa fa-caret-down"></span>
          </button>
          <div hidden={isMenuHidden} class="dropdown-menu">
            <ul>
              <li><a class="dropdown-item" href="/profile">Profile</a></li><hr className="dropdown-items-separator" />
              <li><button onClick={logoutHandler} class="dropdown-item btn">Log Out</button></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default NavBarRight;