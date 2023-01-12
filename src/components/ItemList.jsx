import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemList = () => {

    const [products, setProducts] = useState([]);
    const { idCategories } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const collectionRef = collection(db, 'products')
        if (idCategories) {
            const queryfilter = query(collectionRef, where('categories', '==', idCategories))
            getDocs(queryfilter)
                .then(resp => setProducts((resp.docs.map(product => ({ id: product.id, ...product.data()}) ))))               
        } else {
            getDocs(collectionRef)
                .then(resp => setProducts((resp.docs.map(product => ({ ...product.data(), id: product.id, })))))
        }

        return () => setProducts([])
    }, [idCategories]);

    return (
        <div>
            <h1 className='my-4'>Lista de productos</h1>
            <div className='flex justify-evenly my-5 mx-2 py-3 flex-wrap'>
                {products.length
                    ?
                    products.map((prod) => <Item
                    key={prod.id}
                    {...prod}
                /> ) 
                : 
                <Loader/>
                }
            </div>
        </div>
    );
}

export default ItemList;
