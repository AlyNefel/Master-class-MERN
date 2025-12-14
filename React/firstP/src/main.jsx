/**
 * Entry point of the React application.
 * 
 * This file initializes and renders the React application to the DOM.
 * 
 * @description
 * - Imports React's StrictMode for development warnings
 * - Imports createRoot to initialize React 18's concurrent rendering
 * - Imports global styles from index.css
 * - Imports the root App component
 * - Creates a root React instance targeting the HTML element with id="root"
 * - Wraps the App component in StrictMode to catch potential issues during development
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
