import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ScoreContext } from '../../contexts/scoreContext';
import { DiceContext } from '../../contexts/diceContext';
import { ActiveContext } from '../../contexts/activeElementContext';
function ScoreElement() {
  const scoreState = useContext(ScoreContext);
  const diceState = useContext(DiceContext);
  const activeState = useContext(ActiveContext);
  function checkBid() {
    if(diceState.diceNumber === activeState.activeNumber){
        scoreState.setScore(scoreState.score + diceState.diceNumber);
        console.log(activeState.activeNumber);
        console.log(diceState.diceNumber);
    }
    else{
        scoreState.setScore(scoreState.score - diceState.diceNumber);   
        console.log(activeState.activeNumber);
        console.log(diceState.diceNumber);
    }
  }
  useEffect(() => {
    checkBid();
  }, [diceState.diceNumber]);
  return (
    <div className='h-32 w-32'>
      {/* {console.log(scoreState.score)} */}
      <h1 className={`${scoreState.score >= 0? 'text-green-500': 'text-red-700'} font-bold text-8xl`}>{scoreState.score}</h1>
    </div>
  )
}

export default ScoreElement;