import "../styles/fonts.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";



function Search() {
  const a = useContext(ProductContext).products
  
  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">
          Our Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {a?.map((product, ind) => {
            return (
              <div className="p-2 group relative shadow-sm bg-white pt-4 rounded-t-xl">
                <div
                  key={ind}
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

