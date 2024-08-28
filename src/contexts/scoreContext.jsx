import React, { createContext, useState } from 'react'

export const ScoreContext = createContext(-1);

function ScoreProvider({children}) {

    const [score, setScore] = useState(-1);

    return (
        <ScoreContext.Provider value={{score, setScore}}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreProvider