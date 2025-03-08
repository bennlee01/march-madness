// Importing necessary functions from React
import { StrictMode } from 'react'          // StrictMode is a wrapper component that helps identify potential problems in your app
import { createRoot } from 'react-dom/client'  // createRoot is used to initialize a React application in the DOM

// Importing global CSS file for styling
import './index.css'

// Importing the main App component that contains the core functionality of your application
import App from './App.tsx'

// Rendering the app inside the HTML element with the ID 'root'
createRoot(document.getElementById('root')!).render(
  // StrictMode helps with detecting issues in the app during development (doesn't affect production)
  <StrictMode>
    {/* Rendering the App component */}
    <App />
  </StrictMode>,
)
