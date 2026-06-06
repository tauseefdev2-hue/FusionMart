import React from 'react'

const Womenbanner = () => {
  return (
    <>
     <div className="div relative w-full h-[450px] ">
      <img src="../../../public/Women_Western_Image.webp " className='w-full h-full object-cover' alt="" />
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/9 flex flex-col items-center gap-4 text-center">
        <h1 className='font-semibold text-5xl text-white'>KIDS</h1>
        <button className=' bg-white  hover:bg-black hover:text-white text-2xl p-3 rounded-2xl'>Shop Now</button>
      </div>
   </div> 
    </>
  )
}

export default Womenbanner
