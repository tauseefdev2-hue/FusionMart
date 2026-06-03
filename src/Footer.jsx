import React, { useState } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IoLogoTiktok } from 'react-icons/io5'
import { LuYoutube } from "react-icons/lu";

const Footer = () => {
  const [showExchange, setShowExchange] = useState(true)
  const [showShipping, setShowShipping] = useState(false)

  return (
    <footer className="bg-white text-black px-6 py-10">
      
      {/* top section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        {/* logo */}
        <div>
          <p className='text-2xl font-black tracking-wide'><span className='text-gray-900'>Fusion</span><span className='text-blue-600'>Mart</span> </p>
        </div>

        {/* links */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">

          {/* Exchange */}
          <div>
            <p
              onClick={() => setShowExchange(!showExchange)}
              className="cursor-pointer font-semibold"
            >
              Exchange Policy
            </p>

            {showExchange && (
              <p className="text-sm text-gray-300 mt-2">
                Our goal is for every customer to be totally satisfied with their purchase. If this isn't the case, let us know and we'll do our best to make it right.
              </p>
            )}
          </div>

          {/* Shipping */}
          <div>
            <p
              onClick={() => setShowShipping(!showShipping)}
              className="cursor-pointer font-semibold"
            >
              Shipping Policy
            </p>

            {showShipping && (
              <p className="text-sm text-gray-300 mt-2">
                We ensure fast and safe delivery of all orders. Shipping time depends on your location but usually takes 3–7 days.
              </p>
            )}
          </div>

        </div>
      </div>

      {/* bottom line */}
     <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
  <p className="text-gray-500 text-sm">
    © 2026 Fusion Mart | Complete Family E-Store, Powered by Shopify
  </p>

  <div className="flex gap-4 text-xl">
    <FaFacebookF />
    <IoLogoTiktok />
    <FaInstagram />
    <LuYoutube />
  </div>
</div>
     
    </footer>
  )
}

export default Footer