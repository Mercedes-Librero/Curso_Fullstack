import { useState } from 'react'
import React, { Fragment } from 'react';

// Componente encabezados
const Header = (props) => {
  return (  
      <h2>{props.titulo}</h2>
  )
}

// componente Estadisticas
const Statistics = (props) => {
  // console.log(props)
  //style={{ backgroundColor: 'lightblue' }}

  // Verificar si hay estadísticas y clics antes de renderizar
  if ((props.statistics.length > 0 ) && (props.allClicks >0)) {
    return (  
      <div>
        <table>
          {/* Renderizar líneas de estadísticas usando el componente StatisticLine */}
          <tr><StatisticLine etiqueta={props.statistics[0].etiqueta} resultado ={props.statistics[0].resultado} /></tr>
          <tr><StatisticLine etiqueta={props.statistics[1].etiqueta} resultado ={props.statistics[1].resultado} /></tr>
          <tr><StatisticLine etiqueta={props.statistics[2].etiqueta} resultado ={props.statistics[2].resultado} /></tr>

          {/* Renderizar el total, promedio y porcentaje positivo */}
          <tr>
            <td>Total </td>
            <td> {props.allClicks}</td>
          </tr>
          <tr>
            <td>Average </td>
            <td> {props.average}</td>
          </tr>
          <tr>
            <td>Positive </td>
            <td> {props.positive} %</td>
          </tr>
        </table>
      </div>
    )
  }  //  si no hay feedback dado
    return (  
      <div>
        <p>No feedback given</p>
      </div>
    )
}

// Componente para una línea de estadística
const StatisticLine = (props) => {
    console.log(props)
  return(
    <React.Fragment>
      <td>{props.etiqueta}</td><td>{props.resultado}</td>
    </React.Fragment>
  )
}

// Componente funcional para el botón
const Button = (props)  => (

      <button onClick={props.handleClick}>{props.text}</button>

)

// Componente principal de la aplicación
const App = () => {
  // Definir los estados iniciales 
  const cabecera = 'Give Feedback'
  const titulo = 'Statistics'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  // Objeto para las estadísticas
  const statistics = [
    { etiqueta:'Good' , resultado:good},
    { etiqueta:'Neutral' , resultado:neutral},
    { etiqueta:'Bad' , resultado:bad},
  ]

   // Función para manejar clics en el botón 'Good'
  const handleGoodClick = () =>{    
    const updateGood = good + 1
    setGood(updateGood)
    setAll(updateGood + neutral + bad)
    
    //Calcular Average
    setAverage((updateGood - bad)/(updateGood + neutral + bad))

    // Positive
    setPositive((updateGood*100)/(updateGood + neutral + bad))
  }

   // Función para manejar clics en el botón 'Neutral'
  const handleNeutralClick = () =>{
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setAll(good + updateNeutral + bad)

    //Calcular Average
    setAverage((good - bad)/(good + updateNeutral + bad))

    // Positive
    setPositive((good*100)/(good + updateNeutral + bad))

  }
  
   // Función para manejar clics en el botón 'Bad'
  const handleBadClick = () =>{
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(good + neutral + updateBad)

    // Calcular Average
    setAverage((good - updateBad)/(good + neutral + updateBad))

    // Positive
    setPositive((good*100)/(good + neutral + updateBad))
  }

   // Renderizar componentes en la aplicación
  return (
    <div>
      <Header titulo={cabecera} />

      {/* Renderizar botones y manejar clics con funciones correspondientes */}
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <Header titulo={titulo} />

      {/* Renderizar componente de estadísticas con propiedades correspondientes */}
      <Statistics statistics={statistics} average={average} positive={positive} allClicks={allClicks}/>
    </div>
  )
}

// Exportar el componente principal 
export default App
