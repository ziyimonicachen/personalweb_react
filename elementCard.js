import React from 'react';
import './elementCard.css';

const ElementCard = ({elementData}) => {
    return(
        <div class='card'>
            <h2>{elementData.header}</h2>
            <p>{elementData.text}</p>
        </div>
    );
}

export default ElementCard;