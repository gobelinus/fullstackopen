import React from 'react'
import SubHeader from './SubHeader'
import Content from './Content'

const Course = ({ course }) => {
  return (
    <>
      <SubHeader course={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

export default Course
