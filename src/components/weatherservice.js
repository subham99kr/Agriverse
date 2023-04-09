import { DateTime } from "luxon";
import sun from "../assets/sun2-removebg-preview.png";
const Api_Key = "9d7cde1f6d07ec55650544be1631307e";
const base_url = "http://api.openweathermap.org/data/2.5";
const getWeatherData = (infoType, searchParams)=>{
    const url = new URL(base_url+"/" +infoType);
    url.search = new URLSearchParams({...searchParams,appid:Api_Key},
);
return fetch(url)
.then((res) => res.json())
};
const formatCurrentWeather = (data) =>
{
    const {
       coord: {lat, lon},
       main: {temp,feels_like,temp_min,temp_max,humidity},
       name,
       dt,
       sys:{country ,sunrise,sunset},
       weather,
       wind:{speed}
    } = data
    const {main:details ,icon} = weather[0]
    return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed};
};
const formatForecastWeather = (data) =>
{
    let { timezone,daily,hourly}=data;
    daily = daily.slice(1,6).map(d =>{
        return {
            title: formatToLocalTime(d.dt,timezone,'ccc'),
            temp: d.temp.day,
            icon:d.weather[0].icon
        }
        });
        hourly = hourly.slice(1,6).map(d =>{
            return {
                title: formatToLocalTime(d.dt,timezone,"hh:mm a"),
                temp: d.temp,
                icon:d.weather[0].icon
            }
            });
            return {timezone,daily,hourly};
};
const getformattedweatherData =async(searchParams) =>
{
    const formattedCurrentWeather = await getWeatherData("weather"
    ,searchParams).then(formatCurrentWeather)
   const {lat, lon} = formattedCurrentWeather
   const formattedForecastWeather = await getWeatherData("onecall",{
    lat,
    lon,
    exclude:"current,minutely,alerts",
    units:searchParams.units,
   }).then(formatForecastWeather)
   return {...formattedCurrentWeather,...formattedForecastWeather};
};
const formatToLocalTime = (secs,zone,format="cccc,dd LLL yyyy' | Local time:'hh:mm a") =>
DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code)=>`http://openweathermap.org/img/wn/${code}@2x.png`;

export default getformattedweatherData;
export { formatToLocalTime,iconUrlFromCode};