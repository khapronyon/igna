import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Igna from './pages/Igna.jsx'
import Territorio from './pages/Territorio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/igna" element={<Igna />} />
          <Route path="/territorio" element={<Territorio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
