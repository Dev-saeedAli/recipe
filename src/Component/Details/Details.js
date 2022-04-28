import React, { useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "../Details/Details.css"

function Details() {
    const params = useParams()
    const [details, setDetails] = useState([]);
    const [activeTab, setActiveTab] = useState("instruction")

    const fetchDetails = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`);
        const data = await response.json()
        setDetails(data.meals)
    }

    useEffect(()=>{
        fetchDetails()
    }, [params.name])
    // console.log(details)

    const recipeDetails = details.map((item, index)=>{
        return (
            <div className='detailitem' key={index}>
                <h4>{item.strMeal}</h4>
                <img src={item.strMealThumb} style={{width: "300px"}}/>
            </div>
        )
    })

  return (
    <div className='detailItems'>
        {recipeDetails}
        <div className="options">
            <div className="btn">
        <button className={activeTab === "instruction" ? 'active' : ''} onClick={()=> setActiveTab("instruction")}>Instructions</button>
        <button className={activeTab === "ingredients" ? 'active' : ''} onClick={()=> setActiveTab("ingredients")}>Ingredient</button>
            </div>
        <div className="description">
            {activeTab === "instruction" ?  details.map((item, index)=>{
        return (

            <div className="instruction" key={index}>
         <p>{item.strInstructions}</p>
        </div>
        )
    }): details.map((item, index)=>{
        return (
            <div className='ingredient' key={index}>
             <p>1.{item.strIngredient1}</p>
             <p>2.{item.strIngredient2}</p>
             <p>3.{item.strIngredient3}</p>
             <p>4.{item.strIngredient4}</p>
             <p>5.{item.strIngredient5}</p>
             <p>6.{item.strIngredient6}</p>
             <p>7.{item.strIngredient7}</p>
             <p>8.{item.strIngredient8}</p>
        </div>
        )
    })}
        </div>

        </div>
    </div>
  )
}

export default Details
