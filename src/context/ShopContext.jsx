import { createContext, useContext, useState } from "react"
import { ProductContext } from './ProductContext';

export const ShopContext = createContext(null); 


export const ShopContextProvider = (props) => {
    const { products } = useContext(ProductContext);
    console.log(products); 
    let cart = {}
    products.forEach(element => {
        let id1 = element.id;
        cart[id1] = 0; 
    });

    const [cartItems, setCartItems] = useState(cart)
    console.log(cartItems)

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