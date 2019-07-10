import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return (
    <>
      <Header />
      <Part name={part1} exercises={exercises1} />
      <Part name={part2} exercises={exercises2} />
      <Part name={part3} exercises={exercises3} />
      <Total exercises1={exercises1}  exercises2={exercises2}  exercises3={exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))