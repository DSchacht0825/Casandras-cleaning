import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReviewPage from './components/ReviewPage.jsx'
import { cityFromPath } from './siteData.js'

const path = window.location.pathname.replace(/\/+$/, '')
const page = path === '/review'
  ? <ReviewPage />
  : <App city={cityFromPath(path)} />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
