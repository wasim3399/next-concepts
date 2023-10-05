'use client'
import React, { useEffect, useState } from 'react'

export default function FirstHook() {

const [counter, setCounter] = useState(0);
const [counter2, setCounter2] = useState(0);

useEffect(() => {
    console.log('effect called');
}, [counter]);

const handleIncrement = (num:number) => {
    setCounter(counter + num);
}

const handleDecrement = () => {
    setCounter(counter -2)
}

const handleIncrement2 = (num:number) => {
    setCounter2(counter2 + num);
}

const handleDecrement2 = () => {
    setCounter2(counter2 -2)
}

  return (
    <div>
        <h2>Counter</h2>
        <div className=' flex items-center'>
            <button className=' bg-green-400 px-4 py-2 rounded-md' onClick={() => handleIncrement(2)}>+</button>
                <div className=' px-5'>{counter}</div>
            <button className=' bg-red-400 px-4 py-2 rounded-md' onClick={handleDecrement}>-</button>

            <br />

            <button className=' bg-green-400 px-4 py-2 rounded-md' onClick={() => handleIncrement2(2)}>+</button>
                <div className=' px-5'>{counter2}</div>
            <button className=' bg-red-400 px-4 py-2 rounded-md' onClick={handleDecrement2}>-</button>
        </div>
    </div>
  )
}
