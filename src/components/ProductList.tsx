import { forwardRef, ReactNode, useEffect, useState } from 'react'
import { useMemoizedFn } from 'ahooks'
import fetchData from '../lib/fetchProductList'
import ProductItem from './ProductItem'
import ProductFooter from './ProductFooter'
import { ProductListType } from '../types/product'

type Props = {
  children?: ReactNode
  setCurrentMenu: (menuId: number) => void
}

type Ref = HTMLUListElement

// forwardRef 指定 ref 和 props 的类型
const ProductList = forwardRef<Ref, Props>(({ setCurrentMenu }, ref) => {
  // 获取产品列表
  const [productList, setProductList] = useState<ProductListType[]>([])

  // 不更新版的useCallback
  const callback = useMemoizedFn((entry) => {
    if (entry.isIntersecting) {
      const active = entry.target.getAttribute('data-id') || 1
      const activeId = +active.split('_')[1]
      setCurrentMenu(activeId)
    }
  })

  // // 观察产品列表
  // useInViewport([...listNode], {
  //   callback,
  //   root: () => document.getElementById('parent-scroll'),
  //   // 减少可视距离
  //   rootMargin: '-50px',
  //   threshold: 0.5,
  // })
  // 在数据加载完成后设置观察者
  useEffect(() => {
    const listNode = document.querySelectorAll('li[data-id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry)
        })
      },
      {
        root: document.getElementById('parent-scroll'),
        rootMargin: '-50px',
        threshold: 0.5,
      }
    )
    // 观察所有产品元素
    listNode.forEach((element) => {
      observer.observe(element)
    })
    return () => {
      observer.disconnect()
    }
  }, [productList, callback]) // 依赖于productList的变化

  useEffect(() => {
    fetchData().then((res: ProductListType[]) => {
      setProductList(res)
    })
  }, [])

  return (
    <>
      <ul
        ref={ref}
        id='parent-scroll'
        className='flex-1 font-noto space-y-4 overflow-y-auto scrollbar-hidden'
      >
        {productList.map((item) => {
          return (
            <li
              // // 将li的引用存入数组
              // ref={(el: HTMLLIElement) => {
              //   itemsRef.current[index] = el
              // }}
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
