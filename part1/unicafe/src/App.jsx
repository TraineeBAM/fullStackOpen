/* eslint-disable react/prop-types */
import { useState } from "react"

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td> 
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0){
    return (<p>No feedback given</p>)
  }

  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good / total) * 100 + "%"

  return <table>
            <tbody>
              <StatisticLine text="Good" value={good} />
              <StatisticLine text="Neutral" value={neutral} />
              <StatisticLine text="Bad" value={bad} />
              <StatisticLine text="Total" value={total} />
              <StatisticLine text="Average" value={average} />
              <StatisticLine text="Positive" value={positive} />
            </tbody>
        </table>;
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={() => setBad(bad+1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </>
  )
}

export default App
