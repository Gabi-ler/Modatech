import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import AddCart from '../components/addCart';
import ItemCount from '../components/ItemCount';
import { useCartContext } from '../Context/CartContext';
import { productos } from '../Data/Products';
import '../style/ItemDetails.css'
import Swal from 'sweetalert2'

// const ITEM = { id: 4, title: 'Fundas glitter', description: 'Funda antishok Moto e6', price: 2800, stock: 7 , picture: 'https://drive.google.com/uc?export=view&id=1T-BXOOMk4-5HepdlNTLxu_At2LWJLIRs' }

const ItemDetail = () => {
    const [prod, setProd] = useState({});
    const [changeButton, setChangeButton] = useState(true)
    const {id} = useParams()
    
    //HOOK DE USECONTEXT
    const {addNewProduct} = useCartContext();
    
    
    useEffect(() => {
        getItemDetail().then((resp) => {
            // console.log(resp);
            setProd(resp) 
        })
    }, [id]);
    
    const getItemDetail = () => {
        return new Promise((resolve, _reject) => {
            const prod = productos.find(product => product.id === Number(id))
            setTimeout(() => {
                resolve(prod)                                         
            }, 500);
        })
    }
    

    const onAdd = (cantidad) => {
        const newProduct = {...prod, cantidad}
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
        <section className='container-page flex justify-around items-center my-7 bg-slate-100 shadow-2xl rounded-xl'>
            <div className='border-img shadow-md'>
                <img className='size-img' alt='' src={prod.picture}/>
            </div>
            <div>
                <h2>Detalles del producto: {id}</h2>
                <p className='text-xl font-bold'>{prod.title}</p>
                <p className='text-3xl'>${prod.price}</p>
                <p>Stock: <span>{prod.stock}</span></p>
                {changeButton
                ?
                <ItemCount countStock={prod.stock} onAdd={onAdd}/>
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
