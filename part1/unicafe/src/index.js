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

const Statistic = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

/*
const Stats = (props) => {
  return (
    Object.keys(props.stats).map(stat => {
      return (
        <p key={stat.toString()}>
          {stat} {props.stats[stat]}
        </p>
      )
    })
  )
}
*/

const Statistics = (props) => {
  if (props.total > 0) {
    const stats = {
      all: props.total,
      average: ((props.feedbacks.good - props.feedbacks.bad) / props.total).toFixed(2),
      positive: ((props.feedbacks.good) / props.total * 100).toFixed(2) + ' %'
    }
    /*
    return (
      <>
        <Header text="statistics" />
        <Stats stats={props.feedbacks} />
        <Stats stats={stats} />
      </>
    )
    */
    return (
      <>
        <Header text="statistics" />
        <table>
          <tbody>
            <Statistic text="good" value={props.feedbacks.good} />
            <Statistic text="neutral" value={props.feedbacks.neutral} />
            <Statistic text="bad" value={props.feedbacks.bad} />
            <Statistic text="all" value={stats.all} />
            <Statistic text="average" value={stats.average} />
            <Statistic text="positive" value={stats.positive} />
          </tbody>
        </table>
      </>
    )
  }

  return (
    <>
      <Header text="statistics" />
      <p>No feedback given</p>
    </>
  )
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