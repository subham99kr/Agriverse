import React from "react";
import "../styles/fonts.css";
import { BsCartFill } from "react-icons/bs";
import { db } from "../Firebase";
import { useEffect, useState } from "react";
import { getDocs, collection,} from "firebase/firestore";



function Search() {
  const [products,setProducts]=useState([]);
  const userCollectionRef= collection(db,"products");

  useEffect(() => {

    const getProducts=async()=>{
      const data=await getDocs(userCollectionRef);
      setProducts(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    };

    getProducts();

  },[]);

  return (
  <div className="Search"> 
      {products.map((product) =>{
       return (
         <div>
           {" "}
           <p>
             <h1><img src={product.imageUrl}/></h1>
             <h1>description:{product.description}</h1>
             <h1>price:{product.imageAlt}</h1>
           </p>
         </div>
       );
      })}
      </div>
  );
}
export default Search;
