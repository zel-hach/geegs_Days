import React, { useState } from 'react';
import Garage from './Garage';

const Car = ({ CarInfo }) => {
  const [color ,setColor] = useState('blue')
  return (
    <> 
    <p>
      The name of this car is {CarInfo?.name} and the model is {color} {CarInfo?.model}
    </p>
    <Garage size="small"></Garage>
    </>
  );
};

export default Car;