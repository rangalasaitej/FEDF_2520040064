import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("Hyderabad");
  const [refreshing, setRefreshing] = useState(false);

  // Default coordinates for Hyderabad
  const coordinates = {
    Hyderabad: { latitude: 17.38, longitude: 78.48 },
    Mumbai: { latitude: 19.08, longitude: 72.88 },
    Delhi: { latitude: 28.61, longitude: 77.21 },
    Bangalore: { latitude: 12.97, longitude: 77.59 },
    Chennai: { latitude: 13.09, longitude: 80.27 },
  };

  const fetchWeather = async (selectedLocation = "Hyderabad") => {
    try {
      setLoading(true);
      setError("");
      
      const coords = coordinates[selectedLocation] || coordinates.Hyderabad;
      
      // Fetch weather data from Open-Meteo API
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true`
      );
      
      if (!response.ok) {
        throw new Error("Unable to fetch weather data");
      }
      
      const data = await response.json();
      setWeather(data.current_weather);
      setLocation(selectedLocation);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Fetch weather on component mount
  useEffect(() => {
    fetchWeather();
  }, []);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    fetchWeather(newLocation);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchWeather(location);
  };

  return (
    <div className="weather-main">
      <div className="weather-container">
        <div className="header">
          <h1>🌤️ Weather Information System</h1>
          <p className="subtitle">Get real-time weather data from anywhere</p>
        </div>

        {/* Location Selector */}
        <div className="location-selector">
          <label htmlFor="location">Select City:</label>
          <select
            id="location"
            value={location}
            onChange={(e) => handleLocationChange(e.target.value)}
            className="location-select"
          >
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
          <button 
            className={`refresh-btn ${refreshing ? 'spinning' : ''}`}
            onClick={handleRefresh}
            disabled={loading || refreshing}
          >
            🔄 Refresh
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <h2>Loading Weather Information...</h2>
            <p>Fetching data from Open-Meteo API</p>
          </div>
        ) : null}

        {/* Error State */}
        {error && !loading ? (
          <div className="error-container">
            <h2>❌ Error</h2>
            <p>{error}</p>
            <button 
              className="retry-btn"
              onClick={handleRefresh}
            >
              Retry
            </button>
          </div>
        ) : null}

        {/* Weather Data Display */}
        {weather && !loading && !error ? (
          <div className="weather-display">
            <div className="location-header">
              <h2>📍 {location}</h2>
            </div>

            <div className="weather-cards">
              <div className="weather-card temperature">
                <div className="card-icon">🌡️</div>
                <div className="card-content">
                  <h3>Temperature</h3>
                  <p className="value">{weather.temperature}°C</p>
                </div>
              </div>

              <div className="weather-card windspeed">
                <div className="card-icon">💨</div>
                <div className="card-content">
                  <h3>Wind Speed</h3>
                  <p className="value">{weather.windspeed} km/h</p>
                </div>
              </div>

              <div className="weather-card direction">
                <div className="card-icon">🧭</div>
                <div className="card-content">
                  <h3>Wind Direction</h3>
                  <p className="value">{weather.winddirection}°</p>
                </div>
              </div>

              <div className="weather-card code">
                <div className="card-icon">🌥️</div>
                <div className="card-content">
                  <h3>Weather Code</h3>
                  <p className="value">{weather.weathercode}</p>
                </div>
              </div>
            </div>

            <div className="weather-info">
              <h3>📊 Additional Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span>Is Day:</span>
                  <strong>{weather.is_day === 1 ? "☀️ Yes" : "🌙 No"}</strong>
                </div>
                <div className="info-item">
                  <span>API Source:</span>
                  <strong>Open-Meteo</strong>
                </div>
                <div className="info-item">
                  <span>Last Updated:</span>
                  <strong>{new Date().toLocaleTimeString()}</strong>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Weather;
