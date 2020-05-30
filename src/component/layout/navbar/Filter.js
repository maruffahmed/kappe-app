import React from 'react'
import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThLarge} from '@fortawesome/free-solid-svg-icons'

function Filter(){
    return (
        <div className="sidenav_filter_menu text-right mr-4">
            <p className="text-primary">Filter <FontAwesomeIcon icon={faThLarge}/> </p>
            <ul className="sidenav_filter_menu_items">
                <li>
                    <NavLink exact className="small" to="/">All work</NavLink>
                </li>
                <li>
                    <NavLink className="small" to="/works/web">Web design</NavLink>
                </li>
                <li>
                    <NavLink className="small" to="/works/illustration">illustration</NavLink>
                </li>
                <li>
                    <NavLink className="small" to="/works/photography">photography</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Filter;