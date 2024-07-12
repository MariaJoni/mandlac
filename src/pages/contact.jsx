import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'
import { TiTick } from "react-icons/ti";

function Contact() {
  return (
    <div className='bg-[#fff6e4] pb-10'>
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-4 w-full mb-0'>
          <div className='w-full lg:w-[40%] mt-10'>
            <h1 className='font-bold text-3xl lg:text-[40px]'>Explore Our Solutions</h1>
            <p className='font-medium mt-4'>We’re happy to answer any questions you may have and help you determine which of our services best fit your needs</p>
            <div className='flex items-center gap-3 mt-5'>
              <TiTick className='bg-amber-300 rounded-sm' />Ready to boost your online presence
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <TiTick className='bg-amber-300 rounded-sm' />Don't miss Join our exclusive insights
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <TiTick className='bg-amber-300 rounded-sm' />Transform your business with our IoT solutions
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <TiTick className='bg-amber-300 rounded-sm' />See results like never before. Click to schedule
            </div>
          </div>
          <div className='w-full lg:w-[60%] mt-10 lg:mt-10 bg-white p-10'>
            <p className='text-2xl lg:text-[35px] font-bold'>Get In Touch With Us</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3'>
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Enter Email" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3'>
              <Input type="text" placeholder="Subject" />
              <Input type="tel" placeholder="Phone Number" />
            </div>
            <div className='mt-3'>
              <Textarea placeholder="Type your message here." />
            </div>
            <div className='flex justify-center lg:justify-start'>
              <Button className="mt-5 font-bold text-lg lg:text-[20px] px-10">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
