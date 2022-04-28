import React, {useState, useEffect} from 'react'
import "../Trending/Trending.css"
import {Link} from "react-router-dom"

function Trending() {
  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
      fetchData()
  }, [])

  const fetchData = async ()=>{
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
      const data = await response.json()
    //   console.log(data)
      setRecipes(data.meals)
  };

  const allMenus =  recipes.map(recipe =>{
      return(
         
          <div className='item' key={recipe.idMeal}>
                 <Link to={"/details/"+recipe.idMeal}>
                    <h1>{recipe.strMeal}</h1>
                    <img src={recipe.strMealThumb}/>
                 </Link>
          </div>
          )
  })

return (
  <div className='cuisines'>
      <h3>Seafood</h3>
  <div className="items">
          {allMenus}
      </div>
  </div>
)
}

export default Trending
