import React from 'react';
import { Col, Row } from 'reactstrap';
import logo from '../assets/logo-FD.png';
import playstore from '../assets/playstore.png';
import appstore from '../assets/appstore.png';
import {SiFacebook} from 'react-icons/si';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa';

 
const Footer = () => {
    return (
        <footer>
            <Row className="footer">
                <Col sm="12" md="8" className="footer_menu">
                    <Row>
                        <Col sm="12" md="4" className="menu">About Us</Col>
                        <Col sm="12" md="4" className="menu">Feedback</Col>
                        <Col sm="12" md="4" className="menu">Contact</Col>
                        <Col sm="12" md="4" className="menu">Terms {"&"} Conditions</Col>
                        <Col sm="12" md="4" className="menu">Privacy Policy</Col>
                        <Col sm="12" md="4" className="menu">Help</Col>
                        <Col sm="12" md="4" className="menu">Awards</Col>
                        <Col sm="12" md="4" className="menu">Newsletter</Col>
                    </Row>
                    <img src={logo} alt="female-daily"/>
                    <p>Copyright &copy; 2015 - 2017 Female Daily Network - All rights reserved</p>
                </Col>
                <Col sm="12" md="4" className="footer_link">
                    <p>Download Our Mobile App</p>
                    <div className="flex footer_link_store">
                        <img src={appstore} alt="appstore"/>  
                        <img src={playstore} alt="playstore"/>
                    </div>
                    <div className="flex footer_link_icon">
                        <SiFacebook className="icon icon_facebook" />
                        <AiFillTwitterCircle  className="icon icon_twitter"/>
                        <FaInstagramSquare className="icon icon_instagram" />
                        <FaYoutubeSquare className="icon icon_youtube" />
                    </div>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer