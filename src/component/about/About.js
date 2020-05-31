import React from 'react'
import Aboutleft from './Aboutleft'
import Aboutright from './Aboutright'

function About(){
    document.title = "About"
    return(
        <div className="about p-3">
            <div className="about-content bg-white p-3">
                <Aboutleft/>
                <Aboutright/>
            </div>
        </div>
    )
}

export default About