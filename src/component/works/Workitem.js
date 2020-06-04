import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Workitem({work}) {
    return (
        
        <div className="work_thumbail">
            <img src={work.thumbnail} alt={work.title}/>
            
            <Link to={`/work/${work.id}`} className="work_thumbnail_filter d-flex flex-column justify-content-center align-items-center">
                <h4>
                    {work.title}
                </h4>
                <p className="small m-0">
                    {work.tags.slice(0,2).join(", ")}
                </p>
                <hr/>
                <FontAwesomeIcon icon={faArrowRight} size="lg"/>
            </Link>
        </div>
    );
  }
  
  export default Workitem;