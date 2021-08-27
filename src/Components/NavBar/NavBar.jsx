import React from 'react'

const NavBar = () => {
  return (
    <div class="home-navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div class="home-navbar-dropdown">
        <button class="dropbtn">Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="home-navbar-dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar