import React from 'react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './css/index.css'

import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter 
    basename='/hospody'
    >
          <App />
    </BrowserRouter>
  </React.StrictMode>,
)
