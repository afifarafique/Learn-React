import { useState,useCallback ,useEffect, useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setnumAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numAllowed) str += "0123456789" 
  if(charAllowed) str += "!@#$%^&*()[]{}~`" 
 
  for (let i = 1; i <= length; i++) {
   let char = Math.floor(Math.random() * str.length +1) 
   pass += str.charAt(char)
    
  }
  setPassword(pass)


  }, [length,numAllowed,charAllowed,setPassword])

  const copyPassworrdToClipboard =useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-400 bg-gray-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text"
         value ={password}
         classname='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly
         ref={passwordRef}
        />
        <button
         onClick={copyPassworrdToClipboard}
         className='outline-none bg-orange-400 text-white px-3 py-0.5'>Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 "> 
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min ={6}
          max ={100}
          value ={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label>length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
         type="checkbox"
         defaultChecked={numAllowed}
         id="numInput"
         onChange={() => {
          setnumAllowed((prev) => !prev);
         }}
        />
        <label htmlFor="numInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
        <input
         type="checkbox"
         defaultChecked={charAllowed}
         id="charInput"
         onChange={() => {
          setcharAllowed((prev) => !prev);
         }}
        />
        <label htmlFor="charInput">Characters</label>
        </div>

      </div>
     </div>
    </>
  )
}

export default App
