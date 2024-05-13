import {useState} from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value}/>
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset"/>
      <Button handleClick={() => setToValue(value + 1)} text="increment"/>
    </div>
  )
}


// const History = (props) => {
//   if (props.allClicks.length === 0){
//     return (
//       <div>
//         The app is used by pressing the buttons!
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right'/>
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     setClicks({ ...clicks, left: clicks.left + 1})
//   }

//   const handleRightClick = () => {
//     setClicks({ ...clicks, right: clicks.right + 1})
//   }

//   const zeroCounts = () => {
//     setClicks({right: 0, left: 0})
//   }

//   return (
//     <>
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//     <div>
//       <button onClick={zeroCounts}>zero</button>
//     </div>
//     </>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)

//   const decreaseByOne = () => setCounter(counter - 1)

//   const setToZero = () => setCounter(0)

//   const Display = ({ counter }) => <div>{counter}</div>

//   const Button = (props) => {
//     return(
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//     )
//   }

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />
//     </div>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>
//         plus
//       </button>
//       <button onClick={() => setCounter(0)}>
//         zero
//       </button>
//     </div>
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//     3000
//   )

//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>
//   )
// }

// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age
  

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         So you were probably born in {bornYear()}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

export default App