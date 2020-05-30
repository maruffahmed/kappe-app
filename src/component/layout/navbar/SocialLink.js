import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare,faTwitterSquare,faGooglePlusSquare,faLinkedin} from "@fortawesome/free-brands-svg-icons"

function SocialLink(){
    return(
        <div className="sidenav_social_links mr-4">
            <ul className="sidenav_social_links_items d-flex justify-content-end">
                <li>
                    <a className="fb" href="/"><FontAwesomeIcon icon={faFacebookSquare} size="lg"/></a>
                </li>
                <li>
                    <a className="twitter" href="/home"><FontAwesomeIcon icon={faTwitterSquare} size="lg"/></a>
                </li>
                <li>
                    <a className="google" href="/about"><FontAwesomeIcon icon={faGooglePlusSquare} size="lg"/></a>
                </li>
                <li>
                    <a className="linkdin" href="/contact"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLink;