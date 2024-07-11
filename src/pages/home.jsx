import React from 'react'
import blog_news_1 from '../assets/Banner-1.png';
import software_services from '../assets/Software_Services.png';
import IoT_Services from '../assets/IoT_Services.png';
import Geo_Spatial from '../assets/Geo_Spatial.png';
import Advertising from '../assets/img/Advertising.png';
import Airport from '../assets/img/Airport.png';
import Aviation from '../assets/img/Aviation.png';
import Automotive from '../assets/img/Automotive.png';
import Banking from '../assets/img/Banking.png';
import Bio_technology from '../assets/img/Bio_technology.png';
import Capital_Markets from '../assets/img/Capital_Markets.png';
import Consumer_Goods from '../assets/img/Consumer Goods.png';
import Distribution from '../assets/img/Distribution.png';
import Energy_Utilities from '../assets/img/Energy & Utilities.png';
import Fisheries from '../assets/img/Fisheries.png';
import Government from '../assets/img/Government.png';
import Healthcare from '../assets/img/Healthcare.png';
import Hospitality from '../assets/img/Hospitality.png';
import Institutions from '../assets/img/Institutions.png';
import Life_Sciences from '../assets/img/Life Sciences.png';
import Manufacturing from '../assets/img/Manufacturing.png';
import Media from '../assets/img/Media.png';
import Mining from '../assets/img/Mining.png';
import Oil_Gas from '../assets/img/Oil & Gas.png';
import Pharmaceuticals from '../assets/img/Pharmaceuticals.png';
import Railways from '../assets/img/Railways.png';
import Retails from '../assets/img/Retails.png';
import Robot from '../assets/img/robot.png';
import Tele_Communications from '../assets/img/tele.png';
import Travel from '../assets/img/Travel.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Biometric from '../assets/projects/Biometric.jpg';
import Fire_Alarm from '../assets/projects/Fire Alarm.jpg';
import Smart_Home from '../assets/projects/Smart Home.jpg';
import Smart_Locker from '../assets/projects/Smart Locker.jpg';
import Smart_Water_Tank from '../assets/projects/Smart Water Tank.png';
import Vital_Sense from '../assets/projects/Vital Sense.jpg';
import client_1 from '../assets/clients/client_1.png';
import client_2 from '../assets/clients/client_2.png';

