import React from 'react'
import Sidebar from './Components/Sidebar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'

function App() {
  return (
    <body>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </body>
  )
}

export default App