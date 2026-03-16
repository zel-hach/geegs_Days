import React from 'react';
import { IoRocketSharp } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import Card from './Card';

const Cards = () => {
    const cards = [
        {
            icon : <IoRocketSharp className='text-5xl text-amber-700'/>,
            title : "Fast Performance",
            description:"Our landing page loads quickly and runs smoothly across all devices."
        },
          {
            icon : <FaBoltLightning className='text-5xl text-amber-300'/>,
            title : "Easy to Use",
            description:"Our landing page is simple and intuitive for users to navigate."
        },
          {
            icon : <FaMobileAlt className='text-5xl text-amber-700'/>,
            title : "Modern Design",
            description:"Our landing page features a clean,modern,and responsive design."
        }
    ]
    return (
        <div className='grid md:grid-cols-3 m-5 gap-3'>
            {
                cards.map((card,index)=>{
                return(<Card card={card} index={index}></Card>)
                })
            }
        </div>
    );
}

export default Cards;
