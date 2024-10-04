import React, { createContext, useState } from "react";
export const Cntx = createContext();

function DataContext({ children }) {
    const [basket, setBasket] = useState([]);
    const [sebetSay, setSebetSay] = useState(0);
    const [catSt, setCatSt] = useState(false)

    const obj = { 
        basket, 
        setBasket, 
        sebetSay, 
        setSebetSay, 
        catSt, 
        setCatSt 
    }

    return (
        <Cntx.Provider value={obj}>
            {children}
        </Cntx.Provider>
    );
}

export default DataContext;
