import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import configObj from "../config/config";

export const Cntx = createContext();

function DataContext({ children }) {
    const [data, setData] = useState([]);
    const [catalog, setCatalog] = useState();
    const [basket, setBasket] = useState([]);
    const [sebetSay, setSebetSay] = useState(0);

    useEffect(() => {
        axios
            .get(`${configObj.base}/products`)
            .then((res) => setData(res.data.data));
        axios
            .get(`${configObj.base}/catalog`)
            .then((res) => setCatalog(res.data));
    }, []);

    return (
        <Cntx.Provider value={{ data, catalog, setCatalog, basket, setBasket, sebetSay, setSebetSay }}>
            {children}
        </Cntx.Provider>
    );
}

export default DataContext;
