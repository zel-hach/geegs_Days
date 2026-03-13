import React from 'react';

const Planets = () => {
    const planets = [
    "Mars",
    "Venus",
    "Jupiter",
    "Earth",
    "Saturn",
    "Neptune",
    ];
    return (
        <div>
            <h1>Planets</h1>
            <ul className="max-w-md mx-auto mt-6">
                {planets.map((planet,index)=>{
                    return <li className="border p-3 mb-2 rounded bg-gray-100" key={index}>{planet}</li>
                })}
            </ul>
        </div>
    );
}

export default Planets;
