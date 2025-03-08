import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import fetchData from '../lib/fetchProductList'
import ProductItem from './ProductItem'
import ProductFooter from './ProductFooter'
import { ProductListType } from '../types/product'

type Props = {
  children?: ReactNode
}

type Ref = HTMLLIElement[]

// forwardRef 指定 ref 和 props 的类型
const ProductList = forwardRef<Ref, Props>((_, ref) => {
  // 获取产品列表
  const [productList, setProductList] = useState<ProductListType[]>([])
  // 内部维护一个对li的引用
  const itemsRef = useRef<HTMLLIElement[]>([])

  // 暴露内部的ref给父组件
  useImperativeHandle(
    ref,
    () => {
      return itemsRef.current
    },
    []
  )

  useEffect(() => {
    fetchData().then((res: ProductListType[]) => {
      setProductList(res)
    })
  }, [])

  return (
    <>
      <ul
        id='parent-scroll'
        className='flex-1 font-noto space-y-4 overflow-y-auto scrollbar-hidden'
      >
        {productList.map((item, index) => {
          return (
            <li
              // 将li的引用存入数组
              ref={(el: HTMLLIElement) => {
                itemsRef.current[index] = el
              }}
              data-id={item.categoryId}
              key={item.categoryId}
            >
              {item.coverImg && (
                <div
                  className='w-full h-[100px] bg-top bg-cover'
                  style={{
                    backgroundImage: `url(${item.coverImg})`,
                  }}
                ></div>
              )}
              <div className='py-2 px-3 bg-white rounded-md'>
                <p className='text-sm font-semibold'>{item.title}</p>
                <p className='text-xs text-stone-400'>{item.summary}</p>
                <ul>
                  {item.products.map((product) => {
                    return (
                      <ProductItem
                        product={product}
                        key={product.productId}
                        isInCar={false}
                      />
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
        <ProductFooter />
      </ul>
    </>
  )
})
export default ProductList
