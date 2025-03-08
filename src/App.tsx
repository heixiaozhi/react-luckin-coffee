import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import ShoppingCartProvider from './context/ShoppingCartContent'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <div className='min-h-screen relative'>
          <Header />
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
          <Cart />
        </div>
      </ShoppingCartProvider>
    </>
  )
}

export default App
