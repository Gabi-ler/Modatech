import React, { useEffect, useState } from 'react';

const ClickChange = () => {

    const [loading , setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            console.log('cargand0..');
            setLoading(false)
        }, 1500);
    }, []);
    
        console.log(loading);
    return (
        <div>
            {
                loading
                ?
            <strong className='text-3xl mx-2'>Cargando...</strong>
                :
            <strong className='text-3xl mx-2'>Listo!!</strong>
            }
        </div>
    );
}

export default ClickChange;
