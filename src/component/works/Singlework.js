import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Singleworkleft from './Singleworkleft'
import Singleworkright from './Singleworkright'
import { WorksContext } from '../../context/WorksContext'

function Singlework() {

    const {works} = useContext(WorksContext)
    const {id} = useParams();
    const [selectedWork] = works.filter(work => work.id === parseInt(id))
    // Title
    // document.title = selectedWork.title

    return (
        <div className="single-work p-3">
            <div className="single-work-content p-3 bg-white">  
                <Singleworkleft work = {selectedWork}/>
                <Singleworkright work = {selectedWork}/>
            </div>
        </div>
    )
}

export default Singlework
