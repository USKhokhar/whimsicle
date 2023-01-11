import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import '../styles/Home.module.comp.css'
import Error from './Pages/Error'
import Home from './Pages/Home'
import Intro from './Pages/Intro'
import QuotePage from './Pages/Quotes/QuotePage'
import MemeGenerator from './Pages/Memes/MemeGenerator'
import Todo from './Pages/Todo/Todo'
import NotesPage from './Pages/Notes/NotesPage'
import Game from './Pages/TicTacToe/Game'
import NoteInput from './Pages/Notes/NoteInput'


function App() {
  return (
      <main>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Quotes' element={<QuotePage />} />
          <Route path='/Memes' element={<MemeGenerator />} />
          <Route path='/Todo' element={<Todo />} />
          <Route path='/Notes' element={<NotesPage />} />
          <Route path='/takenote' element={<NoteInput />} />
          <Route path='/Tictactoe' element={<Game />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
  )
}

export default App