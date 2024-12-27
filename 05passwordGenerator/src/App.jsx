/* eslint-disable no-unused-vars */
import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [length,setLength] = useState(8)
  let [charAllowed,setCharAllowed] = useState(false)
  let [numberAllowed,setNumberAllowed] = useState(  false)
  let [password,setPassword] = useState('')
  
  const passRef = useRef(null)

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  }

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*'

    for(let i=1; length>i ; i++){
       let char = Math.floor(Math.random() * str.length + 1) 
       pass += str.charAt(char)
    }

    setPassword(pass)

  } , [length , numberAllowed , charAllowed]) 


  useEffect(() => {
    generatePassword()
  } , [length , numberAllowed , charAllowed])

  return (
    <div className='w-full flex max-w-md items-center text-white justify-center px-3 py-5 min-h-screen mx-auto shadow-md '>
      <div className='bg-zinc-700 flex flex-col  flex-wrap px-3 rounded-lg py-5 gap-3'>
        <h1 className='mx-auto text-3xl tracking-tight text-white'>Password Generator</h1>
        <div className='flex flex-row gap-2'>
          <input type="text" className='w-full rounded-lg outline-none text-balck shadow-lg text-black'
          value={password}
          placeholder='Password'
          readOnly
          ref={passRef}
          />
          <button  className='bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex gap-4 flex-row'>
          <div className='flex gap-2'>
            <input type="range" 
            min={6} 
            max={100} 
            value={length} 
            name="length" 
            id="" 
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)} />

            <label htmlFor='length'>Length : {length} </label>
          </div>
          <div className='flex gap-2'>
          <div className='flex gap-1'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="">number</label>
          </div>
          <div className='flex gap-1'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor="">Character</label>
          </div>
          </div>
           
        </div>

      </div>
    </div>
  )
}

export default App
