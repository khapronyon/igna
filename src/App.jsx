import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Igna from './pages/Igna.jsx'
import Dintorni from './pages/Dintorni.jsx'
import ComeArrivare from './pages/ComeArrivare.jsx'

export default function App() {
  return (
    <>
      <SplashScreen />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/igna" element={<Igna />} />
            <Route path="/dintorni" element={<Dintorni />} />
            <Route path="/come-arrivare" element={<ComeArrivare />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
