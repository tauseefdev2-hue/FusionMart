import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const ProductCard = () => {
  return (
    <>
      <div className="contain w-[309px] h-[467px] bg-white group shadow-md transition-all duration-300 hover:shadow-2xl overflow-hidden " >
         <div className="im relative overflow-hidden h-[300px]  ">
            <img src="../../public/download.webp" alt=""     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> 
        <div className="absolute top-0 left-0 w-full h-full bg-white transform translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" ><img src="../../public/download (1).webp" alt="" className='w-full h-full object-cover'/></div>



<div className="badge absolute bg-red-600 top-2 left-2 px-2 py-1 rounded-lg text-xs font-bold text-white">-30%</div><div><button  className="hear group-hover:opacity-100 opacity-0 absolute top-2 right-2 px-2 py-1 rounded-full font-bold text-black bg-white hover:scale-110 transition-all duration-200 "><FaRegHeart /></button>
</div></div>


        <div className="p-3">
            <p className="font-['Work_Sans'] font-normal text-gray-500 text-sm leading-5"> Men's Round Neck Contrast Printed Pocket Tee Shirt - Red</p>
            <div className="mt-3 mb-4">
                <span className='text-2xl font-bold text-gray-900'>From Rs.1,095.00</span>
                <span className='ml-2 text-sm text-gray-400 line-through'>Rs.1,595.00</span>
                <span></span>
            </div>
            <div className="n flex gap-3.5">  <button className="w-11 h-11 rounded-xl border-2 border-gray-200 bg-white font-semibold hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-200">
  S
</button>
            <button className='border-2 w-11 h-11 rounded-xl border-gray-200 bg-white font-semibold hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-200 '><a href="#">M</a></button>
                <button className='border-2 w-11 h-11 rounded-xl border-gray-200 bg-white font-semibold hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-200'><a href="#">L</a></button>
                        <button className='border-2 w-11 h-11 rounded-xl border-gray-200 bg-white font-semibold hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-200'><a href="#">XL</a></button>
            <button className='border-2 w-11 h-11 rounded-xl border-gray-200 bg-white font-semibold hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-200 '><a href="#">XXL</a></button></div>
         
          
        </div>
      </div>
    </>
  )
}

export default ProductCard
