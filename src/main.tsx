import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App'
import Explore from './pages/Explore/Explore'
import FilmDetail from './pages/FilmDetail/FilmDetail'
import LogIn from './pages/LogIn/LogIn'
import Favorites from './pages/Favorites/Favorites'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/film-detail" element={<FilmDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
