import { useState } from 'react';
import CitySearch from './components/CitySearch';
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
      console.log(data);
      if (response.ok && data.status === 'ok') {
        setAirData(data.data);
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
    <>
      <h1>hello World</h1>
      <CitySearch getAirQuality={getAirQuality}  />
    </>
  );
}

export default App;
