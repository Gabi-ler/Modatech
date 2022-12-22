import React from 'react';
import '../style/Footer.css'
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer flex flex-col items-center p
        y-5'>
        <div className='social-icons text-white'>
            <div><BsInstagram/></div>
            <div><BsFacebook/></div>
            <div><BsWhatsapp/></div>
        </div>
        <div className='mb-5 font-bold text-white'>
            <p>Copyright © 2022 - Todos los derechos reservados </p>
        </div>
        </div>
    );
}

export default Footer;
