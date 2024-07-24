import React, { useEffect, useState } from "react";
import star from "../assets/star.png";
import bannerLeft from "../assets/bannerLeft.svg";
import bannerRight from "../assets/bannerRight.svg";
import homeVector from "../assets/homeVector.svg";
import Advertising from "../assets/img/Advertising.png";
import Airport from "../assets/img/Airport.png";
import Aviation from "../assets/img/Aviation.png";
import Automotive from "../assets/img/Automotive.png";
import Banking from "../assets/img/Banking.png";
import Bio_technology from "../assets/img/Bio_technology.png";
import Capital_Markets from "../assets/img/Capital_Markets.png";
import Consumer_Goods from "../assets/img/Consumer Goods.png";
import Distribution from "../assets/img/Distribution.png";
import Energy_Utilities from "../assets/img/Energy & Utilities.png";
import Fisheries from "../assets/img/Fisheries.png";
import Government from "../assets/img/Government.png";
import Healthcare from "../assets/img/Healthcare.png";
import Hospitality from "../assets/img/Hospitality.png";
import Institutions from "../assets/img/Institutions.png";
import Life_Sciences from "../assets/img/Life Sciences.png";
import Manufacturing from "../assets/img/Manufacturing.png";
import Media from "../assets/img/Media.png";
import Mining from "../assets/img/Mining.png";
import Oil_Gas from "../assets/img/Oil & Gas.png";
import Pharmaceuticals from "../assets/img/Pharmaceuticals.png";
import Railways from "../assets/img/Railways.png";
import Retails from "../assets/img/Retails.png";
import Robot from "../assets/img/robot.png";
import Tele_Communications from "../assets/img/tele.png";
import Travel from "../assets/img/Travel.png";
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

