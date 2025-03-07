import ProductItem from './ProductItem'
import Button from './Button'
import { useShoppingCart } from '../context/ShoppingCartContent'

const ShoppingCart = () => {
  // 获取购物车数据
  const {
    carts,
    getTotalQuantity,
    getProductQuantity,
    totalSelected,
    getSelectedQuantity,
    clearCart,
  } = useShoppingCart()

  const productQuantity = getProductQuantity

  return (
    <div className='fixed bottom-0 left-0 z-[25] w-full font-noto text-xs transition-all'>
      <div className='py-2 px-4 bg-white rounded-t-md flex '>
        {/* 产品数量全部已选择就全选 */}
        {getSelectedQuantity === getProductQuantity ? (
          <Button onClick={() => totalSelected(false)}>√</Button>
        ) : (
          <Button type={3} onClick={() => totalSelected(true)}>
            {''}
          </Button>
        )}
        <span className='flex-1 ml-2'>
          已选择商品 (
          <span className='font-semibold'>{getTotalQuantity}件</span>)
        </span>
        <span className='flex text-stone-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 mr-1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
            />
          </svg>
          <button onClick={() => clearCart(true)}>清空购物车</button>
        </span>
      </div>
      <div className='p-2 bg-orange-10'>
        {productQuantity > 2 && (
          <p className='px-2'>
            <span className='p-[2px] mr-1 text-[8px] bg-orange-600 text-white'>
              满减
            </span>
            已满
            <span className='text-orange-400 font-medium'>
              {productQuantity}件
            </span>
            , 可免费获得
            <span className='text-orange-400 font-medium'>
              茉莉园造景贴纸一份
            </span>
          </p>
        )}

        <ul className='max-h-[256px] overflow-y-auto scrollbar-hidden space-y-2'>
          {carts.map((cart) => {
            return (
              <ProductItem key={cart.productId} product={cart} isInCar={true} />
            )
          })}
        </ul>
      </div>
      <div className='h-[60.5px] bg-slate-100'></div>
    </div>
  )
}
export default ShoppingCart
