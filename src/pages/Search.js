import React from "react";
import "../styles/fonts.css"
import { BsCartFill } from "react-icons/bs";

let products = [
  {
    id: 1,
    name: "Fertilizer1",

    imageSrc: "https://mobileimages.lowes.com/product/converted/021496/021496002644.jpg",
    price: "INR 120/KG ",
    imageAlt: "Best Oranges in India",
    href: "#",
  },
  {
    id: 2,
    name: "Fertilizer2",

    imageSrc:
      "https://drearth.com/wp-content/uploads/7PremiumGold_4LB_706p-1-1024x1024.jpg",
    price: "INR 80/KG",
    href: "#",
    imageAlt: "Best Apples in India",
  },
];
for (let i = 0; i < 2; i++) {
  products.push(...products);
}

function Search() {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">
          Our Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => {
            return (
              <div className="group relative shadow-sm bg-white pt-4 rounded-t-xl">
                <div
                  key={product.id}
                  className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">

                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                  <a className="p-1 text-center" href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    <p className="font-montserrat text-xl">{product.name}</p>
                  </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
