import { memo } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContent'
import { ProductType } from '../types/product'
import { formatCurrency } from '../utils'
import Button from './Button'
import ProductImg from './ProductImg'
import ProductTag from './ProductTag'

type ProductProp = {
  product: ProductType
  isInCar: boolean
}

const ProductItem = ({ product, isInCar }: ProductProp) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    changeSelected,
    getCurrentProductQuantity,
  } = useShoppingCart()

  // 当前产品数量
  const currentQuantity = getCurrentProductQuantity(product)

  return (
    <li
      className={`${isInCar ? 'px-2' : 'py-3'} flex gap-2 items-center`}
      key={product.productId}
    >
      {isInCar &&
        (product.selected ? (
          <Button onClick={() => changeSelected(product)}>√</Button>
        ) : (
          <Button type={3} onClick={() => changeSelected(product)}>
            {' '}
          </Button>
        ))}
      <ProductImg src={product.img} alt={product.name} />
      <div className='flex-1'>
        <p className='text-sm'>
          {product.name}
          {!isInCar && product.tag.length > 0 && (
            <ProductTag>{product.tag}</ProductTag>
          )}
        </p>
        <p className='text-[10px] text-stone-400'>
          {isInCar ? product.sku : product.subtitle}
        </p>
        <div className='flex items-center'>
          <p className='flex-1 py-1 font-mono'>
            <span className='text-sm font-semibold text-orange-600'>
              {formatCurrency(product.price.current)}
            </span>
            <span className='ml-2 text-xs line-through text-stone-400'>
              {formatCurrency(product.price.original)}
            </span>
          </p>
          {isInCar ? (
            <div className='flex items-center gap-2'>
              <Button type={2} onClick={() => decreaseQuantity(product)}>
                -
              </Button>
              <span>{product.quantity}</span>
              <Button type={1} onClick={() => increaseQuantity(product)}>
                +
              </Button>
            </div>
          ) : (
            <div className='relative'>
              <Button
                type={1}
                onClick={() => {
                  increaseQuantity(product)
                }}
              >
                +
              </Button>
              {currentQuantity > 0 && (
                <span className='text-[8px] absolute top-[-8px] right-[-6px] w-[16px] h-[16px] text-center leading-[16px] rounded-full bg-orange-400 text-stone-50 font-semibold'>
                  {currentQuantity}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

// 记忆化ProductItem组件
const MemoProductItem = memo(ProductItem)
export default MemoProductItem
