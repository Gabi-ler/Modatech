import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Item.css'



const Item = ({ id, title, price, picture }) => {

    return (
        
            <div className='itemCard card shadow-md hover:scale-105 duration-200 cursor-pointer mx-2 my-2'>
                <img className='imagen w-64 h-72 rounded-xl' alt={title} src={picture}/>
                <h2>{title}</h2>
                <p className='font-bold'>${price}</p>
                <Link to={`/item/${id}`} className='underline'>Ver detalles</Link>
            </div>
    );
}

export default Item;
