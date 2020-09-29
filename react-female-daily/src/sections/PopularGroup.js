import React from 'react';
import { Col, Row } from 'reactstrap';
import { FigureCard, Title } from '../libraries';

const PopularGroup = () => {
    return(
        <section className="popular container">
            <div className="popular_title flex flex-jc-sb flex-ai-fe">
                <Title title="Popular Groups" subtitle="Where the beauty TALK are"/>
                <p className="see-more">See more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{">"}</p>
            </div>
            <Row>
                <Col>
                    <FigureCard />
                </Col>
                <Col>
                    <FigureCard />
                </Col>
                <Col>
                    <FigureCard />
                </Col>
                <Col>
                    <FigureCard />
                </Col>
            </Row>
        </section>
    )
}

export default PopularGroup