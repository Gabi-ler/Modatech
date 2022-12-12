import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {

    return (
        <div className='bg-slate-100 py-4 shadow-md'>
            <h1 className='bg-slate-100 shadow-xl text-zinc-900 italic hover:not-italic hover:line-through'>{greeting}</h1>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;
