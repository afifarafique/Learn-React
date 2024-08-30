import { useState } from "react"

function App() {
  const [color,setColor] = useState("black")

  return (
   <div className="w-full h-screen duration-100"
   style={{backgroundColor:color}}
   >
    <div className="fixed flex flex-wrap justify-center">
      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl shadow-lg">
        <button 
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"red"}}
        >Red</button>
         <button 
          onClick={() => setColor("green")}
         className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"green"}}
        >Green</button>
         <button 
          onClick={() => setColor("blue")}
         className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"blue"}}
        >Blue</button>
         <button
          onClick={() => setColor("orange")}
         className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"orange"}}
        >Orange</button>
         <button 
          onClick={() => setColor("yellow")}
         className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"yellow"}}
        >Yellow</button>
      </div>
    </div>
   </div>
  )
}

export default App
