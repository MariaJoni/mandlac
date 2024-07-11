import React from 'react'
import nipponLogo from "../assets/MandlacLogo.png"
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
function Header() {
  return (
    <div className='flex w-[98%] bg-[#ffeb9b] justify-between items-center border-b-2 border-gray-200'>
      <img src={nipponLogo} className="w-28 ml-2" alt="" />
      <div>
        <ul className='flex gap-8'>
          <li className='font-semibold flex items-center'>What we do <IoIosArrowDown /></li>
          <li className='font-semibold flex items-center'>Who we are <IoIosArrowDown /></li>
          <li className='font-semibold'>Blog</li>
          <li className='font-semibold'>Contact</li>
        </ul>
      </div>
      <div className='flex'>
        <span> <IoSearchOutline /></span>
        <span className='bg-black text-white p-3 rounded'>Get Connected</span>
      </div>
    </div>
  )
}

export default Header