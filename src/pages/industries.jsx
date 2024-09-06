import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosMenu } from "react-icons/io";
import Hospitality from "../assets/industries/Hospitality.jpg";
import Airports from "../assets/industries/Airports.png";
import Aviation from "../assets/industries/Aviation.jpg";
import Institutions from "../assets/industries/Institutions.jpg";
import Automotive from "../assets/industries/Automotive.jpg";
import Banking from "../assets/industries/Banking.jpg";
import Biotechnology from "../assets/industries/Biotechnology.jpg";
import Capital_Markets from "../assets/industries/Capital Markets.jpg";
import Distribution from "../assets/industries/Distribution.jpg";
import Oil_gas from "../assets/industries/Oil & gas.jpg";
import Fisheries from "../assets/industries/Fisheries.jpg";
import Government from "../assets/industries/Government.jpg";
import Healthcare from "../assets/industries/Healthcare.jpg";
import Consumer_Goods from "../assets/industries/Consumer Goods.jpg";
import Robotics from "../assets/industries/Robotics.jpg";
import Insurance from "../assets/industries/Insurance.jpg";
import Life_Science from "../assets/industries/Life Science.jpg";
import Railways from "../assets/industries/Railways.jpg";
import Media from "../assets/industries/Media.jpg";
import Mining from "../assets/industries/Mining.jpg";
import Energy_Utilities from "../assets/industries/Energy & Utilities.jpg";
import Retail from "../assets/industries/Retail.jpg";
import Travel from "../assets/industries/Travel.jpg";
import Manufacturing from "../assets/industries/Manufacturing.jpg";
import Pharmaceuticals from "../assets/industries/Pharmaceuticals.jpg";
import Tele_communications from "../assets/industries/Tele communications.jpg";
import { useParams } from "react-router-dom";
import sectorMappings from "./contents";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ExploreSolution from "./exploreSolution";

