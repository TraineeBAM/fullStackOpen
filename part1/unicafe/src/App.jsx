import { useState } from 'react'
import Button from './Button'
import StatisticLine from './StatisticLine'


const calcStats = (good, neutral, bad) => {
  if(good + neutral + bad === 0){
    return(
      <p>Please provide some feedback to see stats</p>
    )
  }
  return(
    <>
    <StatisticLine text="Good" value={good}/>
    <StatisticLine text="Neutral" value={neutral}/>
    <StatisticLine text="Bad" value={bad}/>
    <StatisticLine text="All" value={good + neutral + bad}/>
    <StatisticLine text="Average" value={((good+(bad*-1))/(good + neutral + bad))}/>
    <StatisticLine text="Positive" value={(good / (good + neutral + bad))*100+"%"}/>
    </>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    console.log('Good now', updatedGood)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    console.log('Neutral now', updatedNeutral)
  }

  const addBad = () => {
    setBad(bad + 1)
    const updatedBad = bad + 1
    console.log('Bad now', updatedBad)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={addGood} text="Good" />
      <Button handleClick={addNeutral} text="Neutral" />
      <Button handleClick={addBad} text="Bad" />
      <h1>Statistics</h1>
      <>{calcStats(good, neutral, bad)}</>
    </div>
  )
}

export default App