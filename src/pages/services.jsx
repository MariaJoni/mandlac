import React from 'react'
import { useParams } from 'react-router-dom';
import Big_Data from '../assets/services/Big Data.jpg';
import Mobile_App_Development from '../assets/services/Mobile App Development.jpg';
import AI_ML from '../assets/services/AI_ML.jpg';
import Web_App_Development from '../assets/services/Web_App_Development.jpg';
import IoT_Solutions from '../assets/services/IoT_Solutions.jpg';
import Geo_Spatial from '../assets/services/GeoSpatial.jpg';
import Cloud_Solution from '../assets/services/Cloud_Solution.jpg';
import { IoIosArrowForward } from 'react-icons/io';
import Contact from './contact';
import Details from './details';

function Services() {
  const { sector } = useParams();
  const data = [
    { menu: "BigData", img: Big_Data, title: "Mandlac Solutions for Big Data", contant: "In today’s digital landscape, businesses face a common struggle: harnessing the immense potential of Big Data while navigating its inherent challenges. We specialize in harnessing the power of Big Data to help businesses make informed decisions, optimize operations, and uncover new opportunities. Our comprehensive Big Data services provide the tools and expertise you need to turn data into actionable insights. " },
    { menu: "MobileAppDevelopment", img: Mobile_App_Development, title: "Mandlac Solutions for Mobile App Development", contant: "In the current mobile-centric era, businesses must provide seamless and engaging mobile experiences for their users. We specialize in developing innovative and user-friendly apps for both Android and iOS platforms. Our services are designed to help businesses boost engagement and achieve their goals. With our comprehensive mobile app development solutions, you can transform your app ideas into reality with the expertise and tools we provide." },
    { menu: "AIML", img: AI_ML, title: "Mandlac Solutions for AI/ML", contant: "Our AI/ML services empower businesses to harness the power of artificial intelligence and machine learning. We develop custom AI/ML models to solve complex problems, improve decision-making, and optimize operations. Our solutions include advanced data analysis, predictive modeling, and automation of routine tasks. With a focus on ethical AI practices and seamless integration, we help businesses gain actionable insights and achieve measurable ROI, driving innovation and growth. " },
    { menu: "WebAppDevelopment", img: Web_App_Development, title: "Mandlac Solutions for Web App Development", contant: "Web development encompasses the creation and maintenance of websites and web applications. It involves various aspects such as web design, content creation, coding, programming, and server configuration. Effective web development ensures that websites are functional, user-friendly, and aligned with business goals. It also includes optimizing websites for speed, security, and search engine visibility, enhancing user experience, and achieving business objectives." },
    { menu: "IoTSolutions", img: IoT_Solutions, title: "Mandlac Solutions for IoT Solutions", contant: "In today’s interconnected world, businesses are grappling with the challenges and opportunities presented by the Internet of Things (IoT). We specialize in leveraging IoT technology to help businesses streamline operations, enhance productivity, and unlock new avenues for growth. Our comprehensive IoT solutions offer the tools and expertise needed to turn connected device data into actionable insights." },
    { menu: "GeoSpatial", img: Geo_Spatial, title: "Mandlac Solutions for Geo-Spatial", contant: "In today’s interconnected world, businesses face the challenge of leveraging geo-spatial data to gain actionable insights and drive strategic decisions. We specialize in harnessing the power of geo-spatial technology to help businesses optimize operations, improve decision-making, and uncover new opportunities. Our comprehensive geo-spatial solutions provide the tools and expertise needed to turn location-based data into valuable insights." },
    { menu: "CloudSolution", img: Cloud_Solution, title: "Mandlac Solutions for Cloud Solution", contant: "Mandlac Software Services offers tailored solutions to meet the diverse needs of the biotechnology  industry, driving R&D efficiency, regulatory compliance, bioprocess optimization, biobanking and data management, and personalized medicine initiatives. " },
  ]

  const selectedIndustry = data.find(item => item.menu.toLowerCase() === sector.toLowerCase());
  console.log(selectedIndustry);

  return (
    <>
      <div>
        <div className="bg-gradient-to-b from-[rgba(255,204,0,0.42)] to-[rgba(255,204,0,0)] h-auto flex">
          <div className='content flex flex-col-reverse md:flex-row items-center md:items-start w-[90%] mx-auto'>
            <div className='md:w-1/2 w-full text-center md:text-left my-20'>
              <h1 className='text-[32px] md:text-[40px] font-bold mt-5 md:mt-0'>{selectedIndustry.title}</h1>
              <p className='mt-4'>{selectedIndustry.contant}</p>
              <p className='mt-8 md:mt-18 flex justify-center md:justify-start items-center font-semibold text-[20px] gap-2'>Let’s talk <span className='bg-amber-400 rounded-full p-2'><IoIosArrowForward /></span></p>
            </div>
            <div className="md:w-1/2 w-full my-20">
              <img src={selectedIndustry.img} alt="Home" className='w-full h-auto' />
            </div>
          </div>
        </div>
      </div>
      <Details />
      <Contact />
    </>
  )
}

export default Services