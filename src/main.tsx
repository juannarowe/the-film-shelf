import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Explore from './pages/Explore/Explore'
import FilmDetail from './pages/FilmDetail/FilmDetail'
import LogIn from './pages/LogIn/LogIn'
import Favorites from './pages/Favorites/Favorites'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/film-detail/:id",
    element: <FilmDetail />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
