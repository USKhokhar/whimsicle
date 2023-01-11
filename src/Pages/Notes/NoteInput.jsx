import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NoteInput = () => {
    const navigate= useNavigate()

    const localTitle = localStorage.getItem('LOCAL_NOTE_TITLE')
    const [head, setHead] = useState(localTitle ? JSON.parse(localTitle) : [])

    const localText = localStorage.getItem('LOCAL_NOTE_TEXT')
    const [content, setContent] = useState(localText ? JSON.parse(localText) : [])

    const title = useRef()
    const text = useRef()

    
    const handleReturn = () => {
        navigate('/Notes')
    }
    
    const handleSubmit = () => {
        const titleValue = title.current.value
        const textValue = text.current.value

        if((titleValue === '') && (textValue === '')) return alert('Type Something, Dummy!')
        if((titleValue === '')) return alert("You can't leave the title blank... silly!")

        // console.log(titleValue);
        // console.log(textValue);

        // localStorage.setItem('title', JSON.stringify(titleValue))
        // localStorage.setItem('text', JSON.stringify(textValue))

        setHead([...head, titleValue])
        setContent([...content, textValue])

        // console.log(head);
        // console.log(content);

        title.current.value = ''
        text.current.value = ''
    }

    useEffect(() => {
        localStorage.setItem('LOCAL_NOTE_TITLE', JSON.stringify(head))
        localStorage.setItem('LOCAL_NOTE_TEXT', JSON.stringify(content))
    }, [head, content])

  return (
    <main>
        <h1 style={{color: '#ffffff', textAlign: 'center'}}>Whimsicle 🌪 </h1>  
        <section className='intro-section'>
            <h1>Take A Note, Comrade!</h1>
            <div className="input-form">
                <input type="text"
                    name='note-title'
                    id='note-title'
                    placeholder='Title Of Your Note'
                    ref={title}
                />
            </div>
            <div className="input-form">
                <textarea name="note-txt" id="note-txt" 
                    cols="30" 
                    rows="10"
                    placeholder='Enter Your Note Here'
                    ref={text}
                />
            </div>
            <div className="input-form">
                <button className="wow-btn"
                    onClick={handleSubmit}
                >
                    ✔ 
                </button>
                <button className="wow-btn" 
                    style={{
                        cursor: 'auto',
                    }}

                    onClick={handleReturn}
                >
                    ↩ 
                </button>
            </div>
        </section>
    </main>
  )
}

export default NoteInput