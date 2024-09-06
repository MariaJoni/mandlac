import React, { useEffect, useState } from "react";
import star from "../assets/star.png";
import bannerLeft from "../assets/bannerLeft.svg";
import bannerRight from "../assets/bannerRight.svg";
import homeVector from "../assets/homeVector.svg";
import Advertising from "../assets/img/Advertising.svg";
import Airport from "../assets/img/Airport.svg";
import Aviation from "../assets/img/Aviation.svg";
import Automotive from "../assets/img/Automotive.svg";
import Banking from "../assets/img/Banking.svg";
import Bio_technology from "../assets/img/Bio-technology.svg";
import Capital_Markets from "../assets/img/Capital Markets.svg";
import Consumer_Goods from "../assets/img/Consumer Goods.svg";
import Distribution from "../assets/img/Distribution.svg";
import Energy_Utilities from "../assets/img/Energy & Utilities.svg";
import Fisheries from "../assets/img/Fisheries.svg";
import Government from "../assets/img/Government.svg";
import Healthcare from "../assets/img/Healthcare.svg";
import Hospitality from "../assets/img/Hospitality.svg";
import Institutions from "../assets/img/Institutions.svg";
import Life_Sciences from "../assets/img/Life Sciences.svg";
import Manufacturing from "../assets/img/Manufacturing.svg";
import Media from "../assets/img/Media.svg";
import Mining from "../assets/img/Mining.svg";
import Oil_Gas from "../assets/img/Oil & Gas.svg";
import Pharmaceuticals from "../assets/img/Pharmaceuticals.svg";
import Railways from "../assets/img/Railways.svg";
import Retails from "../assets/img/Retails.svg";
import Robot from "../assets/img/Robotics.svg";
import Tele_Communications from "../assets/img/TeleCommunication.svg";
import Travel from "../assets/img/Travel.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Biometric from "../assets/projects/Biometric.png";
import Fire_Alarm from "../assets/projects/Fire Alarm.png";
import Smart_Home from "../assets/projects/Smart Home.png";
import Smart_Locker from "../assets/projects/Smart Locker.png";
import Smart_Water_Tank from "../assets/projects/Smart Water Tank.png";
import Vital_Sense from "../assets/projects/Vital Sense.png";
import project_img1 from "../assets/recent_project/project_img1.png";
import project_img2 from "../assets/recent_project/project_img2.png";
import project_img3 from "../assets/recent_project/project_img3.png";
import project_img4 from "../assets/recent_project/project_img4.png";
import person from "../assets/person.png";
import calander from "../assets/calander.png";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  client,
  news,
  services,
  industriesSlide,
  clientSlide,
} from "./contents";
import { Button } from "@/components/ui/button";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const [expanded, setExpanded] = useState(Array(client.length).fill(false));
  const [technologiesexpanded, setTechnologieExpanded] = useState(
    Array(services.length).fill(false)
  );

  const handleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const handleReadMoreTechnologies = (index) => {
    const newExpanded = [...technologiesexpanded];
    newExpanded[index] = !newExpanded[index];
    setTechnologieExpanded(newExpanded);
  };

  const Industries = [
    { img: Advertising, title: "Advertising" },
    { img: Airport, title: "Airport", navigate: "Airports" },
    { img: Aviation, title: "Aviation", navigate: "Retails" },
    { img: Automotive, title: "Automotive", navigate: "Automotive" },
    { img: Banking, title: "Banking", navigate: "Banking" },
    { img: Bio_technology, title: "Bio-technology", navigate: "Biotechnology" },
    { img: Capital_Markets, title: "Capital Markets", navigate: "CapitalMarkets" },
    { img: Consumer_Goods, title: "Consumer Goods", navigate: "ConsumerGoods" },
    { img: Distribution, title: "Distribution", navigate: "Distribution" },
    { img: Energy_Utilities, title: "Energy & Utilities", navigate: "EnergyUtilities" },
    { img: Fisheries, title: "Fisheries", navigate: "Fisheries" },
    { img: Government, title: "Government", navigate: "Government" },
    { img: Healthcare, title: "Healthcare", navigate: "Healthcare" },
    { img: Hospitality, title: "Hospitality", navigate: "Hospitality" },
    { img: Institutions, title: "Institutions", navigate: "Institutions" },
    { img: Life_Sciences, title: "Life Sciences", navigate: "Lifescience" },
    { img: Manufacturing, title: "Manufacturing", navigate: "Manufacturing" },
    { img: Media, title: "Media", navigate: "Media" },
    { img: Mining, title: "Mining", navigate: "Mining" },
    { img: Oil_Gas, title: "Oil & Gas", navigate: "OilGas" },
    { img: Pharmaceuticals, title: "Pharmaceuticals", navigate: "Pharmaceuticals" },
    { img: Railways, title: "Railways", navigate: "Railways" },
    { img: Retails, title: "Retails", navigate: "Retails" },
    { img: Robot, title: "Robotics", navigate: "Robotics" },
    { img: Tele_Communications, title: "Tele Communications", navigate: "Telecommunications" },
    { img: Travel, title: "Travel", navigate: "Travel" },
  ];

  const projects = [
    { img: Biometric, title: "Biometric" },
    { img: Fire_Alarm, title: "Fire_Alarm" },
    { img: Smart_Home, title: "Smart_Home" },
    { img: Smart_Locker, title: "Smart_Locker" },
    { img: Smart_Water_Tank, title: "Smart_Water_Tank" },
    { img: Vital_Sense, title: "Vital_Sense" },
  ];

  return (
    <div className="w-full h-auto">
      <div className="w-full h-full bg-gradient-to-b from-[rgba(255,204,0,0.42)] to-[rgba(255,204,0,0)] mt-20 flex lg:relative justify-center">
        <div className="mt-10 flex flex-col items-center">
          <div className="flex items-center gap-2 px-3 py-1 justify-center bg-[#fff6ce] rounded-[20px] my-2 lg:w-[474px] lg:h-12">
            <img src={star} alt="star" className="h-3 w-3 lg:h-4 lg:w-4" />
            <span className="font-normal font-roboto text-[14px] lg:text-[18px]">
              We Provide IoT innovations for Industrial Projects
            </span>
            <img src={star} alt="star" className="h-3 w-3 lg:h-4 lg:w-4" />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-mulish font-extrabold text-[#020202] text-[1.5rem] md:text-[3rem] lg:text-[60px]">
              Discover Mandlac and
            </span>
            <span className="font-mulish font-extrabold text-[#020202] text-[1.5rem] md:text-[3rem] lg:text-[60px]">
              Experience the Future of IoT
            </span>
          </div>
          <div className="flex flex-col font-roboto font-normal leading-[27px] text-[15px] lg:text-[18px] items-center text-center mt-5 w-[80%] md:w-[60%]">
            At the forefront of innovation, Mandlac is dedicated to
            revolutionizing the way we interact with technology.
            Leveraging cutting-edge IoT technologies, we empower businesses to
            optimize operations, enhance efficiency, and drive growth in today’s
            increasingly connected world.
          </div>
          <div className="mt-20 lg:mt-16 mb-20 w-full">
            <img src={homeVector} alt="banner" className="mx-10 lg:mx-52" />
          </div>
        </div>
        <span className="absolute -left-10 lg:left-0 top-80 lg:top-60 -z-10">
          <img
            src={bannerLeft}
            alt="speaker"
            className="w-[9rem] lg:w-[14rem]"
          />
        </span>
        <span className="absolute right-0 lg:right-0 top-80 lg:top-60 -z-10">
          <img
            src={bannerRight}
            alt="speaker"
            className="w-[5rem] lg:w-[8rem]"
          />
        </span>
      </div>
      <div className="w-full h-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <span className="text-2xl md:text-3xl lg:text-[40px] text-center font-extrabold font-mulish">
            Transform your Business with
          </span>
          <span className="text-2xl md:text-3xl lg:text-[40px] text-center font-extrabold font-mulish">
            Advanced Technologies
          </span>
        </div>
        <p className="font-roboto font-normal text-[15px] lg:text-[18px] text-center mt-5 w-[80%] md:w-[75%]">
          We’re pioneers in the field of IoT, harnessing the latest advancements
          in technology to develop cutting-edge solutions that drive
          efficiency,sustainability, and growth. From smart monitoring to
          precise controlling and seamless management systems, we specialize in
          revolutionizing how industries operate in the digital age.At
          Mandlac, our clients are at the center of everything we do. We believe
          in delivering on our promises, exceeding expectations, and
          building long-lasting partnerships based on trust, integrity, and
          mutual success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[80%] ml-auto mr-auto mb-10 mt-10">
          {services.map((article, index) => (
            <div
              key={index}
              className={`p-5`}
              style={{ backgroundColor: article.bg }}
            >
              <img
                src={article.img}
                alt="Article Image"
                className="w-[70px] h-[70px] rounded"
              />
              <div>
                <h3 className="text-2xl font-bold font-roboto mt-3">
                  {article.title}
                </h3>
                <p
                  className={`text-base font-normal font-roboto mt-3 ${technologiesexpanded[index]
                    ? "line-clamp-none"
                    : "line-clamp-3"
                    }`}
                >
                  {article.contant}
                </p>
                <button
                  className="font-roboto font-semibold text-lg mt-6"
                  onClick={() => handleReadMoreTechnologies(index)}
                >
                  {technologiesexpanded[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] ml-auto mr-auto mb-20">
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] font-mulish text-center mt-10 font-extrabold">
          Solutions Built Specifically <br /> for your Industries
        </h2>
        <p className="text-center mt-5 font-normal text-lg  mb-20">
          Our customizable solutions encompass both hardware and software
          services, ensuring that our products seamlessly integrate into your{" "}
          <br /> operations while meeting your specific requirements.
        </p>
        <Slider {...industriesSlide} className="">
          {Industries.map((data, i) => (
            <div key={i} className="p-3 cursor-pointer">
              <div onClick={() => { navigate(`/Industries/${data.navigate}`); window.location.reload(); }} className="flex flex-col gap-5 items-center justify-center h-full min-h-[200px] bg-[#F7F7F7] hover:border border-yellow-300 hover:shadow-md">
                <img
                  src={data.img}
                  alt={data.title}

                  className="w-14 h-12 my-4"
                />
                <h3 className="font-roboto font-medium text-xl text-center">
                  {data.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-transparent bg-gradient-to-b from-[#FFCC006B] to-[#FFCC0000]">
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-center font-mulish font-extrabold">
          Mandlac Product Range
        </h2>
        <p className="text-center mt-5 font-normal text-[18px] font-roboto mb-5">
          Step into the future with our IoT products! Transform your home into a
          smart, efficient haven. Explore now!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-[90%] mx-auto">
          {projects.map((article, index) => (
            <div
              key={index}
              className={`p-2`}
              style={{ backgroundColor: article.bg }}
            >
              <div className="">
                <img
                  src={article.img}
                  alt="Article Image"
                  className="w-full h-[250px] rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-extrabold font-mulish">
          Happy Client Stories
        </h2>
        <div className="w-[90%] mx-auto">
          <Slider {...clientSlide} className="">
            {client.map((data, i) => (
              <div key={i} className="px-4 mt-10 mb-10">
                <div className="bg-white shadow-md rounded-md h-full">
                  <div className="relative bg-[#D0A600]">
                    <h3 className="text-[24px] ml-10 z-20 text-white py-4 font-bold font-roboto relative">
                      {data.name}
                    </h3>
                    <div className="slide-shape absolute w-[200px] h-[100px] lg:w-[250px] lg:h-[100px] bg-[#D0A600] top-8 right-0 z-10"></div>
                    <img
                      src={data.img}
                      alt={data.name}
                      className="absolute right-4 w-[120px] h-[120px] lg:right-10 top-10 z-30"
                    />
                  </div>
                  <div className="flex justify-between mx-auto w-[90%]">
                    <p
                      className={`text-base font-roboto font-normal mt-10 text-[#222120] w-[50%] ${expanded[i] ? "line-clamp-none" : "line-clamp-5"
                        }`}
                    >
                      {data.contant}
                    </p>
                    <div className="mt-[110px] lg:mt-[118px]">
                      <div className="flex mr-5 lg:mr-8">
                        <FaStar className="text-[#FFB342]" />
                        <FaStar className="text-[#FFB342]" />
                        <FaStar className="text-[#FFB342]" />
                        <FaStar className="text-[#FFB342]" />
                        <FaStar className="text-[#FFB342]" />
                      </div>
                      <div className="text-14px text-[#606060]">
                        4.9 Reviews
                      </div>
                    </div>
                  </div>
                  <button
                    className=" text-black text-lg cursor-pointer font-roboto font-semibold my-5 ml-7"
                    onClick={() => handleReadMore(i)}
                  >
                    {expanded[i] ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mt-20 font-bold">
          Checkout our Recently <br /> Completed Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <img
            src={project_img1}
            alt=""
            className="h-auto w-screen col-span-1 row-span-2"
          />
          <img
            src={project_img2}
            alt=""
            className="h-auto w-screen col-span-1 row-span-2"
          />
          <div className="col-span-1 lg:col-span-1 row-span-2 flex flex-col space-y-4">
            <img src={project_img3} alt="" className="h-52 lg:h-full" />
            <img src={project_img4} alt="" className="h-52 lg:h-full" />
          </div>
        </div>
      </div>
      <div className="mt-[40px] -z-10">
        <h2 className="text-[30px] font-semibold text-center mb-10">
          News & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-[90%] ml-auto mr-auto mb-10">
          {news.map((article, index) => (
            <div
              key={index}
              className=" bg-gray-50 border border-gray-200 hover:border-2 hover:border-yellow-400 group p-3"
            >
              <img
                src={article.img}
                alt="Article Image"
                className="w-[100%] h-[250px] rounded mr-4"
              />
              <div className="text-sm text-gray-500 flex items-center gap-4 mt-2">
                <span className="flex gap-4">
                  <img src={person} alt="personlogo" className=" w-3 h-4" />
                  {article.post}
                </span>
                <span className="flex gap-4">
                  <img src={calander} alt="calanderlogo" className=" w-3 h-4" />
                  {article.date}{" "}
                </span>
              </div>
              <h3 className="text-lg font-semibold p-4">{article.title}</h3>
              <Button className="bg-white text-black flex min-w-max items-center gap-4 p-2 group-hover:bg-yellow-500 group-hover:text-white border-2  mb-10 rounded-none text-xs">
                READ MORE <span>|</span> <FaArrowRight />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
