import React, { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../style/Navegador.css'

const Navegador = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <div className="">
                <Link to='/' className="btn btn-ghost shadow-xl normal-case text-xl italic logo">CBATECH</Link>
            </div>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}
export default Navegador;
