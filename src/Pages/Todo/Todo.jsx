import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const Todo = () => {
  return (
    <main>
        <h1 style={{color: '#ffffff', textAlign: 'center'}}>Whimsicle 🌪 </h1>  
        <section className="intro-section">
            <sub>Time To Be Productive!</sub>
            <TodoInput />
            <TodoItem task={'Task'} />
            <TodoItem task={'Task'} />
            <TodoItem task={'Task'} />
            <TodoItem task={'Task'} />
            <TodoItem task={'Task'} />
        </section>
    </main>
  )
}

export default Todo