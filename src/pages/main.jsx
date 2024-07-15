import React from "react";
import sparkler from "../assets/sparkler.png";
import bannerLeft from "../assets/bannerLeft.svg";
import bannerRight from "../assets/bannerRight.svg";
import homebgremovebg from "../assets/homebgremovebg.png";

function Main() {
  return (
    <div className="Hospitality flex lg:relative justify-center">
      <div className="mt-10 flex flex-col items-center">
        <div className="flex gap-2 items-center p-2 justify-center bg-[#fff6ce] rounded-[20px] my-2">
          <img src={sparkler} alt="Sparkler" className="h-5 w-5" />
          <span className="md:ml-3 font-normal text-[14px] md:text-[20px]">
            We Provide IoT innovations for Industrial Projects
          </span>
          <img src={sparkler} alt="Sparkler" className="h-5 w-5" />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-[#020202] text-[1.5rem] md:text-[3rem] lg:text-[3.5rem]">
            Discover Mandlac and
          </span>
          <span className="font-bold text-[#020202] text-[1.5rem] md:text-[3rem] lg:text-[3.5rem]">
            Experience the Future of IOT
          </span>
        </div>
        <div className="flex flex-col items-center mt-10">
          <span className="w-[min(800px,100%)] text-c text-[15px] px-5 lg:px-8 lg:text-[20px] font-normal lg:tracking-[1px]">
            At the forefront of innovation, Mandlac is dedicated to
            revolutionizing the way we interact with technology.
          </span>
          <span className="text-[15px] px-5 lg:px-8 lg:text-[20px] font-normal lg:tracking-[1px]">
            Leveraging cutting-edge IoT technologies, we empower businesses to
            optimize operations, enhance efficiency, and drive growth in today’s
            increasingly connected world.
          </span>
        </div>
        <div className="mt-20 w-[85%] h-[250px] md:w-[75%] md:h-[300px] lg:w-[75%] lg:h-[400px]">
          <img src={homebgremovebg} alt="banner" />
        </div>
      </div>

      <span className="absolute left-0 top-56 md:left-0 md:top-44 lg:left-3 lg:top-36">
        <img
          src={bannerLeft}
          alt="speaker"
          className="w-[5rem] h-[11rem] md:w-[7rem] md:h-[11rem] lg:w-[9rem] lg:h-[12rem]"
        />
      </span>
      <span className="absolute right-0 top-72">
        <img
          src={bannerRight}
          alt="speaker"
          className="w-[5rem] h-[8rem] md:w-[9rem] md:h-[10] lg:w-[10rem] lg:h-[12rem]"
        />
      </span>
    </div>
  );
}

export default Main;
