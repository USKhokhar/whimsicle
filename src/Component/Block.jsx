import React from 'react'

const Block = ({ title, emoji, handleClick }) => {
  return (
    <button className='cool-btn block'
      onClick={handleClick}
    >
        <span className="emoji-head">
          {emoji} 
        </span>
        <h3>
          {title}
        </h3>
    </button>
  )
}

export default Block