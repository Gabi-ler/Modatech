import React, {useState} from 'react';

const ItemCount = ({countStock}) => {
    const[count, setCount] = useState(0);

    const contador = () => {
        if(count === countStock) {
            return
        }
        setCount (count + 1)
    }

    const discontador = () => {
        setCount (count - 1)
    }

    return (
        <div className='flex justify-center m-2 items-center'>
            <button className='btn m-2 bg-red-400' disabled={count === 0} onClick={discontador} >-</button>
            <p>{count}</p>
            <button className='btn m-2 bg-red-400' onClick={contador}>+</button>
        </div>
    );
}

export default ItemCount;
