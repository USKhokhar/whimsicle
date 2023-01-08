import React, { useState } from 'react'

const TodoInput = () => {

  const [input, setInput] = useState()
  const [list, setList] = useState([])

  const handleAdd = (e) => {
    setList([...list, 'hell'])
    console.log(list);
    setInput('')
  }

  const handleChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className='input-form'>
        <input type="text" name="todo-input" id="todo-input" onChange={handleChange}/>
        <button className="wow-btn" onClick={handleAdd}>
            ➕ 
        </button>
    </div>
  )
}

export default TodoInput