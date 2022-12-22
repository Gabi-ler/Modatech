import React, { createContext, useState, useContext } from 'react';

//con este creo un contexto
export const Contexto = createContext()

//aca estoy creando un hook de context
export const useCartContext = () => {
    const carritoContexto = useContext(Contexto)
    return carritoContexto
}

const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addNewProduct = (prod) => {
        const oldProducts = cart.find((currentProduct) => currentProduct.id === prod.id)

        if (!oldProducts) {
            const newCart = [...cart, prod]
            setCart(newCart)
        } else {
            const newCart = cart.map((currentProduct) => {
                if (currentProduct.id === prod.id) {
                    const newProduct = { ...currentProduct, cantidad: prod.cantidad + currentProduct.cantidad }
                    return newProduct
                } else {
                    return currentProduct
                }
            })
            setCart(newCart)
        }
    }

    console.log(cart);

    const deleteProduct = (id) => {
        const newCart = cart.filter((currentProduct) => currentProduct.id !== id)
        setCart(newCart)
    }

    const quantityProducts = () => {
        if (cart.length !== 0) {
            const quantityCart = cart.map(product => product.cantidad)
            return quantityCart.reduce((initial = 0, cantidad) => initial + cantidad)
        } else {
            return 0
        }
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <div>
            <Contexto.Provider value={{ cart, addNewProduct, deleteProduct, quantityProducts, emptyCart }}>
                {children}
            </Contexto.Provider>
        </div>
    );
}

export default CartContext;
