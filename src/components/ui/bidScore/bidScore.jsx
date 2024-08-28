import React, { useContext, useState } from 'react'
import BidScoreItem from './bidScoreItem'
import { ActiveContext } from '../../../contexts/activeElementContext';

function BidScore() {
  const components = [1, 2, 3, 4, 5, 6];
  const numberState = useContext(ActiveContext);

  return (
    <ul className='flex justify-center align-center'>
      {
        components.map((number, index) => (
          <BidScoreItem key={index} number={number} onClick={() => numberState.setActiveNumber(number)} isActive={numberState.activeNumber===number? true: false}/>
        )) 
      }
    </ul>
  )
}

export default BidScore;