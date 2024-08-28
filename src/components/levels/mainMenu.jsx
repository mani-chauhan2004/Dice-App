import React, { useContext} from 'react'
import { LiaDiceSolid } from "react-icons/lia";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import DashBoard from './dashBoard';
import Options from './options';
import { ScoreContext } from '../../contexts/scoreContext';
import { DiceContext } from '../../contexts/diceContext';
import { ActiveContext } from '../../contexts/activeElementContext';


function MainMenu() {

  const scoreState = useContext(ScoreContext);
  const diceState = useContext(DiceContext);
  const activeState = useContext(ActiveContext);
  
  function startGame() {
    activeState.setActiveNumber(1);
    scoreState.setScore(-1);
    diceState.setDiceNumber(1);
  }
  return(
    <div className='flex items-center justify-between px-48 bg-black w-screen h-screen'>
        <div className='flex flex-col align-center gap-6'>
            <h1 className='text-white text-6xl font-bold font-serif' onClick={() => startGame()}><Link to='/dashboard'>PLAY</Link></h1>
            <h1 className='text-white text-6xl font-bold font-serif'><Link to='/options'>OPTIONS</Link></h1>
            <h1 className='text-white text-6xl font-bold font-serif'><Link to='/high-scores'>HIGH SCORES</Link></h1>  
        </div>
        <LiaDiceSolid className='text-white text-[500px]'/>
    </div>
  )
}

export default MainMenu;