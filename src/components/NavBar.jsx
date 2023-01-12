import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import '../style/NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {

    return (
        <div>
            <div className="barra bg-base-100">
                <div className="">
                    <Link to='/' className="btn btn-ghost shadow-xl normal-case text-xl italic logo">CBATECH</Link>
                </div>
                <div className='categories'>
                    <ul>
                        <Link to={'/'}>
                            <li className='btn-ghost btn-circle cursor-pointer'>Home</li>
                        </Link>
                        <Link to={'/category/fundas'}>
                            <li className='btn-ghost btn-circle cursor-pointer dropdown dropdown-end'>Fundas</li>
                        </Link>
                        <Link to={'/category/tecnologia'}>
                            <li className='btn-ghost btn-circle cursor-pointer'>Tecnologia</li>
                        </Link>
                        <Link to={'/'}>
                            <li className='btn-ghost btn-circle cursor-pointer'>Nosotros</li>
                        </Link>
                    </ul>
                </div>
                <div className="cart mr-3">
                    <CartWidget />
                    <div className="dropdown dropdown-end">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
