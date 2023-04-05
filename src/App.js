import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <Home/>
  }
])

export {router};