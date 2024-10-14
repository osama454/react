// components/CartContext.js
import React, { createContext, useState, useContext } from "react";
import swal from "sweetalert";


const CartContext = createContext();


export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem('cart');
        return localCart === null ? [] : JSON.parse(localCart);
    });

    const addToCart = (item, e) => {
        e.preventDefault();
        setCart(prevCart => {
            const updatedCart = [...prevCart, item];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
        swal('Sucesso', 'Item Adicionado com Sucesso', 'success');
    };

    const removeFromCart = (item, e) => {
        e.preventDefault();
        setCart(prevCart => {
            const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
        swal('Sucesso', 'Item Removido com Sucesso', 'success');
    };

    const sendRequestToWhatsApp = (e) => {
        e.preventDefault()
        let whatsapp = `https://api.whatsapp.com/send?phone=554730567718&text=Ol%C3%A1,%20tenho%20interesse%20nos%20produtos:%0a`
        let productsToSend = []
        cart.forEach((item) => {
            productsToSend.push(encodeURI(item.name))
        })

        productsToSend.forEach((item) => {
            let productMessage = '*' + item + '*' + '%0a';
            whatsapp += productMessage
        })

        window.location.replace(whatsapp)

        localStorage.clear('cart')
        setCart([]);
    }

    const value = {
        cart,
        addToCart,
        removeFromCart,
        sendRequestToWhatsApp
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};