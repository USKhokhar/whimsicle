import React from 'react'
import { useNavigate } from 'react-router-dom'

const Intro = () => {

  const navigate = useNavigate()

  const handleEnterClick = () => {
    navigate('/Home')
  }

  return (
      <section className="intro-section">
        <article className="intro-txt">
          <sub>welcome to</sub>
          <h1>Whimsicle 🌪 </h1>
        </article>
        <button className="cool-btn" onClick={handleEnterClick}>
          enter playground 💃 
        </button>
      </section>
  )
}

export default Intro