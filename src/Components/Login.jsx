import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login-box">
        <article className="heading">
            <sub>welcome to</sub>
            <h1>whimsicle 🌪</h1>
        </article>
        <article className="btn-group">
            <caption className='login-cap'>Login With: </caption>
            <button className="btn-l google">
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