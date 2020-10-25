import React, {useEffect, useState, useCallback} from 'react';
import useGeolocation from 'react-hook-geolocation';

import apiWeather from '../../services/openWeatherMap';

import Temperature from './Components/Temperature';
import ListHour from './Components/ListHour';
import ShareLocation from './Components/ShareLocation';

const Home: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  const getWeather = useCallback(async (geolocation) => {
    const {data} = await apiWeather.get(
      `?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=8b67249a08e8dcc5f6d7e90885080032&cnt=7&lang=pt_br&units=metric`,
    );
    setWeather(data);
  }, []);

  const geolocation = useGeolocation(
    {
      enableHighAccuracy: false,
      timeout: 5000,
    },
    getWeather,
  );

  useEffect(() => {
    getWeather(geolocation);
  }, []);

  return (
    <div className="container">
      {weather ? (
        <>
          <Temperature weather={weather} />
          <ListHour weather={weather} />
        </>
      ) : (
        <ShareLocation />
      )}
    </div>
  );
};

export default Home;
