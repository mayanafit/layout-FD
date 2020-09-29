import React from 'react';
import { Col, Row } from 'reactstrap';
import { Title } from '../libraries';
import bodyshop from '../assets/brand-logo/bodyshop.png';
import innisfree from '../assets/brand-logo/innisfree.png';
import maybelline from '../assets/brand-logo/maybelline.jpg';
import nivea from '../assets/brand-logo/nivea.png';
import ordinary from '../assets/brand-logo/ordinary.png';
import skii from '../assets/brand-logo/skii.jpeg';

const Brand = () => {
    return (
        <section className="container brand">
            <div className="flex flex-jc-sb flex-ai-fe" style={{marginBottom: '2em'}}>
                <Title title="Top Brands" subtitle="We all know and love"/>
                <p>See more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{">"}</p>
            </div>
            <Row className="flex flex-ai-c">
                <Col sm="12" md="2">
                    <img src={bodyshop} alt="bodyshop"/>
                </Col>
                <Col sm="12" md="2">
                    <img src={innisfree} alt="innisfree"/>
                </Col>
                <Col sm="12" md="2">
                    <img src={maybelline} alt="maybelline"/>
                </Col>
                <Col sm="12" md="2">
                    <img src={nivea} alt="nivea"/>
                </Col>
                <Col sm="12" md="2">
                    <img src={ordinary} alt="ordinary"/>
                </Col>
                <Col sm="12" md="2">
                    <img src={skii} alt="skii"/>
                </Col>
            </Row>
            <div className="brand_description">
                <h3>Female Daily - Find everything you want to know about beauty on Female Daily</h3>
                <p>Product Reviews, Tips {"&"} Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!</p>
            </div>   
        </section>
    )
}

export default Brand