import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Explore from './pages/Explore/Explore'
import FilmDetail from './pages/FilmDetail/FilmDetail'
import LogIn from './pages/LogIn/LogIn'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NotFoundPage from './pages/NotFoundPage'
import { AuthProvider } from './context/authContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/film-detail/:id",
        element: <FilmDetail />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
