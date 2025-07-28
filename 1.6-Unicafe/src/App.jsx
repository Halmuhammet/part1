import {useState} from "react"

const FeedbackButtons = ({action, label}) => {
  return(
    <div>
      <button onClick = {action}>
        {label}
      </button>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  const total = good + neutral + bad;

  return(
    <div>
      <h1>Statistics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>average: {(total ? ((good - bad) / total).toFixed(2) : "0.00")}</p>
      <p>positive: {(total ? (100 * good / total).toFixed(2) : "0.00")}%</p>
 </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () =>{
    setGood(good + 1);
  }
  const handleNeutralButton = () =>{
    setNeutral(neutral + 1);
  }
  const handleBadButton = () =>{
    setBad(bad + 1);
  }
  return(
    <div>
      <h1>Give a Feedback</h1>
      <FeedbackButtons 
        action = {handleGoodButton}
        label = {"good"}
      />
      <FeedbackButtons 
        action = {handleNeutralButton}
        label = {"neutral"}
      />
      <FeedbackButtons 
        action = {handleBadButton}
        label = {"bad"}
      />
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
      />
    </div>
  )
}

export default App;
