import React, { useState } from 'react';

const Phone = () => {
    const [phoneInfos,setPhoneInfo] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020,
    })
     const changeColor = () =>{
    setPhoneInfo({
        ...phoneInfos,
        color:'blue',
    })
  }
    return (
        <div>
            <h1>My phone is a {phoneInfos.brand}</h1>
            <p>it is a {phoneInfos.color} {phoneInfos.model} from {phoneInfos.year}</p>
            <button onClick={changeColor} className='bg-white p-1 rounded-md'>change Color</button>
        </div>
    );
}

export default Phone;
