const Overlay = ({ onClick }: { onClick: () => void }) => {
  return <div onClick={onClick} className='bg-over transition-all'></div>
}
export default Overlay
