import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
    const navigate = useNavigate();
  return (
    <div className="login-box">
        <article className="heading">
            <sub>welcome to</sub>
            <h1>whimsicle 🌪</h1>
        </article>
        <article className="btn-group">
            <sub className='login-cap'>Login With: </sub>
            <button className="btn-l google" 
                onClick={() => navigate('/Home')}
            >
                <i className="fa-brands fa-google"></i>
                google</button>
            <button className="btn-l apple">
                <i className="fa-brands fa-apple"></i>
                apple</button>
            <button className="btn-l microsoft">
                <i className="fa-brands fa-microsoft"></i>
                microsoft</button>
        </article>
    </div>
  )
}

export default Login