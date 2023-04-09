import { createContext, useContext, useState } from "react"
import { ProductContext } from './ProductContext';

export const ShopContext = createContext(null); 


export const ShopContextProvider = (props) => {
    const product = useContext(ProductContext);
    const getDefaultCart = () => {
        let cart = {}
        for(let i = 1; i < product.length + 1; i++) {
            cart[i] = 0; 
        }
        return cart
    }

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = { cartItems, addToCart, removeFromCart }
    return (
        <ShopContext.Provider value={contextValue}> 
            {props.children}
        </ShopContext.Provider>
    )
}