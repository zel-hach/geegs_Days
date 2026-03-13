import React from 'react';

const UserFavoriteAnimals = (props) => {
    return (
        <ul>
            {
                props.favAnimals.map((animal,index)=>{
                   return (<li key={index}>{animal}</li>)
                })
            }
        </ul>
    );
}

export default UserFavoriteAnimals;
