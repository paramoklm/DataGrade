import React from 'react';

import Arc from "./../components/Arc"
import Calculator from '../components/Home/Calculator';

const Home = () => {
    return (
        <div className='w-screen h-screen bg-gray-600'>
            <Arc/>
            <Calculator/>
        </div>
    );
};

export default Home;