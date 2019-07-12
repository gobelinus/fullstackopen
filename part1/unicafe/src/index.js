import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Stats = (props) => {
  return (
    Object.keys(props.feedbacks).map(feedback => {
      return (
        <p key={feedback.toString()}>
          {feedback} {props.feedbacks[feedback]}
        </p>
      )
    })
  )
}

const Statistics = (props) => {
  if (props.total > 0) {
    return (
      <>
        <Header text="statistics" />
        <Stats feedbacks={props.feedbacks} />
      </>
    )
  }

  return <></>
}

const App = () => {
  // save clicks of each button to own state
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const [total, setTotal] = useState(0)

  const handleGoodFeedback = () => {
    setFeedbacks({
        ...feedbacks,
        good: feedbacks.good + 1
    })
    setTotal(total + 1)
  }

  const handleNeutralFeedback = () => {
    setFeedbacks({
        ...feedbacks,
        neutral: feedbacks.neutral + 1
    })
    setTotal(total + 1)
  }

  const handleBadFeedback = () => {
    setFeedbacks({
        ...feedbacks,
        bad: feedbacks.bad + 1
    })
    setTotal(total + 1)
  }

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClick={handleGoodFeedback} />
      <Button text="neutral" onClick={handleNeutralFeedback} />
      <Button text="bad" onClick={handleBadFeedback} />
      <Statistics feedbacks={feedbacks} total={total} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)