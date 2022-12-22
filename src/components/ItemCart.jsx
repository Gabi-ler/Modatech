import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useCartContext } from '../Context/CartContext';
import '../style/Itemcart.css'

const ItemCart = ({title, description, price, picture, id, cantidad, stock}) => {
    const { deleteProduct} = useCartContext()
    

    return (
        <div className='flex justify-around my-4 mb-5 border-solid border-black'>
            <div className='w-32 mb-5'>
                <img alt={title} src={picture}/>
            </div>
            <div>
                <h2 className='text-xl'>{title}</h2>
                <p>{description}</p>
                <p>Stock disponible: {stock}</p>
            </div>
            <div>
                <p>${price * cantidad}</p>
                <p>Cantidad acumalada: {cantidad}</p>
            </div>
            <RiDeleteBin5Line className='icon-delete' onClick={() => deleteProduct(id)}/>
            
        </div>
    );
}

export default ItemCart;
