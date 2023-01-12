import React from 'react';
import { Link } from 'react-router-dom';

const CompletedPurchase = ({user, id}) => {
    return (
        <div className='h-96 flex flex-col items-center justify-center m-14'>
            <h1 className='text-2xl font-bold'>Muchas gracias por tu compra {user.name}!!!</h1>
            <p className='text-lg font-medium mt-3'>Te enviamos un mail a {user.email} con tu orden de compra ID: {id}. Esperamos que hayas tenido una agradable experiencia en CBATECH. ¡Hasta la próxima!</p>
            <Link to={'/'}>
                <button className='btn btn-primary my-8'>Volver al inicio</button>
            </Link>
        </div>
    );
}

export default CompletedPurchase;
