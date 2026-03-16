import React from 'react';
import { IoRocketSharp } from 'react-icons/io5';

const Header = () => {
    return (
        <div className='flex justify-evenly items-center w-full mb-10' >
            <div className='flex justify-center items-center'>
                <IoRocketSharp  className='text-amber-600 text-5xl'/>
                <h1>Company</h1>
            </div>
            <ul className='flex items-center justify-between gap-10'>
                <li>Home</li>
                <li>Features</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Header;
