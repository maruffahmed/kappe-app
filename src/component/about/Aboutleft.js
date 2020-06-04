import React from 'react'
import {Row, Col} from 'react-bootstrap'
import about_thumb from '../../img/thumbnail/about_thumb.jpg'
import team1 from '../../img/team/team1.jpg'
import team2 from '../../img/team/team2.jpg'
import team3 from '../../img/team/team3.jpg'
import team4 from '../../img/team/team4.jpg'

function Aboutleft(){
    return(
        <div className="about-left">
            <div className="about_thumbnail">
                <img src={about_thumb} alt="thumbnail"/>
            </div>

            <div className="about_desctiption mt-3">
                <h5>Who We Are</h5>
                <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe possimus ad dolor fugiat, maxime esse dignissimos rem et atque voluptatem consequuntur, illum deserunt autem consequatur natus, facilis maiores animi!</p>
                <p className="small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus consequuntur delectus, sed quis fugit inventore officia aspernatur voluptatibus quisquam labore pariatur voluptas nihil molestias, porro, officiis perspiciatis! Veniam, voluptas blanditiis.</p>
            </div>

            <div className="team_members mt-3">
                <h5>Our Staff</h5>
                <Row>
                    <Col sm={6} md={4} className="mb-4">
                        <div className="team_member_thumbnail">
                            <img src={team1} alt="team_member"/>
                        </div>
                    </Col>

                    <Col sm={6} md={4} className="mb-4">
                        <div className="team_member_thumbnail">
                            <img src={team2} alt="team_member"/>
                        </div>
                    </Col>

                    <Col sm={6} md={4} className="mb-4">
                        <div className="team_member_thumbnail">
                            <img src={team3} alt="team_member"/>
                        </div>
                    </Col>

                    <Col sm={6} md={4} className="mb-4">
                        <div className="team_member_thumbnail">
                            <img src={team4} alt="team_member"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Aboutleft