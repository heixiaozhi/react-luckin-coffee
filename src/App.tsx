import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import ShoppingCartProvider from './context/ShoppingCartContent'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <div className='min-h-screen relative'>
          <Header />
          <Outlet />
          <Cart />
        </div>
      </ShoppingCartProvider>
    </>
  )
}

export default App
