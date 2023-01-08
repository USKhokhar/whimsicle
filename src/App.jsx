import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import '../styles/Home.module.comp.css'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Intro from './Pages/Intro'
import QuotePage from './Pages/Quotes/QuotePage'
import MemeGenerator from './Pages/Memes/MemeGenerator'
import Todo from './Pages/Todo/Todo'


function App() {
  return (
      <main>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Quotes' element={<QuotePage />} />
          <Route path='/Memes' element={<MemeGenerator />} />
          <Route path='/Todo' element={<Todo />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
  )
}

export default App