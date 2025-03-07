import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage'
import WeekPage from '../pages/WeekPage'
import MyOrderPage from '../pages/MyOrderPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'week',
        element: <WeekPage />,
      },
      {
        path: 'myOrder',
        element: <MyOrderPage />,
      },
    ],
  },
])

export default router
