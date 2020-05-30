import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle, faPhone, faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons'

function Contactinfo(){
    const [open, setOpen] = useState(false);

    return(
        <div className="quickContactInfo d-flex justify-content-end">

            <div className="quickContactInfo_button bg-primary d-flex justify-content-center align-items-center text-light" onClick={() => setOpen(prevState => !prevState)}>
                <FontAwesomeIcon icon ={faInfoCircle} size="lg"/>
            </div>
            {
                open ? (
                    <div className="quickContactInfo_details">
                        <p><FontAwesomeIcon className="mr-2" icon ={faPhone}/> 123456789</p>
                        <p><FontAwesomeIcon className="mr-2" icon ={faEnvelope}/> contact@gmail.com</p>
                        <p><FontAwesomeIcon className="mr-2" icon ={faHome}/> address example</p>
                    </div>
                ):null
            }

        </div>
    )
}

export default Contactinfo;