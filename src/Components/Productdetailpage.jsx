import React, { useState } from 'react'
import Carousel from './ImgL'
import ProductCard from './ProductCard'
import Desc from './Subcomponents/Desc'
import { useParams } from 'react-router-dom'
import { productdata } from './CardDescdata'

const Productdetailpage = () => {
    const [quantity,setQuantity]=useState(1)
    

    const [size,setSize]=useState('S')

    const increment=()=>{
        setQuantity(prev=>prev+1)
    }
    
    const decrement=()=>{
        if(quantity>1){
        setQuantity(prev=>prev-1)
    }}

    const {id}=useParams();
    const product=productdata.find((item)=>item.id===id)
            const sizesArray = product.sizes || ['S', 'M', 'L', 'XL', 'XXL'];

    if(!product)return <div className='text-center p-20  text-xl font-bold'>Product not fount</div>
  return (
    <>
      <div className="main flex p-12  flex-col min-[990px]:flex-row ">
      <div className="le w-full min-[990px]:w-1/2">
            {/* Negative margins and full width on mobile */}
            <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] min-[990px]:relative min-[990px]:left-0 min-[990px]:right-0 min-[990px]:-mx-0 min-[990px]:w-full">
                <div className="w-full">
                    <Carousel product={product}/>
                </div>
            </div>
        </div>
        <div className="ri gap-6 flex flex-col   min-[990px]:w-1/2 px-4 min-[990px]:px-0 min-[990px]:pr-14">
<h1 className="font-['Playfair_Display'] font-light text-[24px] leading-[29px] text-[#1a1a1a] ">{product.name}
</h1>

<div className="pr flex gap-2 items-center ">
<span className='text-[#DC2626] text-2xl '>{product.price}</span>
<span className='text-sm line-through text-sm'>{product.oldPrice}</span>
<span className='bg-red-500 pt-1 pl-2 pr-2 pb-1 text-white'>31% OFF</span></div>
<div className="size">
    <h5 className='font-semibold'>Size: S</h5>
    <div className="n flex gap-4 ">
        {sizesArray.map((item,index)=>{ return(
                    <button onClick={()=>setSize(item)                    } key={index} className={`border w-11 h-11 ${item===size?'bg-[#E07A2D] border-0':'border-gray-300'}`}>{item}</button>

        )})}
    </div>
</div>
<div className="quanti">
    <h5 className='font-semibold'>Quantity</h5>
    <div className="flex">  <button onClick={decrement} className='border-2 border-gray-400 w-11 h-11'>-</button>
        <button  className='border-2 border-gray-400 w-11 h-11'>{quantity}</button>
        <button className='border-2 border-gray-400 w-11 h-11' onClick={increment}>+</button>
       </div>
</div>
<div className="btn">
    <button className='w-full p-2 font-bold rounded-[6px] hover:border-[#E07A2D] border-2 bg-[#E07A2D] hover:text-[#E07A2D] text-white hover:bg-[#6B7280]'>Add To Cart</button>
    <button className='w-full p-2 font-bold rounded-[6px] bg-black text-white hover:bg-gray-700'>Buy it now</button>
</div>
<div className="tx flex flex-col gap-4">
    <p className='mt-2'>Upgrade your everyday style with the refined look of the <span className='font-semibold'> Men’s Signature Embroidered Contrast Neck Henley T-Shirt</span>. Designed to stand out, this tee features a stylish contrast ribbed neckline and a classic Henley button placket, giving it a smart yet relaxed appeal.

</p>
<p className=''>Crafted from soft, breathable fabric, it ensures all-day comfort while maintaining a clean and polished appearance. The embroidered chest emblem adds a premium touch, elevating the overall design with subtle sophistication. Perfect for casual wear or smart-casual occasions, this Henley tee is a versatile addition to any modern wardrobe.</p>
<h6 className='font-semibold mt-2'>Product Features:

</h6>
<ul className='list-disc list-inside p-2'>
   {product.features?.map((item,index)=>(
    <li key={index} className='text-gray-700'>{item}</li>
   ))}
</ul>
<h6 className='font-semibold mt-2'>Fabric & Care

</h6>
<ul className='list-disc list-inside p-2'>
   {product.fabric?.map((item,index)=>(
    <li key={index} className='text-gray-700' >{item}
</li>
   ))}
</ul>
</div>      <Desc/>

        </div>
      </div>
    </>
  )
}

export default Productdetailpage
