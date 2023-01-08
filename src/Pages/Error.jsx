import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <main>
        <h1 style={{color: '#ffffff', textAlign: 'center'}}>Whimsicle 🌪 </h1>
        <section className="intro-section">
            <h1>Woah Woah Woaah!</h1>
            <sub>Yo Buddy! You probably end up having an error</sub>
            <sub> 🐪 
                OR
                🌵 
                </sub>
            <sub>This page is still under development.</sub>
            <button className="cool-btn" onClick={() => navigate('/Home')}>
                🏠 Home
            </button>
        </section>
    </main>
  )
}

export default Error