import MenuList from '../components/MenuList'
import ProductList from '../components/ProductList'
import { useEffect, useRef, useState, memo } from 'react'
import { useMemoizedFn } from 'ahooks'
// 使用memo优化组件
const MemoMenuList = memo(MenuList)
const MemoProductList = memo(ProductList)

const HomePage = () => {
  // 强制刷新的state
  // const [products, setProducts] = useState<HTMLLIElement[]>([])
  // 当前菜单
  const [currentMenu, setCurrentMenu] = useState<number>(1)
  // 获取产品列表
  // const productsRef = useRef<HTMLLIElement[]>([])
  const productsRef = useRef<HTMLUListElement>(null)
  // 菜单列表
  const menusRef = useRef<HTMLLIElement[]>([])

  // 避免不必要的重建
  const handleChangeMenu = useMemoizedFn((menuId: number) => {
    const listNode = productsRef.current
    // 获取当前展示产品
    const currentProduct = listNode?.querySelectorAll('li[data-id]')[menuId - 1]
    // 滚动到指定位置
    currentProduct?.scrollIntoView({
      // instant 不会让中途元素触发IntersectionObserver的监听
      behavior: 'instant',
    })

    // 处理没有产品的情况
    if (!currentProduct) return
    setCurrentMenu(menuId)
  })

  // 设置当前菜单时滚动菜单
  useEffect(() => {
    const menu = menusRef.current[currentMenu - 1]
    // 设置当前菜单
    menu.scrollIntoView({
      behavior: 'smooth',
    })
  }, [currentMenu])

  return (
    <div className='container flex'>
      <MemoMenuList
        currentMenu={currentMenu}
        handleChangeMenu={handleChangeMenu}
        ref={menusRef}
      />
      <MemoProductList ref={productsRef} setCurrentMenu={setCurrentMenu} />
    </div>
  )
}
export default HomePage
