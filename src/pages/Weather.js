import Tempanddetails from '../components/Tempanddetails';
import TopButtons from '../components/TopButtons';
import Inputs from '../components/inputs';
import Timeandlocation from '../components/timeandlocation';
import '../styles/Weather.css'
function Weather()
{
   //  
    return(
        <div className=" mx-auto max-w-screen-md px-32 mt-4 py-5  bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <TopButtons />
            <Inputs />
            <Timeandlocation />
            <Tempanddetails />
        </div>
    );
}
export default Weather;