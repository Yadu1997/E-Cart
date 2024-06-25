import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ecartStore from './Redux/ecartStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ecartStore}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
