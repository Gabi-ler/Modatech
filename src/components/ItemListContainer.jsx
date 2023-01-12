import React from 'react';
import ItemList from './ItemList';
import '../style/ItemListContainer.css'
import Carousel from './Carousel';

const ItemListContainer = ({ greeting }) => {

    return (
        <div>
            <div>
                <h1 className='bg-slate-100 shadow-xl text-zinc-900 italic hover:not-italic hover:line-through'>{greeting}</h1>
                <Carousel/>
                <div className='bg-slate-100 py-4 shadow-md'>
                    <ItemList />
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;
