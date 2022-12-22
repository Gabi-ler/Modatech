import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCart = (onAdd, count) => {
    
    const [changeButton, setChangeButton] = useState(true)

    const button = () => {
        setChangeButton(false)
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    return (
        <div>
            {
                changeButton
                ?
                <button 
                    onClick={button}
                    className='btn btn-success my-2.5 mx-2'
                >
                    Agregar al carrito
                </button>
                :
                <Link to={'/carrito'}>
                    <button className='btn btn-primary my-2.5'>Volver al catalogo</button>
                </Link>
            }
        </div>
    );
}

export default AddCart;
