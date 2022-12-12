import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddCart from '../components/addCart';
import ItemCount from '../components/ItemCount';
import { productos } from '../Data/Products';
import '../style/ItemDetails.css'

// const ITEM = { id: 4, title: 'Fundas glitter', description: 'Funda antishok Moto e6', price: 2800, stock: 7 , picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs' }

const ItemDetail = () => {
    const [prod, setProd] = useState({});
    const {id} = useParams()
    
    useEffect(() => {
        getItemDetail().then((resp) => {
            // console.log(resp);
            setProd(resp) 
        })
    }, [id]);

    const getItemDetail = () => {
        return new Promise((resolve, reject) => {
            const prod = productos.find(product => product.id === Number(id))
            setTimeout(() => {
                resolve(prod)                                         
            }, 500);
        })
    }
    return (
        <section className='container-page flex justify-around items-center my-7 bg-slate-100 shadow-2xl rounded-xl'>
            <div className='border-img shadow-md'>
                <img className='size-img' alt='' src={prod.picture}/>
            </div>
            <div>
                <h2>Detalles del producto: {id}</h2>
                <p className='text-xl font-bold'>{prod.title}</p>
                <p className='text-3xl'>${prod.price}</p>
                <p>Stock: <span>{prod.stock}</span></p>
                <ItemCount countStock={prod.stock}></ItemCount>
                <AddCart/>
            </div>
        </section>
    );
}

export default ItemDetail;
