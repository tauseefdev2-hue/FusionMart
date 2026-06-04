import React from 'react'
import ProductCard from './ProductCard'
import {productdata} from './CardDescdata' 
const Carrdm = () => {
   
    
  return (

    <>
    <div className="mt-16">   <h1 className='text-center font-black text-3xl'>New Arrivals</h1>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{productdata.map((item,index)=>(
    <ProductCard key={item.id } product={item}/>
))}
    </div></div>  
</>  )
}

export default Carrdm
