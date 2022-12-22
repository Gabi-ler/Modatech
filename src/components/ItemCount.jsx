import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ countStock, onAdd, button }) => {
    const [count, setCount] = useState(1);

    const contador = () => {
        if (count === countStock) {
            return
        }
        setCount(count + 1)
    }

    const discontador = () => {
        setCount(count - 1)
    }


    return (
        <div className='flex justify-center m-2 items-center flex-col'>
            <div className='flex items-center'>
                <button className='btn m-2 bg-red-400' disabled={count === 1} onClick={discontador} >-</button>
                <p>{count}</p>
                <button className='btn m-2 bg-red-400' onClick={contador}>+</button>
            </div>
            <div className='flex-col my-5'>
                    <button onClick={() => onAdd(count)} className='btn'>Añadir al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
