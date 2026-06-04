import React from 'react'
import { PiVanLight } from "react-icons/pi";
import { FiRefreshCw } from "react-icons/fi";
import {BsShieldCheck} from 'react-icons/bs'
const Desc = () => {
  return (
    <>
    <div className="l flex flex-col gap-4 mt-3">
      <hr />



      <div className="n flex">   <p className='flex items-center gap-2 text-gray-700'>  <PiVanLight /> Secure Payment</p>
      <p className='flex items-center gap-2 text-gray-700'>  <FiRefreshCw />Free Shipping Over 5000
</p>
<p className='flex items-center gap-2 text-gray-700'><BsShieldCheck />30-Day Returns</p>

</div>
   
      <hr /></div>
    </>
  )
}

export default Desc
