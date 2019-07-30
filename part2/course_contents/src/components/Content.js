import React from 'react'
import Part from './Part'
import Total from './Total'

const Parts = ({parts}) => {
  return (
    parts.map(part => {
      return (
        <Part key={part.id.toString()} part={part}></Part>
      )
    })
  )
}

const Content = ({parts}) => {
  return (
    <>
      <Parts parts={parts}></Parts>
      <Total parts={parts}></Total>
    </>
  )
}

export default Content