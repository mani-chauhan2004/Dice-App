import React from 'react'
import { LiaDiceSolid } from "react-icons/lia";
function NavBar() {
  return (
    <div className='w-screen h-20 bg-black flex items-center justify-center gap-1'>
        <LiaDiceSolid className='h-16 w-16 z-2 text-white'/>
        <h2 className='text-3xl text-gray-400 x'>Dice</h2>
        <h1 className='text-4xl text-white font-bold font-sans'>Around</h1>
    </div>
  )
}

export default NavBar