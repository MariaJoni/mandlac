import React, { useEffect, useState } from "react";
import Banner from "../assets/Banner-1.png";
import software_services from "../assets/Software_Services.png";
import IoT_Services from "../assets/IoT_Services.png";
import Geo_Spatial from "../assets/Geo_Spatial.png";
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
import client_1 from "../assets/clients/client_1.png";
import client_2 from "../assets/clients/client_2.png";
import project_img1 from "../assets/recent_project/project_img1.png";
import project_img2 from "../assets/recent_project/project_img2.png";
import project_img3 from "../assets/recent_project/project_img3.png";
import project_img4 from "../assets/recent_project/project_img4.png";
import blog_news_1 from "../assets/blog_news_1.jpg";
import blog_news_2 from "../assets/blog_news_2.webp";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const client = [
    {
      img: client_1,
      name: "James Anderson",
      contant:
        "Working with Mandlac has been a game-changer for our household. Their smart water tank management system has not only simplified our water usage but also provided peace of mind knowing that our water supply is efficiently managed. The ability to control everything through their user-friendly mobile app is incredibly convenient. Plus, their team’s dedication to customization ensures that the system perfectly fits our needs. Overall, we couldn’t be happier with Mandlac’s innovative solutions and excellent customer service.",
    },
    {
      img: client_2,
      name: "Aaliyah",
      contant:
        "Partnering with Mandlac has elevated our hotel's operations to a whole new level. Their IoT smart products, particularly the water tank management system and automatic valve shut-off, have optimized our water usage efficiency and streamlined our maintenance processes. The customization options on both hardware and software fronts have allowed us to tailor the system to our unique requirements seamlessly. The convenience of controlling everything through their mobile app has impressed both our staff and guests alike. Mandlac's commitment to innovation and customer satisfaction truly sets them apart in the industry.",
    },
    {
      img: client_1,
      name: "James Anderson",
      contant:
        "Working with Mandlac has been a game-changer for our household. Their smart water tank management system has not only simplified our water usage but also provided peace of mind knowing that our water supply is efficiently managed. The ability to control everything through their user-friendly mobile app is incredibly convenient. Plus, their team’s dedication to customization ensures that the system perfectly fits our needs. Overall, we couldn’t be happier with Mandlac’s innovative solutions and excellent customer service.",
    },
  ];

  const [expanded, setExpanded] = useState(Array(client.length).fill(false));

  const handleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const services = [
    {
      img: software_services,
      bg: "#edf8ea",
      title: "Software Services",
      contant:
        "Our software solutions are designed to drive innovation and efficiency in your business. With our expertise in custom development, integration, and cutting -",
    },
    {
      img: IoT_Services,
      bg: "#fff6e4",
      title: "IoT Services",
      contant:
        "Our IoT solutions are designed to transform the way you do business. By connecting devices, data, and people, we enable smarter operations and innovative  ",
    },
    {
      img: Geo_Spatial,
      bg: "#f2f2fe",
      title: "Geo-Spatial",
      contant:
        "Our geospatial solutions harness the power of location data to provide you with actionable insights and precision mapping. From accurate  data collection",
    },
  ];

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

  const news = [
    {
      img: blog_news_1,
      post: "By Admin",
      date: "9 July, 2024",
      title: "Nurturing Ethical and Responsible AI in the Digital Age",
    },
    {
      img: blog_news_2,
      post: "By Admin",
      date: "9 July, 2024",
      title: "Nurturing Ethical and Responsible AI in the Digital Age",
    },
    {
      img: blog_news_1,
      post: "By Admin",
      date: "9 July, 2024",
      title: "Nurturing Ethical and Responsible AI in the Digital Age",
    },
  ];

  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    className: "silders",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 2,
    slidesPerRow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <img src={Banner} alt="" />
      </div>
      <>
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold">
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
      </>
      <div className="w-[90%] ml-auto mr-auto mb-20">
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold ">
          Solutions Built Specifically <br /> for your Industries
        </h2>
        <p className="text-center mt-5 font-medium text-[16px] mb-20">
          Our customizable solutions encompass both hardware and software
          services, ensuring that our products seamlessly integrate into your{" "}
          <br /> operations while meeting your specific requirements.
        </p>
        <Slider {...settings} className="py-8">
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
      <div className="mandlac_project mb-[950px] md:mb-[0px]">
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
        <Slider {...settings1}>
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
                  className={`text-sm text-gray-600 ${
                    expanded[i] ? "line-clamp-none" : "line-clamp-3"
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
      <div className="w-[90%] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mt-20 font-bold">
          Checkout our Recently <br /> Completed Projects
        </h2>
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        >
          <img src={project_img1} alt="" className="h-auto w-screen col-span-1 row-span-2" />
          <img src={project_img2} alt="" className="h-auto w-screen col-span-1 row-span-2" />
          <div className="col-span-1 lg:col-span-1 row-span-2 flex flex-col space-y-4">
            <img src={project_img3} alt="" className="h-52 lg:h-full" />
            <img src={project_img4} alt="" className="h-52 lg:h-full" />
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <h2 className="text-[30px] font-semibold text-center mb-10">
          {" "}
          News & Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-[90%] ml-auto mr-auto mb-10">
          {news.map((article, index) => (
            <div data-aos="fade-left" key={index} className="border p-2">
              <img
                src={article.img}
                alt="Article Image"
                className="w-[100%] h-[250px] rounded mr-4 blog_img"
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
