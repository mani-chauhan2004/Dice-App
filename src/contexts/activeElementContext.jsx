import React, {createContext, useState} from 'react'

export const ActiveContext = createContext(1);

function ActiveElementContext({children}) {

    const [activeNumber, setActiveNumber] = useState(1);

    return (
    <ActiveContext.Provider value={{activeNumber, setActiveNumber}}>
        {children}
    </ActiveContext.Provider>
    )
}

export default ActiveElementContext;