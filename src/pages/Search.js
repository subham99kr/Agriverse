import React from 'react'


let products = [

  {
    id: 1,
    name: 'Nagpuri Oranges',
    href: '#',
    imageSrc: 'https://images.slurrp.com/prod/articles/pue8orx8te.webp',
    imageAlt: "Best Oranges in India",
    price: 'INR 120/KG ',
  },
  {
    id: 2,
    name: 'Kashmiri Apples',
    href: '#',
    imageSrc: 'https://images.news18.com/ibnlive/uploads/2021/11/apple-1-16361875623x2.jpg?impolicy=website&width=510&height=356',
    imageAlt: "Best Apples in India",
    price: 'INR 80/KG',

  },
]
for(let i = 0; i < 6; i++) {
  products.push(...products)
}

function Search() {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">Our Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => {return(
              <div  className="group relative">
                <div key={product.id} className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
  )
}

export default Search; 