import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./Pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
    </Routes>
  )
}

export default App