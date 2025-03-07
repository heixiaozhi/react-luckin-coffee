import MenuList from '../components/MenuList'
import ProductList from '../components/ProductList'
import { useEffect, useRef, useState, memo } from 'react'
import { useInViewport, useMemoizedFn } from 'ahooks'

// 使用memo优化组件
const MemoMenuList = memo(MenuList)
const MemoProductList = memo(ProductList)

const HomePage = () => {
  // 强制刷新的state
  const [refresh, setRefresh] = useState(false)
  // 当前菜单
  const [currentMenu, setCurrentMenu] = useState<number>(1)
  // 获取产品列表
  const productsRef = useRef<HTMLLIElement[]>([])

  // 避免不必要的重建
  const handleChangeMenu = useMemoizedFn((menuId: number) => {
    // 获取当前展示产品
    const currentNode = productsRef.current[menuId - 1]
    // 滚动到指定位置
    currentNode?.scrollIntoView({
      behavior: 'smooth',
    })

    setCurrentMenu(menuId)
  })

  // 不更新版的useCallback
  const callback = useMemoizedFn((entry) => {
    if (entry.isIntersecting) {
      const active = entry.target.getAttribute('data-id') || 1
      const activeId = +active.split('_')[1]
      setCurrentMenu(activeId)
    }
  })

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         callback(entry)
  //       })
  //     },
  //     {
  //       root: document.getElementById('parent-scroll'),
  //       rootMargin: '-50px',
  //       threshold: 0.5,
  //     }
  //   )
  //   // 观察所有产品元素
  //   productsRef.current.forEach((element) => {
  //     if (element) observer.observe(element)
  //   })

  //   // 清理函数
  //   return () => {
  //     productsRef.current.forEach((element) => {
  //       if (element) observer.unobserve(element)
  //     })
  //     observer.disconnect()
  //   }
  // }, [callback])

  useInViewport(productsRef.current, {
    callback,
    root: () => document.getElementById('parent-scroll'),
    // 减少可视距离
    rootMargin: '-50px',
    threshold: 0.5,
  })

  // 强制刷新，使useInViewport生效
  useEffect(() => {
    if (productsRef.current.length > 0) {
      setRefresh(true)
    }
  }, [])

  return (
    // refresh强制重新渲染
    <div className='container flex' key={refresh ? 1 : 0}>
      <MemoMenuList
        currentMenu={currentMenu}
        handleChangeMenu={handleChangeMenu}
      />
      <MemoProductList ref={productsRef} />
    </div>
  )
}
export default HomePage
