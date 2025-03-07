import { Link, useLocation } from 'react-router-dom'
import { navList } from '../data/index'

type Nav = { path: string; content: string }

const Navbar = () => {
  // 获取路径信息
  const { pathname } = useLocation()

  return (
    <ul className='text-sm flex justify-between items-center'>
      {navList.map((item: Nav) => {
        return (
          <Link
            to={item.path}
            key={item.path}
            className={`py-1 ${
              '/' + item.path === pathname
                ? 'font-medium border-b-2 border-blue-800'
                : 'text-gray-600 '
            }`}
          >
            {item.content}
          </Link>
        )
      })}
    </ul>
  )
}
export default Navbar
