import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios'
export const WorksContext = createContext()

function WorksContextProvider(props){
    const [works, setWorks] = useState([]);

    const getWorksData = () => {
        axios.get('data/works.json')
        .then(res => JSON.parse(JSON.stringify(res.data)))
        .then(data => {
            setWorks(data.works);
        })
        .catch(err => {
            console.log(err)
        })
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