import React from 'react';
import Calculator from "./../assets/calculator-g712ba535e_1280.png"

const Home = () => {
    return (
        <div className='w-screen h-screen bg-gray-600'>
            <div className='w-3/5 h-4/5 bottom-0 rounded-bl-lg rounded-full absolute bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'></div>
            <img className="relative w-1/4 h-3/5 left-1/4 top-1/3 rotate-[14.57deg]" src={Calculator} alt="calculator"/>
        </div>
    );
};

export default Home;