import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../style/NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const hideNavbar =()=>{
        navRef.current.classList.remove("responsive_nav")
      }

    return (
            <div className="barra bg-base-100">
                <div className="">
                    <Link to='/' className="btn btn-ghost shadow-xl normal-case text-xl italic logo">CBATECH</Link>
                </div>
                <div ref={navRef} className='categories'>
                    <ul>
                        <Link to={'/'} onClick={hideNavbar}>
                            <li className='btn-ghost btn-circle cursor-pointer'>Home</li>
                        </Link>
                        <Link to={'/category/fundas'} onClick={hideNavbar}>
                            <li className='btn-ghost btn-circle cursor-pointer dropdown dropdown-end'>Fundas</li>
                        </Link>
                        <Link to={'/category/tecnologia'} onClick={hideNavbar}>
                            <li className='btn-ghost btn-circle cursor-pointer'>Tecnologia</li>
                        </Link>
                        <Link to={'/'} onClick={hideNavbar}>
                            <li className='btn-ghost btn-circle cursor-pointer'>Nosotros</li>
                        </Link>
                    </ul>
                    <div onClick={showNavbar} className='burguer text-2xl p-2'>
                        <AiOutlineClose className='btn-clouse'/>
                    </div>
                </div>
                <div className="cart mr-3">
                    <div>
                        <CartWidget />
                    </div>
                    {/* <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt=''/>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a href='*' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='*'>Settings</a></li>
                            <li><a href='*'>Logout</a></li>
                        </ul>
                    </div> */}
                    <div onClick={showNavbar} className='burguer text-3xl p-2'>
                        <AiOutlineMenu className='mr-3' />
                    </div>
                </div>
            </div>
    );
}

export default NavBar;
