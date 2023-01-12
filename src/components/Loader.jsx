import React from 'react';
import '../style/Loader.css'
import { Circles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex items-center justify-center load'>
            <Circles
                height="80"
                width="80"
                color="darkcyan"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}

export default Loader;
