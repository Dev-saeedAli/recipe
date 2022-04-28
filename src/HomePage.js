import React from 'react'
// import "../HomePage/HomePage.css"
// import Cuisines from "../src/Component/Cuisines/Cuisines"
import Trending from "../src/Component/Trending/Trending"
import Vegetarian from "../src/Component/Vegetarian/Vegetarian"


function HomePage() {
  return (
    <div>
      {/* <Cuisines/> */}
      <Vegetarian/>
      <Trending/>
    </div>
  )
}

export default HomePage
