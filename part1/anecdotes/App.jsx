import { useState } from 'react'

const Header = (props) => {
  return (  
      <h2>{props.titulo}</h2>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const [maxTexto, setMaxTexto] = useState('');
  const [maxIndex, setMaxIndex] = useState(0);


  const handleNextClick = () => {
    // Math.random -> nº decimal aleatorio de 0 a 1
    // Match.floor redondea hacia abajo
    const updateNext = Math.floor(Math.random() * anecdotes.length)

    // Actualizar el estado con el nuevo índice aleatorio
    setSelected(updateNext);
  }


  const handleVoteClick = () => {
    const updatePoint = [...points]
    updatePoint[selected] += 1
    setPoints(updatePoint)

    // Encontrar el índice del máximo después de la actualización de points
    const updateMaxIndex = updatePoint.indexOf(Math.max(...updatePoint));
    const updateMaxTexto = anecdotes[updateMaxIndex];
    setMaxTexto(updateMaxTexto);
    setMaxIndex(updateMaxIndex)
  }


  return (
    <div>
      <Header titulo='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextClick}>Next Anecdote</button>

      {points[maxIndex] > 0 && (
        <>
          <Header titulo='Anecdote with most votes' />
          <p>{maxTexto}</p>
          <p>Has {points[maxIndex]} votes</p>
        </>
      )}
    </div>
  )

}

export default App
