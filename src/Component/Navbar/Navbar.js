import React from 'react'
import "../Navbar/Navbar.css"
import {GiFullPizza} from "react-icons/gi"
import { useNavigate } from "react-router-dom"
function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='navbar' onClick={() => navigate("recipe/")}>
      <GiFullPizza/><span>Recipe Store</span>
    </div>
  )
}

export default Navbar
