import React from 'react'
import {Link} from "react-router-dom"
import SideMenu from './SideMenu'
import Filter from './Filter'
import SocialLink from './SocialLink'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function Sidebar({isactive,sidenavtoggle}){

    let sidenvaclass = isactive ? "sidenav active" 
                        : "sidenav";

    return(
        <div className={sidenvaclass}>
            <div className="sidenav_brand d-flex justify-content-center">

                <div className="closesidenav d-flex justify-content-center align-items-center bg-primary text-light d-block d-md-none" onClick={() => sidenavtoggle(prev => !prev)}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>

                <Link to="/">kappe</Link>
            </div>
            
            <SideMenu/>
            <Filter/>
            <SocialLink/>
            <p className="text-secondary small text-right mr-4">&copy; 2020, All Right Reserved</p>
        </div>
    )
}

export default Sidebar;