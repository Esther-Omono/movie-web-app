import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="socialIcons">
                <Link href="#"><BsFacebook /></Link>
                <Link href="#"><BiLogoInstagramAlt /></Link>
                <Link href="#"><AiFillTwitterCircle /></Link>
                <Link href="#"><FaYoutube /></Link>
            </div> 

            <div className="footerLinks">
                <Link href="#">Conditions of Use</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Press Room</Link>
            </div>

            <div className="copyright">
                <p>&copy; 2023 MovieBox by Esther Omono Atakere</p>
            </div>           
        </div>
    )
}

export default Footer;