import React from 'react'
import DiceNum from './ui/diceNum';

function Arena() {
  return (
    <div className='w-full h-[400px] flex items-center justify-center bg-black'>
        <div className='w-[800px] h-[350px] bg-white'>
            <DiceNum/>
        </div>
    </div>
  )
}

export default Arena;