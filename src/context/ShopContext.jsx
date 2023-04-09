import { createContext, useContext, useState, useEffect } from "react"
import { ProductContext } from './ProductContext';

export const ShopContext = createContext(null); 

export const ShopContextProvider = (props) => {
    const { products } = useContext(ProductContext);
    const [cartItems, setCartItems] = useState({});
    // localStorage.clear() 
    let data = JSON.parse(localStorage.getItem('cart'))
    console.log(data); 
    if(data == null) {
        data = {}
    }
    
    const addToCart = (itemId) => {
        if(cartItems[itemId] == null || cartItems[itemId] == undefined) {
            cartItems[itemId] = 0; 
        }
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const clearCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 0}))
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }



    const contextValue = { cartItems, addToCart, removeFromCart, clearCart }
    return (
        <ShopContext.Provider value={contextValue}> 
            {props.children}
        </ShopContext.Provider>
    )
}