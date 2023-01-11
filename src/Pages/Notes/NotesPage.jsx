import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotesPage = () => {

  const navigate = useNavigate()

  const addNote = () => {
    // console.log(0);
    navigate('/takenote')
  }

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
              {/* <div className="note">
                <h3>Lorem ipsum dolor sit.</h3>
              </div> */}
            </div>
        </section>
    </main>
  )
}

export default NotesPage