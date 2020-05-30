import React from 'react'
import {Link} from "react-router-dom"
import SideMenu from './SideMenu'
import Filter from './Filter'
import SocialLink from './SocialLink'
function Sidebar({isactive}){

    let sidenvaclass = isactive ? "sidenav active" 
                        : "sidenav";

    return(
        <div className={sidenvaclass}>
            <div className="sidenav_brand d-flex justify-content-center">

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