import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { ImMail4 } from "react-icons/im";
import { GiRotaryPhone } from "react-icons/gi";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <div className="h-full w-full">
      <div className="bg-[url('./assets/Blog.png')] w-full h-[250px] md:h-[300px] lg:h-[350px] bg-no-repeat bg-cover relative -z-10 ">
        <div className="absolute -z-20 top-10 left-10 md:left-32 lg:left-32 md:top-32 lg:top-32 pt-2 pb-2 pl-1 pr-10 md:pt-5 md:pb-5 md:pl-3 text-white bg-[#565857] flex items-center gap-3 w-[200px] font-semibold text-[20px]">
          <MdConnectWithoutContact className="text-amber-400 h-8 w-8" /> Contact
          Us
        </div>
        <p className="absolute mt-5 top-24 left-10 text-[15px] text-white md:top-52 md:left-32 md:text-[25px] ">
          Reach out to us for product support or queries.
        </p>
      </div>
      <div className="px-20 flex justify-center items-center my-20 w-full">
        <div className="flex flex-col sm:flex-row gap-2 rounded-md w-[min(1200px,100%)] shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7879.560307208574!2d77.348635!3d9.083782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06859791071e9d%3A0x6ec4a53af155e48c!2sMandlac%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1720720750791!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="sm:w-1/2"
          />
          <div className="w-full sm:w-1/2  flex flex-col">
            <p className="mt-10 md:mt-16 ml-10 md:ml-0 font-bold text-[20px] md:text-[30px] lg:text-[40px] my-1">
              Get In Touch With Us
            </p>
            <p className="my-3 text-[15px] ml-10 md:ml-0 md:text-[20px] lg:text-[30px] font-bold lg:ml-4">
              Support & Assistance
            </p>
            <span className="flex gap-2 items-center ml-4">
              <ImMail4 className="text-amber-200 h-8 w-5" />
              <p className="text-gray-400 text-sm">info@mandlac.com</p>
            </span>
            <span className="flex gap-2 items-center ml-4 my-2">
              <GiRotaryPhone className="text-amber-200 h-8 w-5" />
              <p className="text-gray-400 text-sm">1800-309-8980</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-100">
        <div className="flex flex-col  items-center">
          <p className="text-gray-300 text-2xl mt-2">Contact Us</p>
          <h2 className="mt-5 font-semibold text-[45px] lg:my-5">
            Write a Message
          </h2>
        </div>
        <div className="w-screen flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 w-[75%] my-2">
            <Input type="name" placeholder="UserName" className="h-14" />
            <Input type="email" placeholder="Email" className="h-14" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 w-[75%]">
            <Input type="name" placeholder="Subject" className="h-14" />
            <Input type="number" placeholder="Phone" className="h-14" />
          </div>
          <div className="w-[75%] my-3">
            <Textarea placeholder="your message." className="h-28" />
          </div>
          <div className="my-5">
            <Button className="px-8">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
