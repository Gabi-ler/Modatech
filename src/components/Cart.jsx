import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from './ItemCart';


const Cart = () => {
    const { cart, emptyCart } = useCartContext()

    
    return (
        <div className='bg-slate-200 shadow-2xl rounded-md my-5 mx-2  '>
            <h1 className='pt-5 text-3xl '>Carrito</h1>
            <div>
                {   cart.length !== 0
                    ?
                    cart.map(prod =>                    
                    (
                        <>
                        <ItemCart key={prod.id} {...prod}/>
                        </>
                    )
                    )
                    :
                    <>
                    <h2>No hay productos</h2>
                    <Link to='/' className='btn my-3'>Volver a productos</Link>
                    </>
                }
            </div>
            <div className='flex justify-end mr-5'>
                {cart.length >= 1
                &&
                <button className='btn my-5 btn-warning ' onClick={() => emptyCart()}>Vaciar carrito</button>
                }
            </div>
        </div>
    );
}

export default Cart;
