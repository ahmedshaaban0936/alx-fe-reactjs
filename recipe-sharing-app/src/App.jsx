import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
  return (
    <Router>
       <div className="App">
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <FavoritesList />
          <RecommendationsList />
        </Routes>
      </div>
      <div>
        <h1>Recipe Sharing Application</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
