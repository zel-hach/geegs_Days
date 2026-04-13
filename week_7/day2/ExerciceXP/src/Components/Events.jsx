import React, { useState } from 'react';

const Events = () => {
    const [isToggleOn,setIsToggleOn] = useState(true)

    const clickMe = () =>{
        e.stopPropagation();
        alert("I was clicked");
    }

    const handleKeyDown = (e) =>{
        e.stopPropagation();
        if(e.code === 'Enter')
        {
            alert(`The Enter key was pressed, your input is: ${e.target.value}`);
            e.target.value = '';

        }
    }

    const OnToOff = (e) =>{
        if(isToggleOn)
            setIsToggleOn(false);
        else
            setIsToggleOn(true);
    }

    return (
        <div className=''> 
            <div className='m-2'>
                <button onClick={clickMe} className='bg-white p-1 rounded-md'>click me</button>
            </div>
            <div className='m-2'>
            <input type="text"  onKeyDown={handleKeyDown} placeholder='press the ENTER key!' className='bg-white rounded-md p-1'/>
            </div>
            <div>
            { isToggleOn ?
                <button onClick={OnToOff} className='bg-white rounded-md py-1 px-3'>ON</button>:
                <button onClick={OnToOff} className='bg-white rounded-md py-1 px-3'>OFF</button>
            }
            </div>
        </div>
    );
}

export default Events;
