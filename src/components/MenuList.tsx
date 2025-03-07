import { forwardRef, useImperativeHandle, useRef } from 'react'
import { menuList } from '../data'

type Props = {
  currentMenu: number
  handleChangeMenu: (menuId: number) => void
}

type Ref = HTMLLIElement[]

const MenuList = forwardRef<Ref, Props>(
  ({ currentMenu, handleChangeMenu }, ref) => {
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

    return (
      <ul className='basis-1/5 text-xs bg-slate-50 overflow-y-auto scrollbar-hidden font-noto text-stone-600 text-center'>
        {menuList.map((menu, index) => {
          return (
            <li
              // 将li的引用存入数组
              ref={(el: HTMLLIElement) => {
                itemsRef.current[index] = el
              }}
              className={`py-3 px-2 transition-all ${
                menu.id === currentMenu
                  ? 'text-stone-800 font-semibold bg-slate-200'
                  : ''
              }`}
              key={menu.id}
              onClick={() => handleChangeMenu(menu.id)}
            >
              {menu.name}
            </li>
          )
        })}
        <div className='h-[200px]'></div>
      </ul>
    )
  }
)
export default MenuList
