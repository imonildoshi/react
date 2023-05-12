import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './App.jsx'
import './index.css'
import SearchCatalogLayout from './components/nav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
