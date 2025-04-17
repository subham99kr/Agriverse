import React, { useEffect, useState } from 'react';
import '../styles/Weather.css';
import 'react-toastify/dist/ReactToastify.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const apikey = process.env.REACT_APP_newsapi;

  const fetchNewsData = async () => {
    const topic = 'farming';
    const apiUrl = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

    try {
      const response = await fetch(proxyUrl);
      const data = await response.json();
      const parsed = JSON.parse(data.contents);
      const validArticles = parsed.articles?.filter(article =>
        article && Object.values(article).every(val => val !== null)
      );
      setArticles(validArticles || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">
          News and Updates
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {articles.map((article, index) => (
            <div key={index} className="group relative shadow-sm bg-white rounded-t-xl">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="px-1 mt-2 text-center">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-all"
                >
                  {article.description || 'No description available'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
