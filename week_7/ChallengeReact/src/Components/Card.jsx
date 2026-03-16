import React from 'react';

const Card = (props) => {
    return (
        <div key={props.index} className='flex-col justify-center items-center bg-white p-4 shadow-2xl'>
            <div className='flex justify-center items-center'>{props.card.icon}</div>
            <h1 className='flex justify-center items-center text-3xl text-black'>{props.card.title}</h1>
            <p className='flex justify-center items-center text-center'>{props.card.description}</p>
        </div>
    );
}

export default Card;