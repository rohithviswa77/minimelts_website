import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Essentials from './pages/Newborn/Essentials/Essentials.jsx'
import BathAndCare from './pages/Newborn/BathAndCare/BathAndCare.jsx'
import Moms from './pages/Newborn/Moms/Moms.jsx'
import Uniforms from './pages/TShirts/Uniforms.jsx'
import TShirts from './pages/TShirts/TShirts.jsx'
import HospitalWear from './pages/HospitalWear/HospitalWear.jsx'
import Clients from './pages/Clients/Clients.jsx'
import Contact from './pages/Contact/Contact.jsx'
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Newborn Dropdown Routes */}
        <Route path="/newborn/essentials" element={<Essentials />} />
        <Route path="/newborn/bath-and-care" element={<BathAndCare />} />
        <Route path="/newborn/moms" element={<Moms />} />

        {/* Uniform/T-shirts Dropdown Routes */}
        <Route path="/uniforms" element={<Uniforms />} />
        <Route path="/t-shirts" element={<TShirts />} />

        <Route path="/hospital-wear" element={<HospitalWear />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)