function Home() {
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
    { img: Airport, title: "Airport" },
    { img: Aviation, title: "Aviation" },
    { img: Automotive, title: "Automotive" },
    { img: Banking, title: "Banking" },
    { img: Bio_technology, title: "Bio technology" },
    { img: Capital_Markets, title: "Capital Markets" },
    { img: Consumer_Goods, title: "Consumer Goods" },
    { img: Distribution, title: "Distribution" },
    { img: Energy_Utilities, title: "Energy Utilities" },
    { img: Fisheries, title: "Fisheries" },
    { img: Government, title: "Government" },
    { img: Healthcare, title: "Healthcare" },
    { img: Hospitality, title: "Hospitality" },
    { img: Institutions, title: "Institutions" },
    { img: Life_Sciences, title: "Life Sciences" },
    { img: Manufacturing, title: "Manufacturing" },
    { img: Media, title: "Media" },
    { img: Mining, title: "Mining" },
    { img: Oil_Gas, title: "Oil Gas" },
    { img: Pharmaceuticals, title: "Pharmaceuticals" },
    { img: Railways, title: "Railways" },
    { img: Retails, title: "Retails" },
    { img: Robot, title: "Robotics" },
    { img: Tele_Communications, title: "Tele Communications" },
    { img: Travel, title: "Travel" },
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
    <>
      <div className="h-full w-full">
        <div className="bg-gradient-to-b from-[rgba(255,204,0,0.42)] to-[rgba(255,204,0,0)] mt-24 h-auto flex lg:relative justify-center">
          <div className="mt-10 flex flex-col items-center">
            <div className="flex items-center gap-2 px-3 py-1 justify-center bg-[#fff6ce] rounded-[20px] my-2">
              <img src={star} alt="star" className="h-3 w-3 lg:h-5 lg:w-5" />
              <span className="font-normal text-[14px] lg:text-[18px]">
                We Provide IoT innovations for Industrial Projects
              </span>
              <img src={star} alt="star" className="h-3 w-3 lg:h-5 lg:w-5" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-[#020202] text-[1.5rem] md:text-[3rem] lg:text-[3.5rem]">
                Discover Mandlac and
              </span>
              <span className="font-bold text-[#020202] text-[1.5rem] md:text-[3rem] lg:text-[3.5rem]">
                Experience the Future of IoT
              </span>
            </div>
            <div className="flex flex-col text-[15px] lg:text-[20px] items-center text-center mt-5 w-[70%] ">
              At the forefront of innovation, Mandlac is dedicated to
              revolutionizing the way we interact with technology. <br />
              Leveraging cutting-edge IoT technologies, we empower businesses to
              optimize operations, enhance efficiency, and drive growth in
              today’s increasingly connected world.
            </div>
            <div className="mt-20 lg:mt-32 mb-20 w-full">
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
      </div>
      <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-center font-bold">
        Transform your Business with <br /> Advanced Technologies
      </h2>
      <p className="text-center mt-5 font-medium text-[16px]">
        We’re pioneers in the field of IoT, harnessing the latest advancements
        in technology to develop cutting-edge solutions that drive efficiency,{" "}
        <br /> sustainability, and growth. From smart monitoring to precise
        controlling and seamless management systems, we specialize in <br />{" "}
        revolutionizing how industries operate in the digital age.At Mandlac,
        our clients are at the center of everything we do. We believe in
        delivering <br /> on our promises, exceeding expectations, and building
        long-lasting partnerships based on trust, integrity, and mutual success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[80%] ml-auto mr-auto mb-10 mt-10">
        {services.map((article, index) => (
          <div
            key={index}
            className={`p-2`}
            style={{ backgroundColor: article.bg }}
          >
            <img
              src={article.img}
              alt="Article Image"
              className="w-[70px] h-[70px] rounded mr-4"
            />
            <div>
              <h3 className="text-[25px] font-bold p-4">{article.title}</h3>
              <p
                className={`text-sm text-gray-600 ${technologiesexpanded[index]
                  ? "line-clamp-none"
                  : "line-clamp-3"
                  }`}
              >
                {article.contant}
              </p>
              <button
                className="text-[#4EB3A4] mt-2"
                onClick={() => handleReadMoreTechnologies(index)}
              >
                {technologiesexpanded[index] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[90%] ml-auto mr-auto mb-20">
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold ">
          Solutions Built Specifically <br /> for your Industries
        </h2>
        <p className="text-center mt-5 font-medium text-[16px] mb-20">
          Our customizable solutions encompass both hardware and software
          services, ensuring that our products seamlessly integrate into your{" "}
          <br /> operations while meeting your specific requirements.
        </p>
        <Slider {...industriesSlide} className="py-8">
          {Industries.map((data, i) => (
            <div key={i} className="p-4">
              <div className="flex flex-col items-center justify-center h-full p-4 bg-[#F7F7F7] rounded-md">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-20 h-20 mb-4"
                />
                <h3 className="text-lg font-semibold">{data.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-transparent bg-gradient-to-b from-[#FFCC006B] to-[#FFCC0000] h-auto">
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold ">
          Mandlac Product Range
        </h2>
        <p className="text-center mt-5 font-medium text-[18px] font-serif mb-5">
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
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold">
          Happy Client Stories
        </h2>
        <div className="w-[90%] mx-auto">
          <Slider {...clientSlide} className="">
            {client.map((data, i) => (
              <div key={i} className="px-4 mt-10 mb-10">
                <div className="bg-white shadow-md rounded-md h-full">
                  <div className="relative bg-[#D0A600]">
                    <h3 className="text-[24px] ml-10 z-20 text-white py-4 font-semibold relative">
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
                      className={`text-[15px] font-semibold mt-10 text-[#222120] w-[50%] ${expanded[i] ? "line-clamp-none" : "line-clamp-5"}`}
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
                    className="text-black text-[18px] cursor-pointer font-semibold mt-2 ml-5 lg:ml-10 mb-5"
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
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        >
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
            <div data-aos="fade-left -z-10" key={index} className=" bg-gray-50 border border-gray-200 hover:border-2 hover:border-yellow-400 group p-3">
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
                READ MORE <span>|</span>  <FaArrowRight />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
