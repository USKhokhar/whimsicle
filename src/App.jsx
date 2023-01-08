import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import '../styles/Home.module.comp.css'
import Home from './Pages/Home'
import Intro from './Pages/Intro'
import QuotePage from './Pages/Quotes/QuotePage'
import MemeGenerator from './Pages/Memes/MemeGenerator'


function App() {
  return (
      <main>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Quotes' element={<QuotePage />} />
          <Route path='/Memes' element={<MemeGenerator />} />
        </Routes>
      </main>
  )
}

export default App