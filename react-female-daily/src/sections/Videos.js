import React from 'react';
import { Col, Row } from 'reactstrap';
import { Title } from '../libraries';

const Videos = () => {
    return (
        <section className="container videos">
            <div className="flex flex-jc-sb flex-ai-fe">
                <Title title="Latest Videos" subtitle="Watch and learn, ladies"/>
                <p>See more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{">"}</p>
            </div>
            <Row className="videos_content">
                <Col sm="12" md="8">
                    <iframe src="https://www.youtube.com/embed/sKYjtapD5Sg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col sm="12" md="4">
                    <div className="videos_column flex flex-column">
                        <iframe src="https://www.youtube.com/embed/m4nNmhjmW_M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe src="https://www.youtube.com/embed/Y1kbcC0QQq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Videos