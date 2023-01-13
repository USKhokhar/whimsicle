import React from 'react'
import { useNavigate } from 'react-router-dom'
import Block from './Block'

const ToolArr =[
    {
        id: 1,
        title: 'TicTacToe',
        emoji: '✖',
        navigate: '/tictactoe'
    },
    {
        id: 2,
        title: 'Notes',
        emoji:' 📓 ',
        navigate: '/notes'
    },
    {
        id: 3,
        title: 'TODO',
        emoji:' ✔ ',
        navigate: '/todo'
    },
    {
        id: 4,
        title: 'Quotes',
        emoji:' 💭 ',
        navigate: '/quotes'
    },
    {
        id: 5,
        title: 'Memes',
        emoji:' 🤸 ',
        navigate: '/memes'
    },
    {
        id: 6,
        title: 'Draw',
        emoji:' 🖌 ',
        navigate: '/draw'
    },
    {
        id: 7,
        title: 'Translate',
        emoji:' 🔁 ' ,
        navigate: '/translate'
    },
]

const Tools = () => {
    const navigate = useNavigate();
  return (
    <section className="tool-section intro-section" style={{maxWidth: '880px'}}>
        {
            ToolArr.map((arr) => {
                return <Block title={arr.title} emoji={arr.emoji} key={arr.id}
                    handleClick={() => navigate(arr.navigate)}
                />
            })
        }
    </section>
    
  )
  
}

export default Tools