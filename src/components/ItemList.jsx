import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productos } from '../Data/Products';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const ItemList = () => {

    const [products, setProducts] = useState([]);
    const { idCategories } = useParams()
    
    //aca aplico el useeffect para renderizar este componente una sola vez
    useEffect(() => {
        if (idCategories) {
            getProduct().then((resp) => {
                setProducts(resp.filter(prod => prod.categories === idCategories))
            }).catch((error) => {
                console.log(error);
                // setProducts(error)
            })
        } else {
            getProduct().then((resp) => {
                console.log(resp);
                setProducts(resp)
            }).catch((error) => {
                console.log(error);
                // setProducts(error)
            })
        }

        return () => setProducts([])
    }, [idCategories]);

    //aca aplico una funcion donde voy a desplegar la petision asi puedo llamarla en el useffect
    //el set time out solamente para poder simular una tardanza de la peticion
    const getProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
                // reject(`<h1>no se encontraron resultados</h1>`)
            }, 1500);
        })
    }

    return (
        <div>
            <h1 className='my-4'>Lista de productos</h1>
            <div className='flex justify-evenly my-5 mx-2 py-3 flex-wrap'>
                {products.length
                    ?
                products.map((prod) => <Item
                    key={prod.id}
                    // title={prod.title}
                    // description={prod.description}
                    // price={prod.price}
                    // picture={prod.picture}
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
