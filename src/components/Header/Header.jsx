import React from 'react';
import './header.css'
import Search from '../Search/Search';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <> 
            <div className='banner'>
                <div className='bannerTop'>
                    <div className='logoContainer'>
                        <img src={logo} className='bannerImage' alt='logo'/>
                        <span>Movie Box</span>
                    </div>
                    <Search />
                </div>
                
            </div>
        </>
    )
}

export default Header;