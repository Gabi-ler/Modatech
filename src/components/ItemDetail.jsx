import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from '../Context/CartContext';
import '../style/ItemDetails.css'
import Swal from 'sweetalert2'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetail = () => {
    const [prod, setProd] = useState({});
    const [changeButton, setChangeButton] = useState(true)
    const { id } = useParams()

    //HOOK DE USECONTEXT
    const { addNewProduct } = useCartContext();

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, 'products', id)
        getDoc(docRef)
            .then(resp => {
                console.log(resp.data());
                setProd({ ...resp.data(), id: resp.id })
            });
    }, [id]);

    const onAdd = (cantidad) => {
        const newProduct = { ...prod, cantidad }
        addNewProduct(newProduct)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado exitosamente',
            showConfirmButton: false,
            timer: 1500
        })
        setChangeButton(false)
        console.log(cantidad);
    }

    return (
        <section className='container-page flex justify-center  bg-slate-100 shadow-2xl rounded-xl'>
            <div className='border-img shadow-md my-7 mr-7'>
                <img className='size-img' alt='' src={prod.picture} />
            </div>
            <div className='my-7 mx-7 w-1/3 flex flex-col '>
                {/* <h2>Detalles del producto: {id}</h2> */}
                <div className='my-3 items-start'>
                    <p className='text-3xl font-bold text-left ml-3'>{prod.title}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-3xl my-2 text-left ml-3'>${prod.price}</p>
                    
                    <h3 className='text-xl font-bold text-left ml-3'>Descripción</h3>
                    <p className='text-left ml-3'>{prod.description}</p>
                    <div className="rating my-4 ml-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" />
                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400 w-5" checked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400 w-5" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 w-5" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400 w-5" />
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='mt-8'>Ultimas <span>{prod.stock}</span> unidades!!</p>
                </div>
                {changeButton
                    ?
                    <ItemCount countStock={prod.stock} onAdd={onAdd} />
                    :
                    <Link to={'/'}>
                        <button className='btn btn-primary my-2.5'>Volver al catalogo</button>
                    </Link>
                }
            </div>
        </section>
    );
}

export default ItemDetail;
