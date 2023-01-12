import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useCartContext } from '../Context/CartContext';
import '../style/Itemcart.css'

const ItemCart = ({title, price, picture, id, cantidad, stock}) => {
    const { deleteProduct} = useCartContext()
    

    return (
        <div className='flex justify-around items-center my-4 mb-5 border border-black'>
            <div className='w-36'>
                <img className='w-36 h-44 object-cover' alt={title} src={picture}/>
            </div>
            <div className='w-72'>
                <h2 className='text-xl'>{title}</h2>
                <p>Stock disponible: {stock}</p>
            </div>
            <div className=''>
                <p className='font-bold text-lg'>${price * cantidad}</p>
                <p>Cantidad acumulada: {cantidad}</p>
            </div>
            <div>
                <RiDeleteBin5Line className='icon-delete' onClick={() => deleteProduct(id)}/>
            </div>           
        </div>
    );
}

export default ItemCart;
