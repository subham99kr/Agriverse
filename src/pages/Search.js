import React from "react";
import "../styles/fonts.css";

import { db } from "../Firebase";
import { useEffect, useState } from "react";
import { getDocs, collection,} from "firebase/firestore";
import { Link } from "react-router-dom";

function Search() {
  const [products, setProducts] = useState([]);
  const userCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(userCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);
  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">
          Our Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => {
            return (
              <div className="p-2 group relative shadow-sm bg-white pt-4 rounded-t-xl">
                <div
                  key={product.id}
                  className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <Link to={`/search/${product.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  <p className="pt-4 font-montserrat text-lg">{product.imageAlt}</p>
                  <p>
                    <strong>PRICE : {'\u20A8 '}{product.price}</strong>
                  </p>
                </Link>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Search;

