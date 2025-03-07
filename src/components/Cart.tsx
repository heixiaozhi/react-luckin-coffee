import { useEffect, useState } from 'react'
import Overlay from './Overlay'
import PayCart from './PayCart'
import ShoppingCart from './ShoppingCart'
import { useShoppingCart } from '../context/ShoppingCartContent'

const Cart = () => {
  const { getProductQuantity } = useShoppingCart()
  // 是否打开支付车
  const [isOpenPayCart, setIsOpenPayCart] = useState(false)
  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false)

  function openPayCart() {
    setIsOpenPayCart(true)
  }

  function closeShoppingCart() {
    // setIsOpenPayCart(false)
    setIsOpenShoppingCart(false)
  }

  function toggleShoppingCart() {
    setIsOpenShoppingCart(!isOpenShoppingCart)
  }

  useEffect(() => {
    // 当有产品时且购物车未打开时 显示支付车
    if (getProductQuantity > 0 && !isOpenPayCart) {
      setIsOpenPayCart(true)
    } else if (getProductQuantity <= 0 && isOpenPayCart) {
      const timer = setTimeout(() => {
        closeShoppingCart()
        setIsOpenPayCart(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [getProductQuantity, isOpenPayCart])

  return (
    <>
      {/* 购物车打开且产品数量不为0 */}
      {isOpenShoppingCart && getProductQuantity > 0 && <ShoppingCart />}
      <PayCart
        isOpenPayCart={isOpenPayCart}
        openPayCart={openPayCart}
        toggleShoppingCart={toggleShoppingCart}
      />
      {isOpenShoppingCart && getProductQuantity > 0 && (
        <Overlay onClick={closeShoppingCart} />
      )}
    </>
  )
}
export default Cart
