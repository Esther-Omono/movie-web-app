import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import Search from '../Search/Search';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbarLogo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbarSearch">
                <Search />
            </div>
        </nav>
    );
};

export default Navbar