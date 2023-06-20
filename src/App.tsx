import './App.css';
import Days from './Components/Days/Days';
import Information from './Components/Information/Information';
import Place from './Components/Place/Place';
import Pogoda from './Components/Pogoda/Pogoda';
import Weather from './Components/WeatherBoard/weatherBoard';
import WeatherTime from './Components/WeatherTime/WeatherTime';
import InfoString from './Components/infoString/InfoString';

function App() {
  return (
    <div>
      <Weather> 
        <Place />

        <Pogoda />
        <InfoString />
        
        <WeatherTime />

      </Weather>

    </div>
  );
}

export default App;
