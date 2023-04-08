import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchNewsData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=19b42d7ac21c409e88eba7763cdd0ed0"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data);
      });
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  // console.log(news.articles.at(1).author)
  let newsArticles = news.articles;

  newsArticles = newsArticles?.filter(function (items) {
    let keys = Object.keys(items);
    let isEmpty = true;
    keys.forEach(function (item) {
      if (items[item] == null) isEmpty = false;
    });
    return isEmpty;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">
          News and updates
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {newsArticles?.map((product) => {
            return (
              <div className="group relative">
                <div
                  key={product.id}
                  className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                >
                  <img
                    src={product.urlToImage}
                    alt={product.publishedAt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.url}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.description}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default News;
