import { createContext } from "react"
import { db } from "../Firebase";
import { useEffect, useState } from "react";
import { getDocs, collection, } from "firebase/firestore";


export const ProductContext = createContext(null)

export const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const userCollectionRef = collection(db, "products");

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(userCollectionRef);
            setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getProducts();
    }, []);

    // console.log(products)

    const contextValue = { products }

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}