import { menuList } from '../data'

const MenuList = ({
  currentMenu,
  handleChangeMenu,
}: {
  currentMenu: number
  handleChangeMenu: (menuId: number) => void
}) => {
  return (
    <ul className='basis-1/5 text-xs bg-slate-50 overflow-y-auto scrollbar-hidden font-noto text-stone-600 text-center'>
      {menuList.map((menu) => {
        return (
          <li
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
    </ul>
  )
}
export default MenuList
