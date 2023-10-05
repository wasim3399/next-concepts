'use client'
import React, { useState } from 'react'

export default function FirstHook() {

const [counter, setCounter] = useState(0);

const handleIncrement = (num:number) => {
    setCounter(counter + num);
}

const handleDecrement = () => {
    setCounter(counter -2)
}

  return (
    <div>
        <h2>Counter</h2>
        <div className=' flex items-center'>
            <button className=' bg-green-400 px-4 py-2 rounded-md' onClick={() => handleIncrement(2)}>+</button>
                <div className=' px-5'>{counter}</div>
            <button className=' bg-red-400 px-4 py-2 rounded-md' onClick={handleDecrement}>-</button>
        </div>
    </div>
  )
}
