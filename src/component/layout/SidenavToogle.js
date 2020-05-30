import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Sidenavtoggle({sidenavtoggle}){
    return(
        <div className="sidenavtoggle d-flex justify-content-center align-items-center bg-primary text-light d-block d-md-none" onClick={() => sidenavtoggle(prev => !prev)}>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    )
}

export default Sidenavtoggle;