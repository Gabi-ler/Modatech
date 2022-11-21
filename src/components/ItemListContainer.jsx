import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className='bg-slate-100 text-zinc-900 italic hover:not-italic hover:line-through'>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;
