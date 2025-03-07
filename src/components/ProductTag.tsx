const ProductTag = ({ children }: { children: string }) => {
  return (
    <span className='ml-1 text-[10px] p-1 rounded-sm bg-orange-100 font-medium text-stone-800'>
      {children}
    </span>
  )
}
export default ProductTag
