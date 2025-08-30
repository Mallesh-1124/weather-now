# Weather Now 🌤️
A simple, responsive React application that lets users quickly check the **current weather** for any city.
It uses the **Open-Meteo API** {[Open-Meteo API](https://open-meteo.com/)} to fetch real-time weather conditions including:

- 🌡️ Temperature  
- 💨 Wind Speed  
- 💧 Humidity  
- 🌞 UV Index  
- 👁️ Visibility  

## 🚀 Features
- Search weather by **city name**
- Displays **current temperature and conditions**
- Extra info: wind speed, humidity, visibility, UV index
- Loading spinner while fetching data
- Error message handling (e.g., if city not found)
- Clean and modern **card-based UI**

## 🛠️ Tech Stack
* **React** (functional components + hooks)
* **CSS** (styling & responsiveness)
* **Open-Meteo API** (weather & geocoding)
* **React state management** (no external libraries)

## 📂 Project Structure
```
weather-now/
│── public/
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
│
│── src/
│ ├── components/
│ │ ├── ErrorMessage.jsx
│ │ ├── Loader.jsx
│ │ ├── WeatherDisplay.jsx
│ │ └── WeatherSearch.jsx
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ ├── index.js
│ └── reportWebVitals.js
│
│── package.json
│── package-lock.json
│── README.md
```

## ⚙️ Setup & Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-now.git
   cd weather-now
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 API Usage
This app uses Open-Meteo API which provides free, no-authentication weather data.

* **Geocoding API** (city → latitude/longitude):

  ```
  https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=1
  ```

* **Weather API** (get current weather by lat/lon):

  ```
  https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  ```


## 🖼️ Example
**Search:** "New York"
**Result:**
- 🌡️ Temperature  
- 💨 Wind Speed  
- 💧 Humidity  
- 🌞 UV Index  
- 👁️ Visibility  


## ✅ Error Handling
* If city not found → `"No results. Try another city."`
* If API request fails → `"Unable to fetch weather. Please try again later."`
* Displays a loading state during API requests.


## 🧪 Testing
* **Unit Tests (suggested with Jest + React Testing Library):**

  * `WeatherSearch` handles input and submit.
  * `WeatherDisplay` renders props correctly.
* **Integration Tests:**

  * Mock fetch API → test success and failure flows.


## 📌 Future Improvements
* Add **forecast (next 5 days)**.
* Display **weather icons** (e.g., ☀️, 🌧️).
* Save **recent searches**.
* Add **internationalization (i18n)**.
