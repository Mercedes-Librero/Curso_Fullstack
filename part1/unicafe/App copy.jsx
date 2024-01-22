import { useState } from 'react'

const Header = (props) => {
  return (  
      <h2>{props.titulo}</h2>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const cabecera = 'Give Feedback'
  const titulo = 'Statistics'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [coment, setComent] = useState(0)

  const handleGoodClick = () =>{    
    const updateGood = good + 1
    setGood(updateGood)
    setAll(updateGood + neutral + bad)

    //Calcular Average
    setAverage((updateGood - bad)/(updateGood + neutral + bad))

    // Positive
    setPositive((updateGood*100)/(updateGood + neutral + bad))

    // Hay comentarios

  }

  const handleNeutralClick = () =>{
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setAll(good + updateNeutral + bad)

    //Calcular Average
    setAverage((good - bad)/(good + updateNeutral + bad))

    // Positive
    setPositive((good*100)/(good + updateNeutral + bad))

    coment = 1 
  }
  
  const handleBadClick = () =>{
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(good + neutral + updateBad)

    // Calcular Average
    setAverage((good - updateBad)/(good + neutral + updateBad))

    // Positive
    setPositive((good*100)/(good + neutral + updateBad))
  }

  return (
    <div>
      <Header titulo={cabecera} />
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Header titulo={titulo} />


      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total {allClicks}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </div>
  )
}

export default App
