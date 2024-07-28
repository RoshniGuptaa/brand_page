import React from 'react'

const Navigation = () => {
  return (
    <nav>
        <div className="logo">
          <img src="./images/brand_logo.png" alt="Logo" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button id='btn'>Login</button>
      </nav>
  )
}

export default Navigation
