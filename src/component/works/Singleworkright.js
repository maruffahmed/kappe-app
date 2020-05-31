import React from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAlt, faHeart, faCalendar} from '@fortawesome/free-solid-svg-icons'

function Singleworkleft({work}) {
    return (
        <div className="single-work-right">
            <div className="project-info">
                <h5>Project info</h5>

                <ListGroup variant="flush">
                    <ListGroup.Item className="pl-0"><p className="small m-0"><FontAwesomeIcon className="text-primary mr-2" icon={faUserAlt}/> {work.author}</p></ListGroup.Item>
                    <ListGroup.Item className="pl-0"><p className="small m-0"><FontAwesomeIcon className="text-primary mr-2" icon={faHeart}/> {work.likes} Likes</p></ListGroup.Item>
                    <ListGroup.Item className="pl-0"><p className="small m-0"><FontAwesomeIcon className="text-primary mr-2" icon={faCalendar}/>{work.date}</p></ListGroup.Item>
                    <ListGroup.Item className="pl-0"></ListGroup.Item>
                </ListGroup>
            </div>

            <div className="project-tags">
                <h5>Tags</h5>
                <div className="d-flex">
                    {
                        work.tags.map((tag,index) => {
                            return <Button key={index} variant="outline-secondary" size="sm" className="mr-2">{tag}</Button>
                        })
                    }
                </div>
            </div>

            <div className="project-gallery mt-3">

            </div>

            <div className="project-features mt-3">
                <h5>Project Features</h5>
                <ul>
                    <li>
                        <p className="small m-0">Web Design</p>
                    </li>
                    <li>
                        <p className="small m-0">Photography</p>
                    </li>
                    <li>
                        <p className="small m-0">Plugins Development</p>
                    </li>
                    <li>
                        <p className="small m-0">Front End </p>
                    </li>
                    <li>
                        <p className="small m-0">Design From Scratch</p>
                    </li>
                    <li>
                        <p className="small m-0">Web Maintenance</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Singleworkleft
