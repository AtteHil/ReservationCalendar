import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorPage } from './Components/Error.tsx'
import { Header } from './Components/Header.tsx'
import RangeCalendar from './Components/Calendar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><App /></>} />
        <Route path="/Reservations" element={<><Header /><RangeCalendar /></>}></Route>
        <Route path="*" element={<><Header /><ErrorPage /></>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
