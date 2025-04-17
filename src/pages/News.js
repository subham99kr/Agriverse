import React, { useEffect, useState } from 'react';
import '../styles/Weather.css';
import 'react-toastify/dist/ReactToastify.css';

const News = () => {
  const [news, setNews] = useState([]);
  const apikey = process.env.REACT_APP_newsapi;

  const fetchNewsData = () => {
  
    fetch(`https://newsapi.org/v2/everything?q=farming&apiKey=${apikey}`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  // Filter out any incomplete news articles
  let newsArticles = news.articles?.filter((item) => {
    return Object.values(item).every(value => value !== null);
  });

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     const message = query.q ? query.q : "current location.";
  //     toast.info("Fetching Weather for " + message);

  //     try {
  //       const data = await getformattedweatherData({ ...query, units });

  //       if (data && data.coord && data.coord.lat && data.coord.lon) {
  //         toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`);
  //         setWeather(data);
  //       } else {
  //         // toast.error("Weather data is missing coordinates (lat, lon).");
  //       }
  //     } catch (error) {
  //       // toast.error("Error fetching weather data.");
  //     }
  //   };

  //   fetchWeather();
  // }, [query, units]);

  // const formatBackground = () => {
  //   if (!weather) return 'from-cyan-700 to-blue-700';
  //   const threshold = units === 'metric' ? 20 : 60;
  //   return weather.temp <= threshold ? 'from-cyan-700 to-blue-700' : 'from-yellow-700 to-orange-700';
  // };

  return (
    <div className="bg-[#f5f5f5]">
      {/* <div className={`w-full px-24 bg-gradient-to-br from-cyan-700 to-blue-700 h-full shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <Timeandlocation weather={weather} />
            <Tempanddetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </div> */}

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-ubuntu mb-4">News and updates</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {newsArticles?.map((product, index) => {
            return (
              <div key={index} className="group relative shadow-sm bg-white rounded-t-xl">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.urlToImage}
                    alt={product.publishedAt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="px-1 mt-2 flex justify-between text-center">
                  <div className="text-gray-700">
                    <a href={product.url} target="_blank" rel="noopener noreferrer">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.description}
                    </a>
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
