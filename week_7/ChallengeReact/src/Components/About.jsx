import React from 'react';

const About = () => {
    return (
        <> 
        <div className='w-full flex-col justify-center items-center '>
            <h2 className='text-center text-3xl text-black'>Build a Responsive Landing Page with React</h2>
            <p className='text-center'>A mini-project to practice building responsive landing pages using React components</p>
            <div className='w-full flex justify-center items-center'>
            <button className="bg-amber-700 text-white p-3 rounded-lg  hover:bg-amber-800 transition">
Get Started </button>
            </div>
        </div>
        </>
    );
}

export default About;
