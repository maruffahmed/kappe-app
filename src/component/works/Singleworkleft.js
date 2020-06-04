import React from 'react'
import {Row, Col} from 'react-bootstrap'

function Singleworkleft({work}) {
    return (
        <div className="single-work-left">
            <div className="single-work_thumbnail">
                <img src={work.thumbnail} alt="thumbnail"/>
            </div>

            <div className="single-work_desctiption mt-3">
                <h5>{work.title}</h5>
                <p className="small">{work.description}</p>
            </div>

            <div className="related_project mt-3">
                <h5>Related project</h5>
                <Row>
                    {
                        work.gallery.map((item,index) => {
                            return(
                                <Col sm={6} md={4} className="mb-4" key={index}>
                                    <div className="related_project_thumbnail">
                                        <img src={item} alt="related_project"/>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default Singleworkleft
