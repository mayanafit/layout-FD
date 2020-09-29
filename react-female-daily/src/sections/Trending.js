import React from 'react';
import { Row, Col } from 'reactstrap';
import { Title, ProductCard } from '../libraries';
import { useSelector } from 'react-redux';
import foundation from '../assets/products/foundation.jpg';

const Trending = () => {
    const { choices } = useSelector(state => state)
    return (
        <section className="container" style={{marginTop: '3em', marginBottom: '3em'}}>
            <div className="flex flex-jc-sb flex-ai-fe" style={{marginBottom: '2em'}}>
                <Title title="Trending This Week" subtitle="See our weekly most reviewed products"/>
                <p className="see-more">See more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{">"}</p>
            </div>
            <Row>
                {
                    choices && choices.map((choice, index) => (
                        <Col sm="12" md="2" key={index}>
                            <ProductCard name={choice.product.name} rating={choice.product.rating} description={choice.product.description} image={choice.product.image} />
                        </Col>
                    ))
                }
                 <Col sm="12" md="2">
                    <ProductCard name="Foundation" rating="3" description="foundation with matte" image={foundation} />
                </Col>
            </Row>
        </section>
    )
}

export default Trending