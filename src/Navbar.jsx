import React, { useState } from 'react'
import { FaApple, FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
    <div className='container'>
<div className="left">{!open&&(    <FaApple />
)}

    </div>      
<div className="mid">
    <ul>
        <li><a href="#">MEN</a></li>
        <li><a href="#">WOMEN</a></li>
        <li><a href="#">KIDS</a></li>
        <li><a href="#">ACCESSORIES</a></li>
        <li><a href="#">FRAGRANCES</a></li>
        </ul></div>      
<div className="right">{!open&&(<><FaSearch /><IoMdCart /></>)}<button onClick={()=>setOpen(!open)}>{open?<IoClose/>:<GiHamburgerMenu className='hmb' />}</button>


</div>      
    </div>

{open &&(
      <div className="mobile-menu">
        <ul>
          <li><a href="#">MEN</a></li>
          <li><a href="#">WOMEN</a></li>
          <li><a href="#">KIDS</a></li>
          <li><a href="#">ACCESSORIES</a></li>
          <li><a href="#">FRAGRANCES</a></li>
        </ul>
      </div>
)}







</>  )
}

export default Navbar
