import React from 'react';
import { Circles } from 'react-loader-spinner';
const Loader = () => {
    return (
        <div>
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
