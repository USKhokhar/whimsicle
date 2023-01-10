import React, { useEffect, useRef, useState } from 'react'

const Todo = () => {

  const localData = localStorage.getItem('TASK_ITEM_LOCAL')
  const [task, setTask] = useState(localData ? JSON.parse(localData) : [])
  const [isChecked, setIsChecked] = useState(false)
  const todo = useRef()
  
  const addTodo = (e) => {
    if(todo.current.value === '') return null
    // console.log(todo.current.value);
    // task = todo.current.value
    // localStorage.setItem('localTask', task)
    setTask([...task, todo.current.value])
    console.log(task);
    todo.current.value = ''
  }

  const handleDeleteAll = () => {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    localStorage.setItem('TASK_ITEM_LOCAL', JSON.stringify(task))
  }, [task])

  // const localItem = JSON.parse(localStorage.getItem('localTask'))

  return (
    <main>
      <h1 style={{color: '#ffffff', textAlign: 'center'}}>Whimsicle 🌪 </h1>  
      <section className="intro-section">
        <h1>Go ultra productive, comrade!</h1>
        <div className="input-form">
          <input type="text" name="task" id="task"
            placeholder='Enter your tak'
            ref={todo}
          />
          <button className='wow-btn' onClick={addTodo}>
            ➕ 
          </button>
          <button className="wow-btn" onClick={handleDeleteAll}>
            🗑 
          </button>
        </div>

      <ol>
        {
          task.map((item, index) => {
            return <li className='list-txt todo-item' key={index}>{item}
            </li>
          })
        }
      </ol>
      </section>
    </main>
  )
}

export default Todo