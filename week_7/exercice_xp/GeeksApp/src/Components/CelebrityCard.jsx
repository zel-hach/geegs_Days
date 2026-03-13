import React from 'react';

const CelebrityCard = (props) => {

    return (
        <div className="w-full text-2xl text-blue-100 shadow rounded p-4 flex-col  justify-center items-center gap-10" key={props.key}>
            <img src={props.imageUrl} alt="" className="rounded" />
            <h2 className="text-xl font-bold">
                {props.title}
            </h2>
            <p className="text-gray-600 ">
                {props.description}
            </p>
            <a className="bg-blue-500 text-white px-4 py-2 rounded" href={props.buttonUrl}>
                {props.buttonLabel}
            </a>
        </div>
    );
}

export default CelebrityCard;
