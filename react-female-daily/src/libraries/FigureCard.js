import React from 'react';
import {GrUserFemale, GrChat} from 'react-icons/gr';
import {AiOutlineUnorderedList} from 'react-icons/ai';

const FigureCard = () => {
    return (
        <div className="figure-card flex flex-column flex-ai-c">
            <img src="https://hallyumusic.com/wp-content/uploads/2019/11/MAMAMOO-Wheein-COVER.png" alt="public-figure" />
            <h3>Embrace the Curl</h3>
            <div className="figure-card_icon flex flex-jc-sb">
                <GrUserFemale />
                <GrChat />
                <AiOutlineUnorderedList />
            </div>
            <p>May our curls pop and never stop!</p>
        </div>
    )
}

export default FigureCard