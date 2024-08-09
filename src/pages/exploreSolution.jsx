import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { TiTick } from "react-icons/ti";
import BadgeCheck from "../assets/badge-check.svg";

const ExploreSolution = () => {
  return (
    <div className="bg-[#fff6e4] py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 w-full mb-0 items-center">
          <div className="w-full lg:w-1/2 mt-10">
            <span className="font-extrabold font-mulish text-3xl lg:text-[40px]">
              Explore Our Solutions
            </span>
            <p className="font-normal font-roboto text-lg mt-4">
              We’re happy to answer any questions you may have and we <br/> 
              help youdetermine which of our services best fit your needs.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <img src={BadgeCheck} alt="badge" />
              <span className="font-roboto font-normal text-lg">
                Increased Productivity
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <img src={BadgeCheck} alt="badge" />
              <span className="font-roboto font-normal text-lg">
                Improved Efficiency
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <img src={BadgeCheck} alt="badge" />
              <span className="font-roboto font-normal text-lg">
                Enhanced Customer Experience
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <img src={BadgeCheck} alt="badge" />
              <span className="font-roboto font-normal text-lg">
                Innovation and Agility
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <img src={BadgeCheck} alt="badge" />
              <span className="font-roboto font-normal text-lg">
                Data-Driven Decision Making
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-10 bg-white p-10">
            <p className="text-xl lg:text-[24px] font-extrabold font-mulish pb-10">
              Get In Touch With Us
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3 pb-3">
              <Input
                type="text"
                placeholder="Your Name"
                className="font-roboto font-normal text-base"
              />
              <Input
                type="email"
                placeholder="Enter Email"
                className="font-roboto font-normal text-base"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3 pb-3">
              <Input
                type="text"
                placeholder="Subject"
                className="font-roboto font-normal text-base"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="font-roboto font-normal text-base"
              />
            </div>
            <div className="mt-3 pb-5">
              <Textarea
                placeholder="Type your message here."
                className="font-roboto font-normal text-base"
              />
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button className="mt-5 font-semibold font-roboto text-sm lg:text-base px-10">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSolution;
