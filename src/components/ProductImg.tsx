const ProductImg = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className='w-[80px] h-[80px] relative flex items-center justify-center'>
      <div className='absolute inset-0 rounded-full bg-orange-400 z-[1] scale-75' />
      <img
        className='w-[70px] h-[70px] object-cover relative z-[2]'
        src={src}
        alt={alt}
      />
    </div>
  )
}
export default ProductImg
