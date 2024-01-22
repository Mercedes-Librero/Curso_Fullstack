import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Header, Content y Total

const Header = (props) => {
  console.log(props)
  return (    
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (  
    <div>
      <Part contenido= {props.contenido[0]} />
      <Part contenido= {props.contenido[1]} />
      <Part contenido= {props.contenido[2]} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (  
    <p>{props.contenido.part} {props.contenido.exercises}  </p>
  )
}

const Total = (props) => {
  console.log(props)

  return (    
      <p>Number of exercises {props.exercisesT}</p>

  )
}

const App = () => {
  const course = 'Half Stack application development'

  const contenido = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content contenido={contenido} />

      <Total exercisesT={
        contenido[0].exercises +
        contenido[1].exercises +
        contenido[2].exercises 
      } />
    </div>
  )

}

export default App
