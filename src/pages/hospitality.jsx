import React from 'react'
import '../App.css'
import HomeImg from "../assets/homeImg.jpg"
import { IoIosArrowForward } from "react-icons/io";
function Hospitality() {
  return (
    <div className="Home">
      <div className='content'>
        <div>
          <h1 className='text-[40px] font-bold'>Mandlac Solutions for Hospitality</h1>
          <p> Mandlac Software Services offers tailored solutions to meet the diverse needs of the hospitality industry, driving efficiency, guest satisfaction, revenue optimization, and brand reputation management.</p>
          <p className='mt-24 flex items-center font-semibold text-[20px] gap-2'>Let’s talk <span className='bg-amber-400 rounded'><IoIosArrowForward /></span></p>
        </div>
        <div className="w-[100%] ml-2" >
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hospitality
