import React from 'react'
import Home from './Home'
import Recipe from './Recipe'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipe/:_id" element={<Recipe/>}/>
    </Routes>
  )
}

export default AllRoutes