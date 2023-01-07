import React from 'react'

const Block = ({ title, emoji }) => {
  return (
    <button className='cool-btn block'>
        <span className="emoji-head">
          {emoji} 
        </span>
        <sub>
          {title}
        </sub>
    </button>
  )
}

export default Block