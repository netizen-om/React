/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [color,setColor] = useState('olive')

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div className='w-full min-h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex justify-center bottom-12 rounded-3xl flex-wrap inset-x-0 px-2'>
              <div className='flex justify-center gap-4 shadow-lg rounded-3xl bg-white px-5 py-4'>
                  <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('red')}>red</button>
                  <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('green')}>Green</button>
                  <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('blue')}>Blue</button>
              </div>
            
        </div>
    </div>
  )
}

export default App
