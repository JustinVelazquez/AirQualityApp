import { useState } from 'react';

//importing Components
import CitySearch from './components/CitySearch';
import AirQualityCard from './components/AirQualityCard';
import PollutantInfo from './components/PollutantInfo';
import AirQualityTable from './components/AirQualityTable';

//importing our styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//importing API KEY from .env
const apiKey = import.meta.env.VITE_REACT_APP_AQI_API_TOKEN;
function App() {
  const [airData, setAirData] = useState(null);
  const [error, setError] = useState(null);

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=${apiKey}`
      );
      const data = await response.json();

      if (response.ok && data.status === 'ok') {
        setAirData(data.data);
        console.log(airData);
        setError(null);
      } else {
        setError(
          'Sorry, we couldnt find the city you were looking for. Try another location nearby or ensure your spelling is correct.'
        );
        setAirData(null);
      }
    } catch (error) {
      console.error('network error:', error);
      setError('Sorry, something went wrong');
      setAirData(null);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">Air Quality Index Checker</h1>
      <CitySearch getAirQuality={getAirQuality} />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {airData && (
        // Air Quality Card
        // Polluant info
        <>
          <AirQualityCard data={airData} />
          <PollutantInfo pollutant={airData.dominentpol} />
        </>
      )}
          <AirQualityTable />
    </div>
  );
}

export default App;
