import React from 'react'


const Description = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.id}{props.description} {props.exercises}</p>
   </div>
  )
}

const Course = ({courses}) => {
  // Obtener un array con la suma de ejercicios para cada curso

  const exercisesPerCourse = courses.map(courseSum =>
    courseSum.parts.reduce((partSum, part) => partSum + part.exercises, 0));

  return ( 
      <div>
        <h1>Web development curriculum</h1>        
      
        {/* Mostrar la suma de ejercicios para cada curso */}
        {courses.map((course, index) => (
          <div key={course.id}>
            <h2 style={{ fontWeight: 'bold' }}>{course.name}</h2>
            {course.parts.map((part) => (
              <Description key={part.id} 
                description={part.name} exercises={part.exercises}/>
            ))}
            <p style={{ fontWeight: 'bold' }}>Total of {exercisesPerCourse[index]} exercises</p>
          </div>
        ))}
      </div>
    )
  }

export default Course