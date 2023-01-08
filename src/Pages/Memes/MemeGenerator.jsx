import React, { useState } from 'react'
import { useQuery } from 'react-query';

const randomNumber = Math.floor(Math.random() * 3);

const MemeGenerator = () => {
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

        </section>
    </main>
  )
}

export default MemeGenerator