function Industries() {
  const { sector } = useParams();
  const SectorComponent = sectorMappings[sector.toLowerCase()];
  const [selectedSection, setSelectedSection] = useState(
    SectorComponent[0].title
  );
  const sectionRef = useRef({});
  const currentVisibleSection = useRef(selectedSection);

  const handleSectionClick = (title) => {
    setSelectedSection(title);
    currentVisibleSection.current = title;
    sectionRef.current[title].scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.dataset.title;
            if (currentVisibleSection.current !== title) {
              currentVisibleSection.current = title;
              setSelectedSection(title);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: window.innerWidth <= 768 ? "0px 0px -40% 0px" : "0px 0px -20% 0px",
        threshold: window.innerWidth <= 768 ? 0.3 : 0.4,
      }
    );

    SectorComponent.forEach((section, index) => {
      const element = sectionRef.current[section.title];
      if (element) observer.observe(element);

      if (index === SectorComponent.length - 1) {
        const lastElement = sectionRef.current[section.title];
        if (lastElement) {
          const lastObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setSelectedSection(section.title);
                }
              });
            },
            {
              root: null,
              rootMargin: window.innerWidth <= 768 ? "0px 0px -20% 0px" : "0px 0px -10% 0px",
              threshold: 1.0,
            }
          );
          lastObserver.observe(lastElement);
        }
      }
    });

    return () => {
      SectorComponent.forEach((section) => {
        const element = sectionRef.current[section.title];
        if (element) observer.unobserve(element);
      });
    };
  }, [SectorComponent]);



  const data = [
    {
      menu: "Hospitality",
      img: Hospitality,
      title: "Mandlac Solutions for Hospitality",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the hospitality industry, driving efficiency, guest satisfaction, revenue optimization, and brand reputation management.",
    },
    {
      menu: "Airports",
      img: Airports,
      title: "Mandlac Solutions for Smart Airports",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the airports industry, driving passenger satisfaction, operational efficiency, safety and security, revenue generation, and environmental sustainability.",
    },
    {
      menu: "Aviation",
      img: Aviation,
      title: "Mandlac Solutions for Smart Aviation",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the aviation industry, driving operational efficiency, passenger experience enhancement, aircraft maintenance and engineering, air traffic management, and environmental sustainability. ",
    },
    {
      menu: "Institutions",
      img: Institutions,
      title: "Mandlac Solutions for Institutions",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of institutions, driving efficiency, transparency, compliance, and stakeholder engagement.",
    },
    {
      menu: "Automotive",
      img: Automotive,
      title: "Next-generation automotive IT developments",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the automotive industry, driving innovation, efficiency, and customer satisfaction. ",
    },
    {
      menu: "Banking",
      img: Banking,
      title: "IT Trends in Banking Industry",
      contant:
        "Mandlac Software Services offers tailored solutions to address the diverse needs of the banking industry, driving innovation, operational efficiency, enhanced security, and superior customer experiences. ",
    },
    {
      menu: "Biotechnology",
      img: Biotechnology,
      title: "Mandlac Solutions for Biotechnology",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the biotechnology  industry, driving R&D efficiency, regulatory compliance, bioprocess optimization, biobanking and data management, and personalized medicine initiatives. ",
    },
    {
      menu: "CapitalMarkets",
      img: Capital_Markets,
      title: "Mandlac Solutions for Capital Markets",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the capital markets industry, driving innovation, efficiency, compliance, and client satisfaction. ",
    },
    {
      menu: "Distribution",
      img: Distribution,
      title: "Mandlac Solutions for Distribution",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the distribution industry, driving inventory management, order fulfillment, supply chain visibility, customer relationship management, and compliance management for efficient and competitive distribution operations.",
    },
    {
      menu: "Oilgas",
      img: Oil_gas,
      title: "Mandlac Solutions for Oil & gas",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the oil and gas industry, driving efficiency, compliance, sustainability, and strategic decision-making.",
    },
    {
      menu: "Fisheries",
      img: Fisheries,
      title: "Mandlac Solutions for Fisheries",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the fisheries industry, driving sustainability, compliance, traceability, and market competitiveness.",
    },
    {
      menu: "Government",
      img: Government,
      title: "Mandlac Solutions for Government",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the government industry, driving innovation, transparency, efficiency, and citizen engagement.",
    },
    {
      menu: "Healthcare",
      img: Healthcare,
      title: "Mandlac Solutions for Healthcare",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the healthcare industry, driving innovation, efficiency, patient safety, and improved outcomes.",
    },
    {
      menu: "ConsumerGoods",
      img: Consumer_Goods,
      title: "Mandlac Solutions for Consumer Goods",
      contant:
        "Mandlac Software Services offers customized solutions to address the unique needs of the consumer goods industry, driving efficiency, innovation, customer satisfaction, and sustainability.",
    },
    {
      menu: "Robotics",
      img: Robotics,
      title: "Mandlac Solutions for Robotics",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the robotics industry, driving robotics design and development, motion control and planning, perception and sensing, autonomous navigation, and human-robot collaboration for innovative and efficient robotic systems.",
    },
    {
      menu: "Insurance",
      img: Insurance,
      title: "Mandlac Solutions for Insurance",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the insurance industry, driving innovation, efficiency, compliance, and fraud prevention.",
    },
    {
      menu: "LifeScience",
      img: Life_Science,
      title: "Mandlac Solutions for Life Science",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the life sciences industry, driving innovation, efficiency, compliance, and patient-centric care.",
    },
    {
      menu: "Railways",
      img: Railways,
      title: "Mandlac Solutions for Railways",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the railways industry, driving operational efficiency, passenger satisfaction, safety and security, infrastructure maintenance, and environmental sustainability.",
    },
    {
      menu: "Media",
      img: Media,
      title: "Mandlac Solutions for Media",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the media industry, driving innovation, efficiency, audience engagement, and content monetization.",
    },
    {
      menu: "Mining",
      img: Mining,
      title: "Mandlac Solutions for Mining",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the mining industry, driving efficiency, compliance, sustainability, and strategic decision-making.",
    },
    {
      menu: "EnergyUtilities",
      img: Energy_Utilities,
      title: "Mandlac Solutions for Energy & Utilities",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the energy and utilities industry, driving innovation, operational efficiency, enhanced security, and sustainable practices.",
    },
    {
      menu: "Retails",
      img: Retail,
      title: "Mandlac Solutions for Retail",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the retail industry, driving innovation, efficiency, customer satisfaction, and compliance.",
    },
    {
      menu: "Travel",
      img: Travel,
      title: "Mandlac Solutions for Travel",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the travel industry, driving innovation, efficiency, customer satisfaction, and security.",
    },
    {
      menu: "Manufacturing",
      img: Manufacturing,
      title: "Mandlac Solutions for Manufacturing",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the manufacturing industry, driving innovation, efficiency, quality, and safety.",
    },
    {
      menu: "Pharmaceuticals",
      img: Pharmaceuticals,
      title: "Mandlac Solutions for Pharmaceuticals",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the pharmaceuticals industry, driving regulatory compliance, research and development innovation, supply chain efficiency, drug safety, and patient engagement.",
    },
    {
      menu: "Telecommunications",
      img: Tele_communications,
      title: "Mandlac Solutions for Tele communications",
      contant:
        "Mandlac Software Services offers tailored solutions to meet the diverse needs of the telecommunications industry, driving innovation, efficiency, customer satisfaction, and security.",
    },
  ];


  const selectedIndustry = data.find(
    (item) => item.menu.toLowerCase() === sector.toLowerCase()
  );


  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-[rgba(255,204,0,0.42)] to-[rgba(255,204,0,0)] h-auto flex mt-20 ">
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
              className={`${selectedSection === section.title ? "font-bold bg-[#E4ECE2]" : ""
                } p-3 h-12 rounded-sm cursor-pointer md:flex w-full md:w-[80%] relative items-center`}

            >
              <span
                className={`${selectedSection === section.title
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
        <div className="flex w-full justify-center h-16 top-20 sticky md:hidden bg-slate-300">
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
        <div className="w-full md:w-3/5 h-full">
          {SectorComponent.map((section) => (
            <div
              key={section.title}
              data-title={section.title}
              ref={(el) => (sectionRef.current[section.title] = el)}
              className="p-3 md:w-[90%] min-h-auto"
            >
              {section.content}
            </div>
          ))}
        </div>
      </div>
      <ExploreSolution />
    </div>
  );
}

export default Industries;
