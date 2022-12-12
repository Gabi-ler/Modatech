import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddCart from '../components/addCart';
import ItemCount from '../components/ItemCount';
import { productos } from '../Data/Products';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    
    return (
        <div>
            <ItemDetail/>
        </div>
    );
}

export default ItemDetailContainer;
