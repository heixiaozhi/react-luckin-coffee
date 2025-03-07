import cart from '../assets/images/cart.jpg'
import { useShoppingCart } from '../context/ShoppingCartContent'
import { formatCurrency } from '../utils'

type Props = {
  isOpenPayCart: boolean
  openPayCart: () => void
  toggleShoppingCart: () => void
}

const PayCart = ({ isOpenPayCart, openPayCart, toggleShoppingCart }: Props) => {
  const { getTotalPrice, getCheapTotalPrice, getTotalQuantity } =
    useShoppingCart()

  return (
    <>
      {isOpenPayCart ? (
        // 消费车被打开的时候显示背景，否则透明
        <div className='fixed z-30 right-0 bottom-2 left-0 transition-all delay-200 ease-in-out w-[90%] mx-auto bg-white shadow-self rounded-full flex gap-2 font-noto transition-cart'>
          <div
            onClick={toggleShoppingCart}
            className='flex-1 py-1 flex items-center gap-4 ml-4'
          >
            <div className='relative'>
              <img
                className='w-[28px] h-[28px] object-cover'
                src={cart}
                alt='cart'
              />
              <span className='text-[8px] absolute top-[-5px] right-[-8px] w-[16px] h-[16px] text-center leading-[16px] rounded-full bg-orange-400 text-stone-50 font-semibold'>
                {getTotalQuantity}
              </span>
            </div>
            <div>
              <p className='text-sm'>
                预计到手
                <span className='text-orange-600 font-mono font-semibold'>
                  {formatCurrency(getTotalPrice)}
                </span>
              </p>
              <p className='text-[10px] text-stone-400'>
                已享受更低优惠, 共减免{formatCurrency(getCheapTotalPrice)}
              </p>
            </div>
          </div>
          <button className='bg-blue-800 rounded-r-full text-sm px-4 text-white font-medium'>
            去结算
          </button>
        </div>
      ) : (
        <div
          onClick={openPayCart}
          className='p-3 fixed bottom-[10px] right-[10px] bg-white rounded-full shadow-self transition-all'
        >
          <img
            className='w-[24px] h-[24px] object-cover'
            src={cart}
            alt='cart'
          />
        </div>
      )}
    </>
  )
}
export default PayCart
