import React, { useEffect, useState } from "react";
import sparkler from "../assets/sparkler.png";
import bannerLeft from "../assets/bannerLeft.svg";
import bannerRight from "../assets/bannerRight.svg";
import homebgremovebg from "../assets/homebgremovebg.png";
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
import Biometric from "../assets/projects/Biometric.jpg";
import Fire_Alarm from "../assets/projects/Fire Alarm.jpg";
import Smart_Home from "../assets/projects/Smart Home.jpg";
import Smart_Locker from "../assets/projects/Smart Locker.jpg";
import Smart_Water_Tank from "../assets/projects/Smart Water Tank.png";
import Vital_Sense from "../assets/projects/Vital Sense.jpg";
import project_img1 from "../assets/recent_project/project_img1.png";
import project_img2 from "../assets/recent_project/project_img2.png";
import project_img3 from "../assets/recent_project/project_img3.png";
import project_img4 from "../assets/recent_project/project_img4.png";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { client, news, services, industriesSlide, clientSlide } from "./contents";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const [expanded, setExpanded] = useState(Array(client.length).fill(false));

  const handleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const Industries = [
    { img: Advertising, title: "Advertising" },
    { img: Airport, title: "Airport" },
    { img: Aviation, title: "Aviation" },
    { img: Automotive, title: "Automotive" },
    { img: Banking, title: "Banking" },
    { img: Bio_technology, title: "Bio_technology" },
    { img: Capital_Markets, title: "Capital_Markets" },
    { img: Consumer_Goods, title: "Consumer_Goods" },
    { img: Distribution, title: "Distribution" },
    { img: Energy_Utilities, title: "Energy_Utilities" },
    { img: Fisheries, title: "Fisheries" },
    { img: Government, title: "Government" },
    { img: Healthcare, title: "Healthcare" },
    { img: Hospitality, title: "Hospitality" },
    { img: Institutions, title: "Institutions" },
    { img: Life_Sciences, title: "Life_Sciences" },
    { img: Manufacturing, title: "Manufacturing" },
    { img: Media, title: "Media" },
    { img: Mining, title: "Mining" },
    { img: Oil_Gas, title: "Oil_Gas" },
    { img: Pharmaceuticals, title: "Pharmaceuticals" },
    { img: Railways, title: "Railways" },
    { img: Retails, title: "Retails" },
    { img: Robot, title: "Robotics" },
    { img: Tele_Communications, title: "Tele_Communications" },
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
        <div className="bg-gradient-to-b from-[rgba(255,204,0,0.42)] to-[rgba(255,204,0,0)] h-auto flex lg:relative justify-center">
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
            <div className="flex flex-col text-[15px] lg:text-[20px] items-center mt-10 w-[80%] ">
              At the forefront of innovation, Mandlac is dedicated to
              revolutionizing the way we interact with technology.

              Leveraging cutting-edge IoT technologies, we empower businesses to
              optimize operations, enhance efficiency, and drive growth in today’s
              increasingly connected world.
            </div>
            <div className="mt-14 mb-20">
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
        delivering <br /> on our promises, exceeding expectations, and
        building long-lasting partnerships based on trust, integrity, and
        mutual success.
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
              <p className="pl-4 pr-4">{article.contant}</p>
              <div className="pl-4 mt-4 mb-4 font-semibold">
                READ MORE ...
              </div>
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
              <div className="flex flex-col items-center justify-center h-full p-4 bg-white shadow-md rounded-md">
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
        <p className="text-center mt-5 font-medium text-[16px] mb-10">
          Step into the future with our IoT products! Transform your home into a
          smart, efficient haven. Explore now!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[80%] ml-auto mr-auto mb-10 mt-5">
          {projects.map((article, index) => (
            <div
              key={index}
              className={`p-2`}
              style={{ backgroundColor: article.bg }}
            >
              <div className="relative">
                <img
                  src={article.img}
                  alt="Article Image"
                  className="w-screen h-[200px] rounded"
                />
                <div className="absolute top-auto bottom-2 left-2 inset-0 ">
                  <h3 className="text-[20px] font-bold text-white">
                    {article.title}
                  </h3>
                </div>
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
          <Slider {...clientSlide}>
            {client.map((data, i) => (
              <div key={i} className="px-4 mt-10 mb-10">
                <div className="bg-white p-4 shadow-md rounded-md h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <h3 className="text-lg font-semibold">{data.name}</h3>
                  </div>
                  <p
                    className={`text-sm text-gray-600 ${expanded[i] ? "line-clamp-none" : "line-clamp-3"
                      }`}
                  >
                    {data.contant}
                  </p>
                  <button
                    className="text-[#4EB3A4] mt-2"
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
      <div className="mt-[40px]">
        <h2 className="text-[30px] font-semibold text-center mb-10">
          News & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-[90%] ml-auto mr-auto mb-10">
          {news.map((article, index) => (
            <div data-aos="fade-left" key={index} className="border p-2">
              <img
                src={article.img}
                alt="Article Image"
                className="w-[100%] h-[250px] rounded mr-4 transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div>
                <div className="text-sm text-gray-500 flex items-center gap-4">
                  <FaUser /> {article.post} <FaCalendarAlt /> {article.date}
                </div>
                <h3 className="text-lg font-semibold p-4">{article.title}</h3>
                <div className="flex items-end border w-[150px] p-2 ml-5 hover:bg-amber-400 hover:text-white mb-10">
                  READ MORE ... | <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
