import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Singleworkleft from './Singleworkleft'
import Singleworkright from './Singleworkright'
import { WorksContext } from '../../context/WorksContext'

function Singlework() {
    const {works} = useContext(WorksContext)
    const {id} = useParams();
    // const [select, setSelect] = useState(null);

    const [selectedWork] = works.filter(work => work.id === parseInt(id))
    // setSelect(works.filter(work => work.id === parseInt(id)))

    // console.log(selectedWork);
    return (
        <div className="single-work p-3">
            {
                works.length && (
                    <div className="single-work-content p-3 bg-white">  
                        <Singleworkleft work = {selectedWork}/>
                        <Singleworkright work = {selectedWork}/>
                    </div>
                )
            }
        </div>
    )
}

export default Singlework
