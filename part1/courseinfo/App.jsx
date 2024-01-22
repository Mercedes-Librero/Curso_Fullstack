import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Header, Content y Total

const Header = (props) => {
  //console.log(props)
  return (    
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (  
    <div>
      <Part parts= {props.parts[0]} />
      <Part parts= {props.parts[1]} />
      <Part parts= {props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (  
    <p>{props.parts.name} {props.parts.exercises}  </p>
  )
}

const Total = (props) => {
  //console.log(props)

  return (    
      <p>Number of exercises {props.exercisesT}</p>

  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} /> 
      <Total exercisesT={
        course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises 
      } />
    </div>
  )

}

export default App
