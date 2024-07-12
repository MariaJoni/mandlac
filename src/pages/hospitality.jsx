import React from 'react'
import '../App.css'
import HomeImg from "../assets/homeImg.jpg"
import { IoIosArrowForward } from "react-icons/io";
import Details from './details';
import Contact from './contact';
function Hospitality() {
  return (
    <>
      <div className="Home">
        <div className='content flex flex-col-reverse md:flex-row items-center md:items-start w-[90%] mx-auto'>
          <div className='md:w-1/2 w-full text-center md:text-left'>
            <h1 className='text-[32px] md:text-[40px] font-bold mt-5 md:mt-0'>Mandlac Solutions for Hospitality</h1>
            <p className='mt-4'>Mandlac Software Services offers tailored solutions to meet the diverse needs of the hospitality industry, driving efficiency, guest satisfaction, revenue optimization, and brand reputation management.</p>
            <p className='mt-8 md:mt-24 flex justify-center md:justify-start items-center font-semibold text-[20px] gap-2'>Let’s talk <span className='bg-amber-400 rounded-full p-2'><IoIosArrowForward /></span></p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={HomeImg} alt="Home" className='w-full h-auto' />
          </div>
        </div>
      </div>
      <Details />
      <Contact />
    </>
  )
}

export default Hospitality
