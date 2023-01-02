import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  const navigate = useNavigate()
  return (
    <nav>
      <h3>Hello, <br />
        <span className="username">Username</span>
      </h3>
      <ul>
        <li>
          <button className="nav-btn">
            Notepad 📓 
          </button>
        </li>
        <li>
          <button className="nav-btn">
            Quote Generator 💭 
          </button>
        </li>
        <li>
          <button className="nav-btn">
            TODO ☑ 
          </button>
        </li>
        <li>
          <button className="nav-btn"
            onClick={() => navigate('/')}
          >
            Exit 🏃 
          </button>
        </li>
      </ul>

      <h4>SUB LINKS</h4>
    </nav>
  )
}

export default Sidebar