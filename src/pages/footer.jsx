import React from 'react'
import { MdEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate()
  return (
    <div className=' bg-black text-white'>
      <div className='py-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-2 w-[90%] mt-0 mb-0 mr-auto ml-auto'>
        <div>
          <h2 className='text-[25px] font-normal mb-3'>About</h2>
          <p className='w-[90%]'>Mandlac pioneers IoT innovation, offering customizable smart water management solutions for residential, commercial, and multi-apartment buildings, revolutionizing everyday interactions with technology.</p>
          <div className='flex mt-4 gap-5'>
            <FaFacebookSquare className='w-5 h-5' />
            <FaYoutube className='w-5 h-5' />
            <FaInstagram className='w-5 h-5' />
            <FaLinkedin className='w-5 h-5' />
          </div>
        </div>
        <div>
          <h2 className='text-[25px] font-normal mb-3'>Explore</h2>
          <ul>
            <li onClick={() => navigate('/')} className='pb-2 cursor-pointer hover:text-amber-300'>What we do</li>
            <li onClick={() => navigate('/')} className='pb-2 cursor-pointer hover:text-amber-300'>Who we are</li>
            <li onClick={() => navigate('/blog')} className='pb-2 cursor-pointer hover:text-amber-300'>Blog</li>
            <li onClick={() => navigate('/menuContact')} className='pb-2 cursor-pointer hover:text-amber-300'>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className='text-[25px] font-normal mb-3'>Products</h2>
          <ul>
            <li className='pb-2'>Biometric</li>
            <li className='pb-2'>Fire Alarm</li>
            <li className='pb-2'>Smart Home</li>
            <li className='pb-2'>Smart Locker</li>
            <li className='pb-2'>Vital Sense</li>
          </ul>
        </div>
        <div>
          <h2 className='text-[25px] font-normal mb-3'>Contact Us</h2>
          <h4>Corporate Office</h4>
          <p className='text-[13px] mt-2 mb-2'>HD-127 ,RMZ Latitude,
            9th floor, WeWork, Hebbal,
            Bengaluru, Karnataka - 560024
          </p>
          <h4>Registered Office</h4>
          <p className='text-[13px] mt-2 mb-2'>543 / 2, Vandipettai,
            NH Main Road, Kadayanallur,
            Tamilnadu, India - 627751.</p>
          <div className='flex items-center gap-2'><MdEmail className='w-5 h-5 text-amber-400' />info@mandlac.com</div>
          <div className='flex items-center gap-2'><GiRotaryPhone className='w-5 h-5 text-amber-400' />1800-309-8980</div>
        </div>
      </div>
      <div className='text-center border-t-2 pt-5 pb-3'>© 2024 MandLac . All Rights Reserved.</div>
    </div>
  )
}

export default Footer