import { createContext, useContext, useState, useEffect } from "react"
import { ProductContext } from './ProductContext';

export const ShopContext = createContext(null); 

export const ShopContextProvider = (props) => {
    const { products } = useContext(ProductContext);
    // localStorage.clear() 
    let data = JSON.parse(localStorage.getItem('cart'))
    // let data = null
    console.log(data); 
    if(data == null) {
        data = {}
        for (let i = 1; i < products.length + 1; i++) {
            let id1 = products[i-1].id;
            data[id1] = 0; 
        }
        setCartItems(data);
    }
    const [cartItems, setCartItems] = useState({...data});
    
    const addToCart = (itemId) => {
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