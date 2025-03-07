type ButtonProps = { children: string; type?: number; onClick?: () => void }

const colors = [
  ' bg-orange-400 text-white',
  ' bg-blue-800 text-white',
  ' bg-white text-blue-800 border-solid border-blue-800 border-[1px]',
  ' bg-white border-solid border-slate-400 border-[1px]',
]

const Button = ({ children, type = 0, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full font-serif w-5 h-5 flex items-center leading-none justify-center${colors[type]}`}
    >
      {children}
    </button>
  )
}
export default Button
