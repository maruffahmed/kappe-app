import React from 'react'
import {ProgressBar,Card} from 'react-bootstrap'
import team2 from '../../img/team/team2.jpg'

function Aboutright(){
    return(
        <div className="about-right">
            <div className="our_slills">
                <h5>Out Skills</h5>

                <p className="small m-0">Website Design</p>
                <ProgressBar className="mb-3" now={89} variant="secondary"/>

                <p className="small m-0">Website Development</p>
                <ProgressBar className="mb-3" now={97} variant="secondary"/>

                <p className="small m-0">Plugins</p>
                <ProgressBar className="mb-3" now={86} variant="secondary"/>

                <p className="small m-0">Front End </p>
                <ProgressBar className="mb-3" now={75} variant="secondary"/>
            </div>

            <div className="testimonials mt-3">
                <h5>Testimonials</h5>
                <Card border="primary p-0 m-0">
                    <Card.Header className="bg-primary p-0 d-flex align-items-center">
                        <img src={team2} alt="thumbnail" className="testimonials_thumnail p-0 m-0"/>
                        <p className="m-0 small text-light ml-3"><i>Collis Ta’eed - CEO at Envato</i></p>
                    </Card.Header>
                    <Card.Body>
                    <Card.Text className="small">
                    Sollicitudin lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="services mt-3">
                <h5>Services</h5>
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

export default Aboutright