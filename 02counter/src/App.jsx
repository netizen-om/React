import './App.css'
import { useState } from 'react'


function App() {

  const [counter,setcounter] = useState(1)
 
  const addValue = () => {
    setcounter(counter+1)
    setcounter(counter+1)
    setcounter(counter+1)
    // This will only add 1 as react sends bundel and process it in Algorithm
    // But the following way will work where we provide callback to the counter
    setcounter((prevCounter) => prevCounter + 1)
    setcounter((prevCounter) => prevCounter + 1)
    setcounter((prevCounter) => prevCounter + 1)
    setcounter((prevCounter) => prevCounter + 1)
  }

  const subtractValue = () => {
    setcounter(counter-1)
  }

  return (
    <>
      <h1>A Simple React Counter</h1>
      <h2>Counter : {counter} </h2>
      <button onClick={addValue}>Add Value</button> {""}
      <button onClick={subtractValue} >Remove Value</button>
      <p>Footer : This is a simple React based Counter</p>
    </>
  )
}

export default App