function Home() {

  const services = [
    { img: software_services, bg: "#edf8ea", title: "Software Services", contant: "Our software solutions are designed to drive innovation and efficiency in your business. With our expertise in custom development, integration, and cutting -" },
    { img: IoT_Services, bg: "#fff6e4", title: "IoT Services", contant: "Our IoT solutions are designed to transform the way you do business. By connecting devices, data, and people, we enable smarter operations and innovative  " },
    { img: Geo_Spatial, bg: "#f2f2fe", title: "Geo-Spatial", contant: "Our geospatial solutions harness the power of location data to provide you with actionable insights and precision mapping. From accurate  data collection" }
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
    { img: Travel, title: "Travel" }
  ];

  const projects = [
    { img: Biometric, title: "Biometric" },
    { img: Fire_Alarm, title: "Fire_Alarm" },
    { img: Smart_Home, title: "Smart_Home" },
    { img: Smart_Locker, title: "Smart_Locker" },
    { img: Smart_Water_Tank, title: "Smart_Water_Tank" },
    { img: Vital_Sense, title: "Vital_Sense" },
  ]

  const client = [
    { img: client_1, name: "James Anderson", contant: "Working with Mandlac has been a game-changer for our household. Their smart water tank management system has not only simplified our water usage but also provided peace of mind knowing that our water supply is efficiently managed. The ability to control everything through their user-friendly mobile app is incredibly convenient. Plus, their team’s dedication to customization ensures that the system perfectly fits our needs. Overall, we couldn’t be happier with Mandlac’s innovative solutions and excellent customer service." },
    { img: client_2, name: "Aaliyah", contant: "Partnering with Mandlac has elevated our hotel's operations to a whole new level. Their IoT smart products, particularly the water tank management system and automatic valve shut-off, have optimized our water usage efficiency and streamlined our maintenance processes. The customization options on both hardware and software fronts have allowed us to tailor the system to our unique requirements seamlessly. The convenience of controlling everything through their mobile app has impressed both our staff and guests alike. Mandlac's commitment to innovation and customer satisfaction truly sets them apart in the industry." },
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 5, // Number of slides per row
    // slidesToScroll: 5, // Number of slides to scroll per row
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 2, // Number of rows
    slidesPerRow: 5, // Number of slides per row
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          slidesPerRow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          slidesPerRow: 3
        }
      }
    ]
  };

  return (
    <div className="" >
      <div><img src={blog_news_1} alt="" /></div>
      <div>
        <h2 className='text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold'>Transform your Business with <br /> Advanced Technologies</h2>
        <p className='text-center mt-5 font-medium text-[16px]'>We’re pioneers in the field of IoT, harnessing the latest advancements in technology to develop cutting-edge solutions that drive efficiency, <br /> sustainability, and growth. From smart monitoring to precise controlling and seamless management systems, we specialize in <br /> revolutionizing how industries operate in the digital age.At Mandlac, our clients are at the center of everything we do. We believe in delivering <br /> on our promises, exceeding expectations, and building long-lasting partnerships based on trust, integrity, and mutual success.</p>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[80%] ml-auto mr-auto mb-10 mt-10'>
          {services.map((article, index) => (
            <div key={index} className={`p-2`} style={{ backgroundColor: article.bg }}>
              <img src={article.img} alt="Article Image" className='w-[70px] h-[70px] rounded mr-4' />
              <div>
                <h3 className='text-[25px] font-bold p-4'>{article.title}</h3>
                <p className='pl-4 pr-4'>{article.contant}</p>
                <div className='pl-4 mt-4 mb-4 font-semibold'>READ MORE ...</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[90%] ml-auto mr-auto mb-20'>
        <h2 className='text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold '>Solutions Built Specifically <br /> for your Industries</h2>
        <p className='text-center mt-5 font-medium text-[16px] mb-20'>Our customizable solutions encompass both hardware and software services, ensuring that our products seamlessly integrate into your <br /> operations while meeting your specific requirements.</p>
        <Slider {...settings}>
          {Industries.map((article, index) => (
            <div key={index} className={`p-2`} style={{ backgroundColor: article.bg }}>
              <img src={article.img} alt="Article Image" className='w-[50px] h-[50px] rounded mr-4' />
              <div>
                <h3 className='text-[20px] font-serif p-4'>{article.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='mandlac_project'>
        <h2 className='text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold '>Mandlac Product Range</h2>
        <p className='text-center mt-5 font-medium text-[16px] mb-10'>Step into the future with our IoT products! Transform your home into a smart, efficient haven. Explore now!</p>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[80%] ml-auto mr-auto mb-10 mt-5'>
          {projects.map((article, index) => (
            <div key={index} className={`p-2`} style={{ backgroundColor: article.bg }}>
              <div className="relative">
                <img src={article.img} alt="Article Image" className='w-full h-[200px] rounded' />
                <div className="absolute top-auto bottom-2 left-2 inset-0 ">
                  <h3 className='text-[20px] font-bold text-white'>{article.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-[20px] md:text-[30px] lg:text-[40px] text-center mt-10 font-bold'>Happy Client Stories</h2>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-[80%] ml-auto mr-auto mb-10 mt-10'>
          {client.map((article, index) => (
            <div key={index} className={`p-2`} style={{ backgroundColor: article.bg }}>
              <img src={article.img} alt="Article Image" className='w-[70px] h-[70px] rounded mr-4' />
              <div>
                <h3 className='text-[25px] font-bold p-4'>{article.name}</h3>
                <p className='pl-4 pr-4'>{article.contant}</p>
                <div className='pl-4 mt-4 mb-4 font-semibold'>READ MORE ...</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home