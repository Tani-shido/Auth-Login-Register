import { useState } from 'react'
import './App.css'
import Main from './Components/Main'

function App() {

  return<>
  <div className='bg-gray-500 h-screen w-screen'>
    <div className='h-full w-7xl mx-auto p-4 flex'>
      <div className='w-full h-full flex items-center justify-center'><Main /></div>
    </div>
  </div>
  
  
  </>
}

export default App
