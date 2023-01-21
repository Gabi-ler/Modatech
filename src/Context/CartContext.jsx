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
        // saveCart()
    }

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

    const totalPrice = () => {
        let total = 0;
        cart.forEach(product => {
            const totalProduct = product.price * product.cantidad;
            total += totalProduct;
        });
        return total;
    }
    
    return (
        <div>
            <Contexto.Provider value={{ cart, addNewProduct, deleteProduct, quantityProducts, emptyCart, totalPrice }}>
                {children}
            </Contexto.Provider>
        </div>
    );
}

export default CartContext;
