import React, {useContext} from 'react'
import {Spinner} from "react-bootstrap"
import Workitem from './Workitem'
import {WorksContext} from '../../context/WorksContext';

function Works() {
    const {works} = useContext(WorksContext);
    return (
        <div className = "works">
            {
                works.length ? works.map(work => {
                    return (
                        <Workitem key={work.id} work={work}/>
                    )
                }) : (
                    <div className="preLoading d-flex justify-content-center align-items-center">
                        <Spinner animation="grow" variant="primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                )

            }
        </div>
    );
  }
  
  export default Works;