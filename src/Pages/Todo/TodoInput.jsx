import React from 'react'

const TodoInput = () => {
  return (
    <form className='input-form'>
        <input type="text" name="todo-input" id="todo-input" />
        <button className="wow-btn">
            ➕ 
        </button>
    </form>
  )
}

export default TodoInput