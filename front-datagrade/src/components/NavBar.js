import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";
    return (
        <div className='w-full bg-gray-500 top-0 h-12 absolute border-slate-400 border-4 flex'>
            <ul className='w-1/12 right-0 ml-auto'>
                <NavLink to={isAboutPage ? "/" : "/about"} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='text-2xl font-bold italic'>{isAboutPage? "Home" : "About"}</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default NavBar;