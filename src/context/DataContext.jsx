import React, { createContext, useState } from "react";
export const Cntx = createContext();

function DataContext({ children }) {
    const [basket, setBasket] = useState([]);
    const [sebetSay, setSebetSay] = useState(0);

    return (
        <Cntx.Provider value={{ basket, setBasket, sebetSay, setSebetSay }}>
            {children}
        </Cntx.Provider>
    );
}

export default DataContext;
