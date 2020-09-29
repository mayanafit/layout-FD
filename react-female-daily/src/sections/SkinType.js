import React from 'react';
import { Row, Col } from 'reactstrap';
import { ProductCard } from '../libraries';
import bedak from '../assets/products/bedak.jpg';

const SkinType = () => {
    return (
        <section className="skin">
            <div className="container">
                <div className="flex flex-jc-fe">
                    <div className="skin_description">
                        <div className="flex flex-column flex-ai-fe">
                            <div>
                                <h3>Looking for products that are just simply perfect for you?</h3>
                                <p>here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</p>
                            </div>   
                            <button>See My Matches</button>   
                        </div>
                    </div>
                    <div className="skin_card">
                        <ProductCard name="bedak" rating="4.9" description="ini bedak ecetra ecetra ecetra" image={bedak} addon="Match Skin Type"/>
                    </div>
                    <div className="skin_card">
                        <ProductCard name="bedak" rating="4.9" description="ini bedak ecetra ecetra ecetra" image={bedak} addon="Match Skin Type"/>
                    </div>
                    <div className="skin_card">
                        <ProductCard name="bedak" rating="4.9" description="ini bedak ecetra ecetra ecetra" image={bedak} addon="Match Skin Type"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkinType