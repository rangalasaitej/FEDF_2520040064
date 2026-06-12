# Weather Information System

A modern React application that demonstrates async data fetching, API integration, error handling, and UI optimization. This application fetches real-time weather data from the Open-Meteo API and displays it with a beautiful, responsive interface.

## 🎯 Project Overview

This is a **Week 8** assignment project that implements a Weather Information System using:
- **Async Data Fetching**: Using JavaScript's Fetch API
- **React Hooks**: useEffect for side effects, useState for state management
- **Error Handling**: Try-catch blocks and graceful error messages
- **API Integration**: Real-world API integration with Open-Meteo
- **UI Optimization**: Loading states, conditional rendering, and responsive design
- **Modern CSS**: Gradient styling, animations, and mobile responsiveness

## ✨ Key Features

🌍 **Multi-City Support**
- Select from 5 Indian cities: Hyderabad, Mumbai, Delhi, Bangalore, Chennai
- Instant weather updates for selected location

⚡ **Async Data Fetching**
- Uses Fetch API for HTTP requests
- Async/await syntax for clean code
- Automatic data fetching on component mount

🔄 **Smart Loading States**
- Spinner animation during data fetch
- "Refreshing" indicator
- Disabled buttons during loading

⚠️ **Comprehensive Error Handling**
- Try-catch blocks for error catching
- User-friendly error messages
- Retry button for failed requests

📊 **Weather Information Displayed**
- Current temperature in Celsius
- Wind speed in km/h
- Wind direction in degrees
- Weather condition code
- Day/Night indicator
- Last updated timestamp

📱 **Responsive Design**
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface
- Beautiful gradient background

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   └── Weather.jsx              # Weather component with async logic
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # Component styles
│   ├── index.css                    # Global styles
│   └── main.jsx                     # React entry point
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies and scripts
├── .gitignore                       # Git ignore rules
├── README.md                        # This file
└── QUICKSTART.md                    # Quick start guide
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

### Steps

1. **Navigate to project directory:**
   ```bash
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Visit `http://localhost:5173/`
   - The app will automatically reload when you make changes

## 💻 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally

## 🎓 How to Use

1. **View Default Weather:**
   - App loads with Hyderabad weather automatically
   - See temperature, wind speed, and direction

2. **Change Location:**
   - Use the dropdown to select a different city
   - Weather data updates instantly

3. **Refresh Data:**
   - Click the 🔄 Refresh button to get latest data
   - Loading spinner appears during fetch

4. **Handle Errors:**
   - If API fails, error message displays
   - Click Retry to try again

## 🔌 React Hooks Explained

### useState Hook
```javascript
const [weather, setWeather] = useState(null);
// weather: stores fetched weather data
// setWeather: updates the state
```

### useEffect Hook
```javascript
useEffect(() => {
  fetchWeather();
}, []);
// Runs once on component mount
// Empty dependency array [] = run once
```

## 🌐 API Integration

### Open-Meteo API
- **Endpoint:** `https://api.open-meteo.com/v1/forecast`
- **Parameters:**
  - `latitude` - City latitude
  - `longitude` - City longitude
  - `current_weather=true` - Get current conditions
- **Response:** JSON with weather object containing:
  - `temperature` - Current temperature in °C
  - `windspeed` - Wind speed in km/h
  - `winddirection` - Wind direction in degrees (0-360)
  - `weathercode` - WMO weather code
  - `is_day` - 1 for day, 0 for night

### City Coordinates
```javascript
{
  Hyderabad: { latitude: 17.38, longitude: 78.48 },
  Mumbai: { latitude: 19.08, longitude: 72.88 },
  Delhi: { latitude: 28.61, longitude: 77.21 },
  Bangalore: { latitude: 12.97, longitude: 77.59 },
  Chennai: { latitude: 13.09, longitude: 80.27 }
}
```

## 📡 Error Handling Implementation

### Try-Catch Block
```javascript
try {
  setLoading(true);
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error("Unable to fetch weather data");
  }
  
  const data = await response.json();
  setWeather(data.current_weather);
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
}
```

### Handled Scenarios
- ✅ Network errors
- ✅ API unavailability
- ✅ Invalid coordinates
- ✅ Timeout errors
- ✅ Malformed responses

## 🎨 Styling Features

### Color Scheme
- Primary Gradient: Purple to Violet (#667eea to #764ba2)
- Temperature Card: Red gradient (#ff6b6b to #ee5a52)
- Wind Speed Card: Teal gradient (#4ecdc4 to #44a08d)
- Wind Direction Card: Yellow gradient (#f9ca24 to #f0932b)

### Animations
- Spinner rotation during loading
- Card hover effects with lift animation
- Fade-in animations for content
- Smooth transitions on all interactions

### Responsive Breakpoints
- **Desktop:** Full grid layout with 4 cards per row
- **Tablet:** 2-3 cards per row
- **Mobile:** 1 card per row, stacked layout

## 🧠 Learning Outcomes

After completing this project, you'll understand:
- ✅ Async/await syntax for asynchronous operations
- ✅ Fetch API for HTTP requests
- ✅ Error handling with try-catch
- ✅ useEffect hook for side effects
- ✅ useState hook for state management
- ✅ Conditional rendering in React
- ✅ Loading and error states
- ✅ API integration in React
- ✅ Responsive design with CSS Grid
- ✅ Component lifecycle management

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5173 busy | Vite will use next available port |
| API not working | Check internet connection, API might be down |
| Changes not showing | Hard refresh (Ctrl+Shift+R) |
| npm modules error | Delete node_modules and run `npm install` |
| CORS error | API allows cross-origin requests, shouldn't occur |

## 🚀 Next Steps & Enhancements

### Easy Enhancements
1. Add more cities
2. Add forecast for next 7 days
3. Show weather icons based on condition code
4. Add temperature unit toggle (C/F)
5. Add geolocation feature

### Medium Enhancements
1. Store preferences in localStorage
2. Add search by city name
3. Show UV index and humidity
4. Create weather comparison tool
5. Add weather alerts

### Advanced Enhancements
1. Add weather maps
2. Integrate with another weather API
3. Create PWA with offline support
4. Add real-time updates with WebSocket
5. Build weather history/analytics

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Async Await Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Fetch API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Open-Meteo API Docs](https://open-meteo.com/en/docs)
- [React Hooks Guide](https://react.dev/reference/react)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## 📄 License

This project is created for educational purposes as part of Week 8 coursework.

---

**Assignment**: Week 8 - Implementation of Async Data Fetching, API Integration, Error Handling and UI Optimization in React.

Made with ❤️ using React, Vite & Open-Meteo API
