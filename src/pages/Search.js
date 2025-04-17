import "../styles/fonts.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { StarIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Search() {
  const a = useContext(ProductContext).products;

  const reviews = {
    average: 4,
    totalCount: 117
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">
          Our Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {a?.map((product, ind) => (
            <div key={ind} className="p-2 group relative shadow-sm bg-white pt-4 rounded-t-xl">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md flex items-center justify-center lg:aspect-none lg:h-80">
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            className="h-full w-full object-contain"
          />
        </div>


              <Link to={`/search/${product.id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                <div className="p-2 space-y-1">
                  {/* Name (one line with ellipsis + hover tooltip) */}
                  <p
                    className="font-montserrat text-lg font-semibold text-gray-900 truncate"
                    title={product.name}
                  >
                    {product.name}
                  </p>

                  {/* Price & Unit Size */}
                  <div className="flex justify-between text-sm text-gray-700">
                    <p><strong>Price:</strong> ₹{product.price}</p>
                    <p><strong>Unit:</strong> {product.unitSize}</p>
                  </div>

                  {/* Quantity */}
                  <p className="text-sm text-gray-700"><strong>Quantity:</strong> {product.quantity}</p>

                  {/* Status */}
                  <p className="text-sm text-gray-700"><strong>Status:</strong> {product.status}</p>

                  {/* Reviews */}
                  <div className="flex items-center mt-1">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-4 w-4 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({reviews.totalCount})</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
