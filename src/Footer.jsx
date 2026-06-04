import React, { useState } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IoLogoTiktok } from 'react-icons/io5'
import { LuYoutube } from "react-icons/lu";

const Footer = () => {
  const [showExchange, setShowExchange] = useState(true)
  const [showShipping, setShowShipping] = useState(false)

  return (
    <footer className=" text-black px-6 py-10 bg-[#F9FAFB] p-5 mt-4 ">
      
      {/* top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start md:items-stretch justify-between gap-10 ">

        {/* logo */}
        <div className="lk flex flex-col gap-3">
        <div>
          <p className='text-2xl font-black tracking-wide'><span className='text-gray-900'>Fusion</span><span className='text-blue-600'>Mart</span> </p>
        </div>
<div className="de flex flex-col gap-2">
    <span>Hangree is a modern fashion brand focused on stylish, comfortable, and</span> <span>affordable clothing for men, women, and kids. From everyday essentials to trend-driven casual wear, Hangree</span>
    {/* <span>affordable clothing for men, women, and kids. From everyday essentials to trend-driven casual wear, Hangree </span> */}
  <span>delivers quality fabrics, smart fits, and contemporary designs made for every season and lifestyle.</span> 
</div>
</div>

       

          {/* Shipping */}
        

 <div className="m  flex flex-col gap-4">
  <div className="fir flex flex-col gap-2">
  <h5 className='font-bold '>Our Working Hours
</h5>
<p>Monday - Saturday
</p>
<p>11:00 AM - 7:00 PM

</p>
</div>
<div className="sec flex flex-col gap-2"><h5 className='font-bold'>Our Warehouse Address
</h5>
<p>46-H2, Johar Town, Lahore
</p></div>
<div className="thi flex flex-col gap-2">
<h5 className='font-bold'>Contact US
</h5>
<p>Call Or WhatsApp
</p>
<p>+92 3000 725071

</p></div>
 </div>

 <div className="thre flex flex-col gap-4 text-sm ">
  <h3 className='font-bold '>Quick Links</h3>
  <p className='text-gray-600'>MEN</p>
  <p className='text-gray-600'>WOMEN</p>
  <p className='text-gray-600'>KIDS</p>
  <p className='text-gray-600'>ACCESSORIES</p>
  <p className='text-gray-600' >FRAGRANCES</p>
 </div>
 
 <div className="n flex flex-col gap-4">
 <h3 className='font-bold text-xl'>Newsletter
</h3>
<p className='text-gray-600'>Subscribe to receive updates, access to exclusive deals, and more.

</p>
<div className="se"><input className='border border-2 p-2 border-gray-400' type="text" name="" id="" placeholder='Your email address' />
<button className='p-3 bg-[#E07A2D] hover:text-[#E07A2D] text-white hover:bg-white border hover:bg-[#e07a2d]'>Subscribe</button></div>
</div>
     </div>

     <p className='mt-19'>© 2026 Fusion <span className='text-bold text-[#e07a2d]'>Mart</span>. All rights reserved. Powered by <span className='text-bold text-[#e07a2d]'>Fusion Mart</span> </p>
    </footer>
  )
}

export default Footer