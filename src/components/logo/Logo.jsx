import React from 'react'
import siteLogo from "../../assets/logo.png"
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
        <Link to="/" className="flex flex-y-center flex-x-between">
          <img src={siteLogo} alt="logo" /> eBlog
        </Link>
    </div>
  )
}

export default Logo