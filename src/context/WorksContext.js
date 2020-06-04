import React, { createContext, useState,useEffect } from 'react'
import data from '../data/data'
export const WorksContext = createContext()

function WorksContextProvider(props){
    const [works, setWorks] = useState([]);

    const getWorksData = () => {
        setWorks(data)
    }

    useEffect(() => {
        getWorksData();
    },[])

    return(
        <WorksContext.Provider value={{works}}>
            {props.children}
        </WorksContext.Provider>
    )
}
export default WorksContextProvider;