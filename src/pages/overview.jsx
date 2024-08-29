import React, { useState } from "react";
import banner from "../assets/overview/selfOverviewbanner.png";
import { IoIosArrowForward } from "react-icons/io";
import spanner from "../assets/overview/spanner.svg";
import construction from "../assets/overview/construction.svg";
import person from "../assets/overview/person.svg";
import worldwide from "../assets/overview/worldwide.svg";
import dart from "../assets/overview/darttarget.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExploreSolution from "./exploreSolution";
import ourVision from "../assets/overview/ourvision.png";
import ourMission from "../assets/overview/ourmission.png";
import chooseUs from "../assets/overview/chooseus.png";

function Overview() {
  const [selectedTab, setSelectedTab] = useState(0);

  const devTeam = [
    {
      img: spanner,
      count: 100,
      title: "Projects Completed",
    },
    {
      img: construction,
      count: 35,
      title: "Industries Served",
    },
    {
      img: person,
      count: 70,
      title: "Expertise Team",
    },
    {
      img: worldwide,
      count: 20,
      title: "Countries Serving",
    },
  ];

  const overviewContent = [
    {
      title: "Our Vision",
      img: ourVision,
      content:
        "To lead the transformation of smart water management, smart products worldwide through innovative IoT solutions, enhancing efficiency and sustainability in every sector we serve.",
    },
    {
      title: "Our Mission",
      img: ourMission,
      content:
        "Empower individuals and organizations with cutting-edge products with  latest  technology, tailored to their unique needs, to drive efficiency, conservation, and peace of mind.",
    },
    {
      title: "Why Choose Us",
      img: chooseUs,
      content:
        "Our dedication to listening to your needs and delivering customized solutions sets us apart. At Mandlac, we prioritize your satisfaction, providing dedicated attention and support every step of the way. ",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-gradient-to-b from-[rgba(255,204,0,0.42)] to-[rgba(255,204,0,0)] h-auto flex mt-20 ">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start w-[80%] mx-auto mt-20">
          <div className="md:w-1/2 w-full flex flex-col p-8">
            <span className="text-[32px] md:text-[40px] font-mulish font-extrabold mt-5 md:mt-0 text-center md:text-left">
              We Provide Your Future
            </span>
            <p className="mt-4 font-roboto font-normal text-lg text-center md:text-left">
              At the forefront of innovation, Mandlac is dedicated to
              revolutionizing the way we interact with technology.
              <br />
              Leveraging cutting-edge IoT technologies, we empower businesses to
              optimize operations, enhance efficiency, and drive growth in
              today's increasingly connected world
            </p>
            <p className="mt-8 md:mt-18 flex justify-center md:justify-start items-center font-semibold text-[20px] gap-2">
              Let’s talk{" "}
              <span className="bg-amber-400 rounded-full p-2">
                <IoIosArrowForward />
              </span>
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={banner} alt="Home" className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-[70%] md:w-[90%] flex flex-col md:flex-row gap-4 my-14 justify-around">
        {devTeam.map((team) => (
          <div className="flex flex-col bg-slate-100 p-10 gap-2 items-center">
            <img src={team.img} alt="icons" className=" w-[55px] h-[60px]" />
            <span className="font-mulish font-extrabold text-4xl">
              {team.count}+
            </span>
            <span className=" text-base font-roboto font-normal">
              {team.title}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-gradient-to-b from-[#EDF8EB] to-[rgba(237, 248, 235, 0.00)] flex my-10 justify-center">
        <div className="w-[90%] flex flex-col p-10">
          <span className="font-mulish font-extrabold text-[40px] text-center md:text-left">
            Who We Are
          </span>
          <div className="w-full flex flex-col-reverse md:flex-row md:items-start">
            <Tabs
              defaultValue={overviewContent[selectedTab].title.toLowerCase().replace(" ", "")}
              className="w-full md:w-1/2 flex flex-col justify-center md:items-start my-5"
            >
              <TabsList className="">
                {overviewContent.map((item, index) => (
                  <TabsTrigger
                    key={index}
                    className="font-roboto font-normal text-lg"
                    value={item.title.toLowerCase().replace(" ", "")}
                    onClick={() => setSelectedTab(index)} 
                  >
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent
                value={overviewContent[selectedTab].title
                  .toLowerCase()
                  .replace(" ", "")}
                className="font-roboto font-normal text-center md:text-left text-lg md:text-xl mt-10 mx-5"
              >
                {overviewContent[selectedTab].content}
              </TabsContent>
            </Tabs>
            <div className="w-full mt-5 md:w-1/2 flex justify-center">
              <img
                src={overviewContent[selectedTab].img}
                alt="person"
                className="w-full md:w-[80%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ExploreSolution />
      </div>
    </div>
  );
}

export default Overview;
