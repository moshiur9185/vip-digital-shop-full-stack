import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <section>
            <div className="brand-class text-center mt-5 p-5 ">
                <div>
                    <small>© {(new Date()).getFullYear()} VIP DIGITAL SHOP. All Rights Reserved</small>
                    <br/>
                    <FontAwesomeIcon className="m-2" icon={faFacebook} size="lg"/>
                    <FontAwesomeIcon className="m-2" icon={faTwitter} size="lg"/>
                    <FontAwesomeIcon className="m-2" icon={faLinkedin} size="lg"/>
                    <FontAwesomeIcon className="m-2" icon={faInstagram} size="lg"/>
                    <FontAwesomeIcon className="m-2" icon={faYoutube} size="lg"/>
                </div>
            </div>
        </section>
    );
};

export default Footer;