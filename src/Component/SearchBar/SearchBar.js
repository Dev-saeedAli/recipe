import React, { useState } from 'react'
import "../SearchBar/SearchBar.css"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function SearchBar() {
  const [searchRecipe, setSearchRecipe] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e)=>{
    e.preventDefault()
    navigate(`${searchRecipe}`)
  }
  return (
    <div>
      <form className='form' onSubmit={(e)=> submitHandler(e)}>
        <span><FaSearch/></span>
       <input onChange={(e)=> setSearchRecipe(e.target.value)} type="text" placeholder='Search for a recipe'/>
      </form>
    </div>
  )
}

export default SearchBar
