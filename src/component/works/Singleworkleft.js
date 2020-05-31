import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Singleworkleft({work}) {
    return (
        <div className="single-work-left">
            <div className="single-work_thumbnail">
                <img src={`./img/${work.thumbnail}`} alt="thumbnail"/>
            </div>

            <div className="single-work_desctiption mt-3">
                <h5>{work.title}</h5>
                <p className="small">{work.description}</p>
            </div>

            <div className="related_project mt-3">
                <h5>Our Staff</h5>
                <Row>
                    <Col sm={6} md={4} className="mb-4">
                        <div className="related_project_thumbnail">
                            <img src="./img/team/portrait-3013924_1280.jpg" alt="related_project"/>
                        </div>
                    </Col>

                    <Col sm={6} md={4} className="mb-4">
                        <div className="related_project_thumbnail">
                            <img src="./img/team/entrepreneur-593358_1280.jpg" alt="related_project"/>
                        </div>
                    </Col>

                    <Col sm={6} md={4} className="mb-4">
                        <div className="related_project_thumbnail">
                            <img src="./img/team/girl-919048_1280.jpg" alt="related_project"/>
                        </div>
                    </Col>

                    <Col sm={6} md={4} className="mb-4">
                        <div className="related_project_thumbnail">
                            <img src="./img/team/man-1209494_1280.jpg" alt="related_project"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Singleworkleft
