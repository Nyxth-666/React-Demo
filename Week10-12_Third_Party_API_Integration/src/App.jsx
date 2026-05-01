import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "https://openweathermap.org/api";

  const getWeather = async () => {
    try {
      setError("");

      const response = await fetch(
        `https:/api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );

      const data = await response.json();
      setWeather(data);

      if (!response.ok) {
        throw new Error("City not found");
      }
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </>
  );
}

export default App;
