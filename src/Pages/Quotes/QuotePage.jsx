import React, {useState} from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';

const randomNumber = Math.floor(Math.random() * 10);

const QuotePage = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(randomNumber);
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
    

    const newQuoteClick = () => {
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
            <button className="cool-btn" onClick={() => navigate('/Home')}>
                🏠 Home
            </button>
        </section>
    </main>
  )
}

export default QuotePage