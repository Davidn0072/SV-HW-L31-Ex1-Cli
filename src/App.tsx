import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import AddRecipe from './pages/AddRecipe'
import Recipes from './pages/Recipes'
import SearchRecipe from './pages/SearchRecipe'


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/search" element={<SearchRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
