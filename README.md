# Weather Now 🌤️
A simple, responsive React application that lets users quickly check the **current weather** for any city using the [Open-Meteo API](https://open-meteo.com/).

## 🚀 Features
* Search for any city and see **current weather conditions** (temperature, wind speed).
* Powered by **Open-Meteo Geocoding + Weather APIs** (no API key needed).
* Clean and minimal **UI/UX** for fast access.
* Fully **responsive** (works on mobile and desktop).
* Handles **loading states** and **error messages** gracefully.

## 🛠️ Tech Stack
* **React** (functional components + hooks)
* **TailwindCSS** (styling & responsiveness)
* **Open-Meteo API** (weather & geocoding)
* **React state management** (no external libraries)

## 📂 Project Structure
```
/src
  /components
    WeatherSearch.jsx      // Search form
    WeatherDisplay.jsx     // Weather results card
    ErrorMessage.jsx       // Error UI
    Loader.jsx             // Loading indicator
  App.jsx                  // Main app logic
  index.js                 // Entry point
  App.css (or Tailwind)    // Styling
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
* **Geocoding API** (city → latitude/longitude):

  ```
  https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=1
  ```

* **Weather API** (get current weather by lat/lon):

  ```
  https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  ```


## 🖼️ Example
**Search:** "Berlin"
**Result:**
🌡️ 22°C, 💨 Wind 5 km/h


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
