import React from 'react'

function Main() {
  return (
    <div className='bg-gray-400 border p-2 w-xl h-100 rounded-xl flex-col text-2xl text-center'>
      <h1 className='font-medium text-4xl my-8'>Sign Up / Log In</h1>
      <form action="">
        <input className='border w-md m-4 p-2 rounded outline-none' type="text" placeholder='Email'/>
        <input className='border w-md m-4 p-2 rounded outline-none' type="text" placeholder='Password'/>
        <br />
        <input className='border-none bg-gray-200 mt-4 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-600 hover:font-medium hover:text-white' type="submit" />
      </form>
    </div>
  )
}

export default Main