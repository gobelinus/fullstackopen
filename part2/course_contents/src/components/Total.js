import React from 'react'

const Total = ({parts}) => {
  let total = 0
  parts.forEach(value => total += value.exercises)
  return (
    <p><strong>total of {total} exercises</strong></p>
  )
}

export default Total