import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

function Search() {
    const [recipe, setRecipe] = useState([]);
    const params = useParams();

    useEffect(()=>{
        fetchRecipe(params.searched)
    }, [params.searched]);

    const fetchRecipe = async (name)=>{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        const data = await response.json()
        setRecipe(data.meals)
    }
    // console.log(items)
    const allRecipe = recipe.map((item)=>{
        return(

            <div className='search' key={item.idCategory}>
                    <img src={item.strMealThumb}/>
                    <h1>{item.strMeal}</h1>
                    </div>
                )
                })
    
  return (
    <div className='searchList'>
    <div className='searched'>
        {allRecipe}
    </div>
</div>
  )
}

export default Search
