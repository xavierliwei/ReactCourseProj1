import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt='monster' src={`https://picsum.photos/id/${props.monster.id+230}/200`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);