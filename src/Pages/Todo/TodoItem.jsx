import React, { useState } from 'react'

const TodoItem = ({task}) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheck = () => {
        console.log('check');
        setIsChecked(!isChecked)
    }
    // const handleDelete = () => {
    //     console.log('delete');
    // }
  return (
    <div className="todo-item">
        <h3
            style={{
                textDecoration : isChecked ? 'line-through' : 'none',
            }}
        >{task}</h3>
        <button className="wow-btn" onClick={handleCheck}>
            {
                (isChecked) ? '↩' : '✔'
            }
        </button>
        {/* <button className="wow-btn" onClick={handleDelete}>
            🗑 
        </button> */}
    </div>
  )
}

export default TodoItem