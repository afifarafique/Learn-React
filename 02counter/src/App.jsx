import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

  //  let counter = 10

 const addValue = () => {
   counter = counter + 1
   setCounter(counter)
 }

 const removeValue = () => {
  setCounter(counter - 1)
 }
  return (
    <>
     <h1>Counter value: {counter}</h1>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Decrease value {counter} </button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
