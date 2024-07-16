import React, {useState, useEffect} from 'react'
import SearchBar from "./Header/SearchBar"
import CategoriesContainer from "./Categories/CategoriesContainer.jsx"
import RecommendationsContainer from "./Recommendations/RecommendationsContainer.jsx"

const Home = () => {

  return (
    <div>
      <SearchBar/>
      <CategoriesContainer/>
      <RecommendationsContainer/>
    </div>
  )
}

export default Home