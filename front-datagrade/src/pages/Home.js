import React from 'react';
import Calculator from "./../assets/calculator-g712ba535e_1280.png"

const Home = () => {
    return (
        <div className='w-screen h-screen bg-gray-600'>
            <img className="relative h-3/5 left-1/4 top-1/3 absolute rotate-[14.57deg]" src={Calculator} alt="calculator"/>
        </div>
    );
};

export default Home;