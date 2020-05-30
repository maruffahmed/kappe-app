import React from 'react';
import {NavLink} from "react-router-dom"

function SideMenu(){
    return (
        <div className="sidenav_menu">
            <ul className="sidenav_menu_items">
                <li>
                    <NavLink exact activeClassName="selected" className="d-flex justify-content-end align-items-center pr-4" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" className="d-flex justify-content-end align-items-center pr-4" to="/works">Works</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" className="d-flex justify-content-end align-items-center pr-4" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" className="d-flex justify-content-end align-items-center pr-4" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;