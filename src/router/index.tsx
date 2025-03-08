import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import React from 'react'

// 路由懒加载
const HomePage = React.lazy(() => import('../pages/HomePage'))
const WeekPage = React.lazy(() => import('../pages/WeekPage'))
const MyOrderPage = React.lazy(() => import('../pages/MyOrderPage'))

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
