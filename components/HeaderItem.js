function HeaderItem({ Icon, title }) {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
      <Icon className='mb-1 h-8 text-gray-300 group-hover:animate-bounce' />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest text-gray-300'>{title}</p>
    </div>
  )
}

export default HeaderItem
