import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GradientCursor from './componets/GsapCursor/GradientCursor.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GradientCursor />
    <App />
  </React.StrictMode>
);
