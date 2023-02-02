import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import CompletedPurchase from './CompletedPurchase';

const CheckOut = () => {
    const { cart, totalPrice, quantityProducts } = useCartContext()
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [user, setUser] = useState({});
    const [purchaseId, setPurchaseId] = useState(null);

    const nameRef = useRef()
    const surnameRef = useRef()
    const emailRef = useRef()
    const cardNumberRef = useRef()
    const cardMonthsExpRef = useRef()
    const cardYearExpRef = useRef()
    const ccvRef = useRef()

    const makeOrder = (event) => {
        event.preventDefault()
        const user = {
            name: nameRef.current.value, 
            surname: surnameRef.current.value,
            email: emailRef.current.value,
            cardNumber: cardNumberRef.current.value,
            cardMonthsExp: cardMonthsExpRef.current.value,
            cardYearExp: cardYearExpRef.current.value,
            ccvRef: ccvRef.current.value,
        }
                    
        const order = {
            buyer: user,
            products: cart,
            total: totalPrice()
        }
        console.log('levantando la order', order)
        setUser(user);
        saveOrder(order)    
    }
    
    const saveOrder = async (order) => { 
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        const {id} = await addDoc(orderCollection, order)
        console.log('Nueva orden: ', id)
        setPurchaseId(id)
        Swal.fire({
            position: 'center',
            icon: 'success',
            // title: `Te enviamos un mail con tu orden de compra id: ${id}`,
            title: 'Te enviamos un mail con tu orden de compra id: ' + id,
            showConfirmButton: false,
            timer: 1500
        })
        setOrderCompleted(true)
    }
    //intentando deshabilitar el formulario
    const [buttonValidate, setbuttonValidate] = useState(!false);
    const validatePurchase = () => { 
        if (cardNumberRef.length >= 16) {
            setbuttonValidate(true)
        } else {
            setbuttonValidate(false)
        }
        // if (emailRef.includes('@')) {
        //     setbuttonValidate(true)
        // }else {
        //     setbuttonValidate(false)
        // }
    }
    
    

    return (
        <>
        {orderCompleted 
        ?
        <CompletedPurchase user={user} id={purchaseId} />
        :
        <div className='bg-slate-300 flex justify-around'>
            <div className=' w-80 h-40 my-8'>
                <div className='flex justify-between py-7 bg-white rounded-xl'>
                    <div className='text-left ml-2'>
                        <p>Cantidad de items:  </p>
                        <p>Gastos de envio: </p>
                        <p className='mt-4 font-bold'>Total:</p>
                    </div>
                    <div className='text-right mr-2'>
                        <p>{quantityProducts()}</p>
                        <p>¡Envio gratis!</p>
                        <p className='mt-4 font-bold'>${totalPrice()}</p>
                    </div>
                </div>
                <div className='border border-black flex items-center gap-2 my-5 rounded-xl btn'>
                    <div className='ml-3'>
                        <Link to={'/carrito'}><BsFillArrowLeftCircleFill className='text-lg'/></Link>
                    </div>
                    <div>
                        <Link to={'/carrito'}><p>volver al carrito</p></Link>
                    </div>                  
                </div>
            </div>
            <div className='flex justify-center '>
                <form onSubmit={makeOrder} className="w-full max-w-lg my-8 p-5 rounded-xl bg-white shadow-md">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nombre
                            </label>
                            <input ref={nameRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" required/>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Apellido
                            </label>
                            <input ref={surnameRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                            </label>
                            <input ref={emailRef} onChange={validatePurchase} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="alguien@gmail.com" required/>
                        </div>
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Numero de tarjeta
                            </label>
                            <input ref={cardNumberRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="*Digite los 16 números de su tarjeta" required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                Expira/Mes
                            </label>
                            <div className="relative">
                                <select ref={cardMonthsExpRef} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Año
                            </label>
                            <input ref={cardYearExpRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="año" type="number" placeholder="2023" required />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                CCV
                            </label>
                            <input ref={ccvRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="password" placeholder="902" required/>
                        </div>
                    </div>
                    <button type='submit' onClick={makeOrder} className='w-full btn my-2'
                    //  disabled={buttonValidate === false}
                    >Terminar compra</button>
                </form>
            </div>
        </div>
        }</>
    );
}

export default CheckOut;
