import React from 'react';
import logo from '../assets/img/logo.svg'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header id='header' className='bg-white'>
            <div className="container  py-4 px-8 flex items-center justify-between">
                <div>
                    <img src={logo} alt=""/>
                </div>

                <nav className='mr-10'>
                    <NavLink className='mx-4' to='/'>Menu</NavLink>
                    <NavLink className='mx-4' to='/orders'>Orders</NavLink>
                    <NavLink className='mx-4' to='/admin'>Admin</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;