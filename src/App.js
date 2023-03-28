import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '*',
    element: <Home/>
  }
])

export {router};
