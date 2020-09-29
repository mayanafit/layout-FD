import React, { useEffect } from 'react';
import { Title, ProductCard } from '../libraries';
import { Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPI } from '../store/action';
const EditorChoices = () => {
    const dispatch = useDispatch()
    const { choices } = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchAPI())
    },[dispatch])
    return (
        <section className="editor container">
            <Title title="Editor's Choice" subtitle="Curated with love"/>
            <Row style={{marginTop: '1em'}}>
                    {
                        choices && choices.map((choice, index) => 
                            <Col key={index} sm="12" md="2" className="editor_card">
                                <div className="editor_figure flex flex-jc-c flex-ai-fe">
                                    <div className="figure_image">
                                        <img src="https://hallyumusic.com/wp-content/uploads/2019/11/MAMAMOO-Wheein-COVER.png" alt="public-figure" />
                                    </div>
                                    <div className="figure_name">
                                        <h4>{choice.editor}</h4>
                                        <p>{choice.role}</p>
                                    </div>
                                </div>
                                <ProductCard name={choice.product.name} rating={choice.product.rating} description={choice.product.description} image={choice.product.image} />
                            </Col> 
                        )
                    }
            </Row>
        </section>
    )
}

export default EditorChoices