import React from 'react'
import {Row, Col, Button,FormControl,InputGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faUserCircle, faEnvelopeOpen, faLink} from '@fortawesome/free-solid-svg-icons'


function Contact() {
    document.title = "Contact"
    return (
        <div className="contact p-3 pt-5 pt-md-3">
            <Row>
                <Col xl={6}>
                    <div className="contact-form p-3">
                        <div className="contatct-form_des">
                            <h5>Get in touch with us</h5>
                            <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At asperiores totam provident praesentium dolorum fuga, repudiandae fugit voluptates assumenda. Fuga repellat aliquid reiciendis cupiditate similique mollitia tenetur quidem, nam adipisci.</p>

                        </div>

                        <div className="contact-form_inputs mt-3">
                            <h5>Send us a message</h5>


                            <form action="/contact" method="post">
                                <Row>
                                    <Col md={6}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1" className="bg-white">
                                                    <FontAwesomeIcon className="text-primary" icon={faUserCircle}/>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                            placeholder="Name"
                                            aria-label="Name"
                                            aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon2" className="bg-white">
                                                    <FontAwesomeIcon className="text-primary" icon={faEnvelopeOpen}/>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                            placeholder="e-mail"
                                            aria-label="email"
                                            aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon3" className="bg-white">
                                                    <FontAwesomeIcon className="text-primary" icon={faLink}/>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                            placeholder="website"
                                            aria-label="website"
                                            aria-describedby="basic-addon3"
                                            />
                                        </InputGroup>
                                    </Col>

                                    <Col md={6}>
                                        <FormControl className = "mb-3"
                                        as="textarea"
                                        placeholder="message"
                                        aria-label="message" 
                                        rows = "3"
                                        />

                                        <Button variant="primary" block>SEND NOW</Button>
                                    </Col>


                                </Row>
                            </form>


                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Contact
