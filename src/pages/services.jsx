import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Big_Data from "../assets/services/Big Data.jpg";
import Mobile_App_Development from "../assets/services/Mobile App Development.jpg";
import AI_ML from "../assets/services/AI_ML.jpg";
import Web_App_Development from "../assets/services/Web_App_Development.jpg";
import IoT_Solutions from "../assets/services/IoT_Solutions.jpg";
import Geo_Spatial from "../assets/services/GeoSpatial.jpg";
import Cloud_Solution from "../assets/services/Cloud_Solution.jpg";
import { IoIosArrowForward, IoIosMenu } from "react-icons/io";
import sectorMappings from "./contents";
import ExploreSolution from "./exploreSolution";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function Services() {
  const { sector } = useParams();
  const SectorComponent = sectorMappings[sector.toLowerCase()];
  const [selectedSection, setSelectedSection] = useState(
    SectorComponent[0].title
  );
  const sectionRefs = useRef({});

  const data = [
    {
      menu: "BigData",
      img: Big_Data,
      title: "Mandlac Solutions for Big Data",
      contant:
        "In today’s digital landscape, businesses face a common struggle: harnessing the immense potential of Big Data while navigating its inherent challenges. We specialize in harnessing the power of Big Data to help businesses make informed decisions, optimize operations, and uncover new opportunities. Our comprehensive Big Data services provide the tools and expertise you need to turn data into actionable insights. ",
    },
    {
      menu: "MobileAppDevelopment",
      img: Mobile_App_Development,
      title: "Mandlac Solutions for Mobile App Development",
      contant:
        "In the current mobile-centric era, businesses must provide seamless and engaging mobile experiences for their users. We specialize in developing innovative and user-friendly apps for both Android and iOS platforms. Our services are designed to help businesses boost engagement and achieve their goals. With our comprehensive mobile app development solutions, you can transform your app ideas into reality with the expertise and tools we provide.",
    },
    {
      menu: "AIML",
      img: AI_ML,
      title: "Mandlac Solutions for AI/ML",
      contant:
        "Our AI/ML services empower businesses to harness the power of artificial intelligence and machine learning. We develop custom AI/ML models to solve complex problems, improve decision-making, and optimize operations. Our solutions include advanced data analysis, predictive modeling, and automation of routine tasks. With a focus on ethical AI practices and seamless integration, we help businesses gain actionable insights and achieve measurable ROI, driving innovation and growth. ",
    },
    {
      menu: "WebAppDevelopment",
      img: Web_App_Development,
      title: "Mandlac Solutions for Web App Development",
      contant:
        "Web development encompasses the creation and maintenance of websites and web applications. It involves various aspects such as web design, content creation, coding, programming, and server configuration. Effective web development ensures that websites are functional, user-friendly, and aligned with business goals. It also includes optimizing websites for speed, security, and search engine visibility, enhancing user experience, and achieving business objectives.",
    },
    {
      menu: "IoTSolutions",
      img: IoT_Solutions,
      title: "Mandlac Solutions for IoT Solutions",
      contant:
        "In today’s interconnected world, businesses are grappling with the challenges and opportunities presented by the Internet of Things (IoT). We specialize in leveraging IoT technology to help businesses streamline operations, enhance productivity, and unlock new avenues for growth. Our comprehensive IoT solutions offer the tools and expertise needed to turn connected device data into actionable insights.",
    },
    {
      menu: "GeoSpatial",
      img: Geo_Spatial,
      title: "Mandlac Solutions for Geo-Spatial",
      contant:
        "In today’s interconnected world, businesses face the challenge of leveraging geo-spatial data to gain actionable insights and drive strategic decisions. We specialize in harnessing the power of geo-spatial technology to help businesses optimize operations, improve decision-making, and uncover new opportunities. Our comprehensive geo-spatial solutions provide the tools and expertise needed to turn location-based data into valuable insights.",
    },
    {
      menu: "CloudSolution",
      img: Cloud_Solution,
      title: "Mandlac Solutions for Cloud Solution",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the biotechnology  industry, driving R&D efficiency, regulatory compliance, bioprocess optimization, biobanking and data management, and personalized medicine initiatives. ",
    },
  ];

  const selectedIndustry = data.find(
    (item) => item.menu.toLowerCase() === sector.toLowerCase()
  );

  const handleSectionClick = (title) => {
    setSelectedSection(title);
    sectionRefs.current[title].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-[rgba(255,204,0,0.42)] to-[rgba(255,204,0,0)] h-auto flex mt-20">
        <div className="content flex flex-col-reverse md:flex-row items-center md:items-start w-[90%] mx-auto mt-20">
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-[32px] md:text-[40px] font-bold mt-5 md:mt-0">
              {selectedIndustry.title}
            </h1>
            <p className="mt-4">{selectedIndustry.contant}</p>
            <p className="mt-8 md:mt-18 flex justify-center md:justify-start items-center font-semibold text-[20px] gap-2">
              Let’s talk{" "}
              <span className="bg-amber-400 rounded-full p-2">
                <IoIosArrowForward />
              </span>
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={selectedIndustry.img} alt="Home" className="w-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full bg-transparent bg-gradient-to-b from-[#EDF8EB00] to-[#edf8eb] mt-5">
        <div className="hidden md:w-2/5 h-80 sticky top-24 md:flex flex-col items-center">
          {SectorComponent.map((section) => (
            <div
              key={section.title}
              onClick={() => handleSectionClick(section.title)}
              className={`${
                selectedSection === section.title ? "font-bold bg-[#E4ECE2]" : ""
              } p-3 h-12 rounded-sm cursor-pointer md:flex w-full md:w-[80%] relative items-center`}
            >
               <span
                className={`${
                  selectedSection === section.title
                    ? "text-lg font-roboto font-medium"
                    : "text-[17px] font-roboto font-normal"
                } ml-3`}
              >
                {section.title}
              </span> 
              {selectedSection === section.title && (
                <IoIosArrowForward className="absolute right-0 mx-3" />
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center h-16 top-24 sticky md:hidden bg-slate-300">
          <DropdownMenu className="">
            <DropdownMenuTrigger className="w-full flex gap-5 justify-between mx-5 items-center">
              <span className="text-base font-roboto font-normal">
              {selectedSection}
              </span>
              <IoIosMenu className="text-xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen">
              {SectorComponent.map((section) => (
                <DropdownMenuItem
                  key={section.title}
                  onClick={() => handleSectionClick(section.title)}
                  className="text-base font-roboto font-normal"
                >
                  {section.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:w-2/3 w-full h-full">
          {SectorComponent.map(
            (section) => (
                <div key={section.title} ref={(el) => (sectionRefs.current[section.title] = el)} className="p-3">
                  {section.content}
                </div>
              )
          )}
        </div>
      </div>
      <ExploreSolution />
    </div>
  );
}

export default Services;
