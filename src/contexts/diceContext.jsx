import React, { createContext, useState } from 'react'

export const DiceContext = createContext(1);
function DiceProvider({children}) {
    const [diceNumber, setDiceNumber] = useState(1);
    return (
        <DiceContext.Provider value={{diceNumber, setDiceNumber}}>
            {children}
        </DiceContext.Provider>
    )
}

export default DiceProvider