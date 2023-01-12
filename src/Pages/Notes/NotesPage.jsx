import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotesPage = () => {

  const navigate = useNavigate()

  const addNote = () => {
    // console.log(0);
    navigate('/takenote')
  }

  const noteTitle = JSON.parse(localStorage.getItem('LOCAL_NOTE_TITLE'))

  return (
    <main>
        <h1 style={{color: '#ffffff', textAlign: 'center'}}>Whimsicle 🌪 </h1>  
        <section className="intro-section">
            <div className="input-form">
              <h1>Add Note: </h1>
              <button className="wow-btn" onClick={addNote}>
                ➕ 
              </button>
            </div>

            <div className="notes-container">
              {
                noteTitle.map((note) => {
                  return(
                    <div className="note">
                      <h3>{note}</h3>
                    </div>
                  )
                })
              }
            </div>

            <button className="cool-btn" onClick={() => navigate('/Home')}>
              🏠 Home
            </button>
        </section>
    </main>
  )
}

export default NotesPage