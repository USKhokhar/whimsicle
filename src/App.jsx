import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import '../styles/Home.module.comp.css'
import Home from './Pages/Home'
import Intro from './Pages/Intro'

function App() {
  return (
      <main>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/Home' element={<Home />} /> 
        </Routes>
      </main>
  )
}

export default App