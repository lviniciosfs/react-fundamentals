import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherInfo from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeatherInfo temperature={35}/>
  </StrictMode>,
)
