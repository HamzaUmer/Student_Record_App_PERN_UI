import React from 'react'
import logo from "../img/logo.png"
import "./css/footer.css"
const Footer = () => {
  return (
    <>
    <footer>
            <h1 className='name'>MHU <img src={logo} alt='logo' height="25px" width="25px"/></h1>
    </footer>
    </>
  )
}

export default Footer