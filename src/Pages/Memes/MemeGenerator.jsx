import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const randomNumber = Math.floor(Math.random() * 3);

const MemeGenerator = () => {
    const navigate = useNavigate()

    const MemeApi = async () => {
        const res =  await fetch('https://meme-api.com/gimme');
        return res.json()
    }
    
    const {status, data} = useQuery('meme', MemeApi)
    
    if(status === 'loading'){
        return <h1>...LOADING</h1>
    }
    
    if(status === 'error'){
        return <h1>ERROR</h1>
    }

  return (
    <main>
        <h1 style={{color: '#ffffff', textAlign: 'center'}}>Whimsicle 🌪 </h1>  
        <section className="intro-section">
            
            <img className='meme-img' src={data.preview[randomNumber]} alt="meme" />
            <button className="cool-btn" onClick={() => navigate('/Home')}>
                🏠 Home
            </button>
        </section>
    </main>
  )
}

export default MemeGenerator