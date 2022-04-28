import React, { useState } from 'react'
import "../Cuisines/Cuisines.css"
import {GiChopsticks,GiBowlOfRice } from "react-icons/gi"
import {FaCheese} from "react-icons/fa"
import {RiCake2Fill} from "react-icons/ri"
import { NavLink } from "react-router-dom"

function Cuisines() {
    const [activeTab, setActiveTab] = useState("");
    // console.log(activeTab)

    return(
       <div className='cuisine-options'>
           <NavLink to={"/SeaFood"} className={`cuisines ${activeTab === "seafood" ? "active" : ""}`} onClick={()=> setActiveTab("Seafood")}>
           <FaCheese />
           <h4>Sea Food</h4>
           </NavLink>
           <NavLink to={"/cakes"} className={`cuisines ${activeTab === "cakes" ? "active" : ""}`} onClick={()=> setActiveTab("cakes")}>
           <RiCake2Fill />
           <h4>Cakes</h4>
           </NavLink>
           <NavLink to={"/Chicken"} className={`cuisines ${activeTab === "chicken" ? "active" : ""}`} onClick={()=> setActiveTab("chicken")}>
           <GiChopsticks />
           <h4>Chicken</h4>
           </NavLink>
           <NavLink to={"/Pasta"} className={`cuisines ${activeTab === "pasta" ? "active" : ""}`} onClick={()=> setActiveTab("pasta")}>
           <GiBowlOfRice />
           <h4>Pasta</h4>
           </NavLink>
       </div>
    )
}

export default Cuisines