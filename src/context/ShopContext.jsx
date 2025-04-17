import { createContext, useContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../Firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const auth = getAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            const user = auth.currentUser;
            if (user) {
                clearInterval(interval);
                const fetchCart = async () => {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDocSnap = await getDoc(userDocRef);

                    if (userDocSnap.exists()) {
                        const data = userDocSnap.data();
                        const cartArray = data.cart || [];

                        const cartObj = {};
                        for (const item of cartArray) {
                            const productId = item.product.id;
                            cartObj[productId] = item.quantity;
                        }

                        setCartItems(cartObj);
                    }
                };
                fetchCart();
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const addToCart = async (itemId) => {
        const user = auth.currentUser;
        if (!user) return;

        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        let cart = [];

        if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            cart = data.cart || [];
        }

        let updated = false;
        const updatedCart = cart.map((item) => {
            if (item.product.id === itemId) {
                updated = true;
                return {
                    product: item.product,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });

        if (!updated) {
            updatedCart.push({
                product: doc(db, "products", itemId),
                quantity: 1
            });
        }

        // Update Firestore
        await updateDoc(userDocRef, { cart: updatedCart });

        // Update local state
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = async (itemId) => {
        const user = auth.currentUser;
        if (!user) return;

        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        let cart = [];

        if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            cart = data.cart || [];
        }

        const updatedCart = cart.map((item) => {
            if (item.product.id === itemId && item.quantity > 1) {
                return {
                    product: item.product,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });

        // If quantity is 1, remove the item from the cart entirely
        const finalCart = updatedCart.filter(item => item.product.id !== itemId);

        // Update Firestore
        await updateDoc(userDocRef, { cart: finalCart });

        // Update local state
        setCartItems(prev => {
            const newCart = { ...prev };
            if (prev[itemId] > 1) {
                newCart[itemId] = prev[itemId] - 1;
            } else {
                delete newCart[itemId]; // Remove item from local state when quantity is 0
            }
            return newCart;
        });
    };

    const clearCart = async (itemId) => {
        const user = auth.currentUser;
        if (!user) return;

        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            const cart = data.cart || [];

            // Remove the item from the cart based on productId
            const updatedCart = cart.filter(item => item.product.id !== itemId);

            // Update Firestore with the updated cart
            await updateDoc(userDocRef, { cart: updatedCart });

            // Update local state
            setCartItems(prev => {
                const newCart = { ...prev };
                delete newCart[itemId]; // Remove the item from local state
                return newCart;
            });
        }
    };

    const contextValue = { cartItems, addToCart, removeFromCart, clearCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
