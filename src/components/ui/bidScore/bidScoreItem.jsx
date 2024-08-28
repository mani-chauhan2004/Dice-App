import React, { useState } from 'react'

function BidScoreItem({number, isActive, onClick}) {

  return (
    <div className={`${!isActive? 'bg-white text-black' : 'bg-black text-white'} h-20 w-20 border-2 border-black p-2 cursor-pointer`} onClick={onClick}>
        <h1 className='text-6xl font-bold text-center'>{number}</h1>
    </div>
  )
}

export default BidScoreItem;