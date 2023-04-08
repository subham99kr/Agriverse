import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState([])

    const fetchNewsData = () => {
      fetch("https://newsapi.org/v2/everything?q=farming&apiKey=44e360c0bde04554babddb45a1506026")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setNews(data)
        })
    }

    useEffect(() => {
      fetchNewsData()
    }, [])

    // console.log(news.articles.at(1).author)
    let newsArticles = news.articles

    newsArticles = newsArticles?.filter(function(items) {
        let keys = Object.keys(items)
        let isEmpty = true
        keys.forEach(function(item) {
            if(items[item] === null) isEmpty = false
        })
        return isEmpty
    })

    return (
      <div className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">News and updates</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {newsArticles?.map((product) => {return(
              <div className="group relative shadow-sm bg-white rounded-t-xl">
                <div key={product.id} className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.urlToImage}
                    alt={product.publishedAt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="px-1 mt-2 flex justify-between text-center">
                    <div className="text-gray-700">
                      <a href={product.url} target='_blank'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.description}
                      </a>
                    </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    )
            }
export default News; 