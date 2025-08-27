import { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      const geoData = await geoRes.json();
      if (!geoData.results) throw new Error("City not found");

      const { latitude, longitude } = geoData.results[0];
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weather = await weatherRes.json();

      setWeatherData(weather.current_weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Now</h1>
      <WeatherSearch onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
