import React, {useState, useEffect} from 'react'
import "../Vegetarian/Vegeterian.css"
import {Link} from "react-router-dom"

function Vegetarian() {
  const [veggie, setVeggie] = useState([])

  useEffect(()=>{
      fetchVeggie()
  }, [])

  const fetchVeggie = async ()=>{
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian");
      const data = await response.json()
      setVeggie(data.meals)
        // console.log(data.meals)
  };

  const allMenus =  veggie.map((recipe, index) =>{
      return(
                <div className='veggie' key={index}>
                    <Link to={"/details/"+recipe.idMeal}>
                    <img src={recipe.strMealThumb}/>
                    <h1>{recipe.strMeal}</h1>
                    </Link>
                </div>
          )
  })

return (
    <div className='vegetarian'>
        <h3>Vegetarian</h3>
    <div className="veggies">
            {allMenus}
        </div>
        {/* <div className="gradient"></div> */}
    </div>
)
}

export default Vegetarian
