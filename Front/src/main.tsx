import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './Components/Error.tsx'
import { Header } from './Components/Header.tsx'
import Profile from "./Components/Profile.tsx"
import ReservationsPage from './Components/reservationPage/Reservations.tsx'
import CredentialsSignInPage from './Components/Login.tsx'
import './i18n'
import { AuthProvider } from './api/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><App /></>} />
        <Route path="/Reservations" element={<><Header />< ReservationsPage /></>}></Route>
        <Route path="/Profile" element={<><Header /><Profile /></>}></Route>
        <Route path="/LogIn" element={<><Header /><CredentialsSignInPage /></>}></Route>
        <Route path="*" element={<><Header /><ErrorPage /></>}></Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider> 
  </StrictMode>,
)
