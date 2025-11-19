import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Professionals from './pages/Professionals'
import Dashboard from './pages/Dashboard'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
