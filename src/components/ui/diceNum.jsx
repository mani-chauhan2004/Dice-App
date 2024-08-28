import React, { useState, useContext } from 'react';
import { GiDiceSixFacesOne, GiDiceSixFacesTwo, GiDiceSixFacesThree, GiDiceSixFacesFour, GiDiceSixFacesFive, GiDiceSixFacesSix } from "react-icons/gi";
import { DiceContext } from '../../contexts/diceContext';

function DiceNum() {

    const diceState = useContext(DiceContext);
    
    function randomDiceNumber(){
        const randomNumber = Math.floor(Math.random()*6)+1;
        return randomNumber;
    }

    function renderElement() {
        switch(diceState.diceNumber){
            case 1:
                return <GiDiceSixFacesOne/>
            case 2:
                return <GiDiceSixFacesTwo/>
            case 3:
                return <GiDiceSixFacesThree/>
            case 4:
                return <GiDiceSixFacesFour/>
            case 5:
                return <GiDiceSixFacesFive/>
            case 6:
                return <GiDiceSixFacesSix/>
            default:
                return <GiDiceSixFacesOne/>

        }
    }
    return ( 
        <div className=' flex flex-col justify-center gap-2 p-4'>
            <div className='text-white bg-black h-64 text-[10em] flex items-center justify-center'>{renderElement()}</div>
            <button className='text-white bg-black rounded-xl px-8 py-2 font-bold text-5xl' onClick={() => diceState.setDiceNumber(randomDiceNumber())}>Roll</button>
        </div>
    )
}

export default DiceNum;