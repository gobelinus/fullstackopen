import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const TopAnecdote = (props) => {
  if (props.mostVoted > -1) {
    return (
      <>
        <Header text="Anecdote with most votes" />
        <div>
          {props.anecdotes[props.mostVoted]}
        </div>
        <p>has {props.votes[props.mostVoted]} votes</p>
      </>
    )
  }
  return (
    <>
    </>
  )
}
const App = (props) => {
  const points = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([...points])
  const [mostVoted, setMostVoted] = useState(-1)

  const getNextAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const updateVotes = (selected, currentVotes) => {
    return () => {
      const newVotes = [...currentVotes]
      newVotes[selected] += 1
      setVotes([...newVotes])
      setMostVoted(newVotes.indexOf(Math.max(...newVotes)))
    }

  }

  return (
    <>
      <Header text="Anecdote of the day" />
      <div>
        {props.anecdotes[selected]}
      </div>
      <p>has {votes[selected]} votes</p>
      <button onClick={updateVotes(selected, votes)}>vote</button>
      <button onClick={getNextAnecdotes}>next anecdote</button>

      <TopAnecdote mostVoted={mostVoted} anecdotes={anecdotes} votes={votes} />
    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
