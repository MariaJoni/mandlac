import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'
import { TiTick } from "react-icons/ti";

function Contact() {
  return (
    <div className='flex w-[80%] mt-10 mb-0 ml-auto mr-auto'>
      <div className='w-[40%]'>
        Explore Our Solutions
        <p>We’re happy to answer any questions you may have and we help you determine which of our services best fit your needs</p>
        <span><TiTick className='bg-amber-300' />Ready to boost your online presence</span>
        <span><TiTick className='bg-amber-300' />Don't miss Join our exclusive insights</span>
        <span><TiTick className='bg-amber-300' />Transform your business our IoT solutions</span>
        <span><TiTick className='bg-amber-300' />See results like never before. Click to schedule</span>
      </div>
      <div className='w-[60%]'>
        <p>Get In Touch With Us</p>
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Email" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Type your message here." />
      </div>
    </div>
  )
}

export default Contact