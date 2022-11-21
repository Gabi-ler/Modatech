import React from 'react';
import '../style/NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className='flex'>
            <div className="navbar bg-base-100 bar">
                <div className="flex-1">
                    <a href='*' className="btn btn-ghost normal-case text-xl italic logo">MODATECH</a>
                </div>
                <div className='justify-between categories'>
                    <ul>
                        <li className='btn-ghost btn-circle'><a href='*'>Home</a></li>
                        <li className='btn-ghost btn-circle dropdown dropdown-end'><a href='*'>Categorias</a></li>
                        <li className='btn-ghost btn-circle'><a href='*'>Contacto</a></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <CartWidget />
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
