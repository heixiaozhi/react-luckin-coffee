import Navbar from './Navbar'
import heroImg from '../assets/images/hero.jpg'

const Header = () => {
  return (
    <header>
      <img src={heroImg} alt='hero' className='w-full h-[150px] object-cover' />
      <div className='shadow px-4 py-2 font-noto'>
        <h3 className='font-serif italic mb-4 text-blue-800'>
          luckin coffee 邀你一起
        </h3>
        <Navbar />
      </div>
    </header>
  )
}
export default Header
