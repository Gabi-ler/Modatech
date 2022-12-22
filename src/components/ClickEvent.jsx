import React from 'react';

const ClickEvent = () => {
    const clickHandler = (e) => {
        console.log(e)
        console.log('click');
    }

    const notVocals = (evn) => {
        console.log(evn.key);
        const vocal = ['a','e','i','o','u']
        if(vocal.includes(evn.key.toLowerCase())){
            evn.preventDefault()
        }
    }
 
    return (
        <div className='my-5'>
            <button className='btn' onClick={clickHandler}>Click Event</button> 
            <label className='mx-4'>Input</label>            
                <input onKeyDown={notVocals} className='p-2 text-xl border-4 border-sky-400' type='text' placeholder='no permito vocales'/>
        </div>
    );
}

export default ClickEvent;
