import React, {useState} from 'react'
import { useQuery } from 'react-query'

const randomNumber = Math.floor(Math.random() * 10);

const QuotePage = () => {
    const fetchData = async () => {
        const res = await fetch('https://type.fit/api/quotes')
        return res.json()
    }

    const {status, data} = useQuery('quote', fetchData)

    if(status === 'loading'){
        return <h1>...LOADING...</h1>
    }

    if(status === 'error'){
        return <h1>...ERROR...</h1>
    }

    
    const [count, setCount] = useState(randomNumber);

    const newQuoteClick = () => {
        setCount(randomNumber+1)
        console.log('clicked')
        setCount(count+1)
    }

  return (
    <main>
        <h1 style={{color: '#ffffff', textAlign: 'center'}}>Whimsicle 🌪 </h1>  
        <section className="intro-section">
            
            <h1>"
                {data[count].text}
                "
            </h1>
            <sub>
                ✍ &nbsp;
                {data[count].author}
            </sub>

            <button className="cool-btn" onClick={newQuoteClick}>
                🔂 
            </button>
        </section>
    </main>
  )
}

export default QuotePage