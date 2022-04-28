import React from 'react'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare} from "react-icons/ai"
import {FaWhatsappSquare} from "react-icons/fa"
import "../Footer/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <small>Copyright &copy; www.recipeapp.com. All Rights Reserved.</small>
      <div className="media">
          <AiFillInstagram/>
          <AiFillFacebook/>
          <AiFillTwitterSquare/>
          <FaWhatsappSquare/>
      </div>
    </div>
  )
}

export default Footer
