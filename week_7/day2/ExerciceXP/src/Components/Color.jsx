import React, { useEffect, useState } from 'react';

const Color = () => {
    const [favoriteColor,setFavoriteColor] =useState('red')
    useEffect(()=>{
        setFavoriteColor('yellow');
        alert('useEffect reached')
    },[])

    const changeColor = () =>{
        setFavoriteColor('blue');
    }
    return (
        <div>
            <h1>My Favorite color is {favoriteColor}</h1>
            <button onClick={changeColor} className='bg-white p-1 rounded-md'>change Color</button>
        </div>
    );
}

export default Color;
