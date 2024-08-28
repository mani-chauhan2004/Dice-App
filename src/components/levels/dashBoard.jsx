import React from 'react'
import NavBar from '../navBar/navBar';
import ScoreElement from '../ui/score';
import BidScore from '../ui/bidScore/bidScore';
import Arena from '../arena';
function DashBoard() {
  return (
    <div className='w-screen h-screen'>
      <NavBar/>
      <div className='flex justify-between p-8'>
        <ScoreElement/>
        <BidScore/>
      </div>
      <Arena/>
    </div>
  )
}

export default DashBoard;