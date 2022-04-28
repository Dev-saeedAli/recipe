import React, {useState, useEffect} from 'react'
import "../Categories/Categories.css"
import { useParams, Link} from "react-router-dom"

function Categories() {
    const [items, setItems] = useState([])
    const params = useParams()

    
    useEffect(()=>{
        fetchData(params.type)
        // console.log(item)
    }, [params.type])

    const fetchData = async (item)=>{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        const data = await response.json()
        setItems(data.meals)
    }

    const allMenus = items.map((item, index)=>{
        return(
            <div className='item' key={index}>
                <Link to={`/details/${item.idMeal}`}>
                    <img src={item.strMealThumb}/>
                    <h1>{item.strMeal}</h1>
                    </Link>
                    </div>
                )
                })
    
    // console.log(items)
  return (
      <div className='itemList'>
        <div className='items'>
            {allMenus}
        </div>
    </div>
  )
}

export default Categories