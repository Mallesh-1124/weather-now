// Import the React library to use JSX and React features
import React from 'react';
// Import the ReactDOM client for rendering the app
import ReactDOM from 'react-dom/client';
// Import global CSS styles
import './index.css';
// Import the main App component
import App from './App';
// Import the reportWebVitals utility for measuring app performance
import reportWebVitals from './reportWebVitals';

// Create a root container for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Start measuring performance in the app (optional)
reportWebVitals();
