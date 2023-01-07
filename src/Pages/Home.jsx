import React from 'react'
import Block from '../Component/Block'

const Home = () => {
  return (
    <section className='Home'>
        <h1 style={{color: '#ffffff', textAlign: 'center'}}>Whimsicle 🌪 </h1>  
        <section className="intro-section" style={{maxWidth: '880px'}}>
            <Block emoji='🍠' title='Potatu' />
        </section>
    </section>
  )
}

export default Home