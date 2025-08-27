import React from "react";

function WeatherDisplay({ data }) {
  return (
    <div className="border rounded-xl p-4 shadow-md text-center">
      <p className="text-lg">🌡️ {data.temperature}°C</p>
      <p>💨 Wind: {data.windspeed} km/h</p>
    </div>
  );
}

export default WeatherDisplay;
