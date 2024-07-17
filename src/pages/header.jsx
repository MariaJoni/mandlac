import React, { useState } from 'react';
import nipponLogo from "../assets/MandlacLogo.png";
import { IoIosArrowDown, IoIosClose, IoIosMenu } from 'react-icons/io';
import { IoSearchOutline } from "react-icons/io5";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';


function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('Overview');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const industrySectors = [
    "Hospitality",
    "Institutions",
    "Robotics",
    "Airports",
    "Distribution",
    "Insurance",
    "Retails",
    "Aviation",
    "OilGas",
    "Lifescience",
    "Travel",
    "Automotive",
    "Fisheries",
    "Railways",
    "Manufacturing",
    "Banking",
    "Government",
    "Media",
    "Pharmaceuticals",
    "Biotechnology",
    "Healthcare",
    "Mining",
    "Telecommunications",
    "CapitalMarkets",
    "ConsumerGoods",
    "EnergyUtilities"
  ];

  const Services = [
    "BigData",
    "AIML",
    "CloudSolution",
    "IoTSolutions",
    "MobileAppDevelopment",
    "WebAppDevelopment",
    "GeoSpatial"
  ];

  const Products = ["Biometric",
    "Fire Alarm",
    "Smart Home",
    "Smart Locker",
    "Smart Water Tank",
    "Vital Sense"]

  const Research = ["Mandlac Research", "Mandlac Innovation"]

  const handleNavigateIndustry = (sector) => {
    navigate(`/Industries/${sector}`);
    setMenuOpen(false)
    location.reload();
  }

  const handleNavigateServices = (service) => {
    navigate(`/Services/${service}`);
    setMenuOpen(false)
    location.reload();
  }

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row hover:bg-white transition-300 w-full bg-[#ffeb9b] justify-between items-center border-b-2 border-gray-200 p-2">
        <div className="flex justify-between w-full md:w-auto items-center">
          <img onClick={() => navigate("/")} src={nipponLogo} className="w-28 ml-2 mb-2 md:mb-0 cursor-pointer" alt="Logo" />
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <IoIosMenu />
          </button>
        </div>
        <div className={`hidden md:flex flex-row gap-4 md:gap-8 items-center`}>
          <ul className="flex flex-row gap-4 md:gap-8 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <li className="font-semibold flex items-center cursor-pointer" variant="link">
                  What we do <IoIosArrowDown />
                </li>
              </PopoverTrigger>
              <PopoverContent className="w-screen h-80 mt-8">
                <div className='flex items-start w-[85%] mt-5 mb-5 ml-auto mr-auto'>
                  <div className="w-[30%] border-r-2">
                    <div className={`${activeSection === 'Overview' ? 'bg-[#FFFCEE]' : ''} flex font-semibold p-2 text-[20px] justify-between items-center`} onClick={() => handleClick('Overview')}>
                      Overview <IoIosArrowForward />
                    </div>
                    <div className={`${activeSection === 'Industries' ? 'bg-[#FFFCEE]' : ''} flex font-semibold p-2 text-[20px] justify-between items-center`} onClick={() => handleClick('Industries')}>
                      Industries <IoIosArrowForward />
                    </div>
                    <div className={`${activeSection === 'Services' ? 'bg-[#FFFCEE]' : ''} flex font-semibold p-2 text-[20px] justify-between items-center`} onClick={() => handleClick('Services')}>
                      Services <IoIosArrowForward />
                    </div>
                    <div className={`${activeSection === 'Products' ? 'bg-[#FFFCEE]' : ''} flex font-semibold p-2 text-[20px] justify-between items-center`} onClick={() => handleClick('Products')}>
                      Products <IoIosArrowForward />
                    </div>
                    <div className={`${activeSection === 'Research' ? 'bg-[#FFFCEE]' : ''} flex font-semibold p-2 text-[20px] justify-between items-center`} onClick={() => handleClick('Research')}>
                      Research and innovation <IoIosArrowForward />
                    </div>
                  </div>
                  <div className='w-[60%] ml-4'>
                    {activeSection === 'Overview' && (
                      <div>
                        <p className='text-[24px] mt-4 font-light'>Mandlac is a comprehensive platform designed to facilitate the deployment, management, and operation of IoT systems</p>
                        <p className='mt-4 text-[14px]'>Our customizable solutions encompass both hardware and software services, ensuring that our products seamlessly integrate into your operations while meeting your specific requirements.</p>
                        <div className='border border-amber-300 text-amber-400 text-center p-1 mt-5 w-[140px] rounded'>Discover More</div>
                      </div>
                    )}
                    {activeSection === 'Industries' && (
                      <div>
                        <ul>
                          {industrySectors.map((sector, index) => (
                            <li onClick={() => handleNavigateIndustry(sector)} className='text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center' key={index}>{sector}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeSection === 'Services' && (
                      <div>
                        <ul>
                          {Services.map((service, index) => (
                            <li onClick={() => handleNavigateServices(service)} className='text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center' key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeSection === 'Products' && (
                      <div>
                        <ul>
                          {Products.map((product, index) => (
                            <li className='text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center' key={index}>{product}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeSection === 'Research' && (
                      <div>
                        <ul>
                          {Research.map((item, index) => (
                            <li className='text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center' key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <li className="font-semibold flex items-center cursor-pointer" variant="link">
                  Who we are <IoIosArrowDown />
                </li>
              </PopoverTrigger>
              <PopoverContent className="w-screen h-80 mt-8">
                <div className='flex items-center font-serif justify-center mt-20 font-bold text-[40px]'>
                  coming soon...
                </div>
              </PopoverContent>
            </Popover>
            <li onClick={() => navigate('/blog')} className="font-semibold cursor-pointer">Blog</li>
            <li onClick={() => navigate('/menuContact')} className="font-semibold cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 mr-4">
          <span className="text-lg"><IoSearchOutline /></span>
          <span className="bg-black text-white p-2 md:p-3 rounded">Get Connected</span>
        </div>
      </div>

      <div
        className={`fixed overflow-y-auto top-0 left-0 h-full bg-white transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        style={{ width: '80%', transition: 'transform 0.3s ease-in-out' }}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <IoIosClose />
          </button>
        </div>
        <ul className="flex flex-col w-[80%] mt-0 ml-auto mb-0 mr-auto gap-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What we do</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible className="w-[90%] mt-0 mb-0 ml-auto mr-auto">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Overview</AccordionTrigger>
                    <AccordionContent>
                      <div >
                        <p className='text-[24px] mt-8 font-light'>Mandlac is a comprehensive platform designed to facilitate the deployment, management, and operation of IoT systems</p>
                        <p className='mt-4 text-[14px]'>Our customizable solutions encompass both hardware and software services, ensuring that our products seamlessly integrate into your operations while meeting your specific requirements.</p>
                        <div className='border border-amber-300 text-amber-400 text-center p-1 mt-5 w-[140px] rounded'>Discover More</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Industries</AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <ul>
                          {industrySectors.map((sector, index) => (
                            <li onClick={() => handleNavigateIndustry(sector)} className='text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center' key={index}>{sector}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Services</AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <ul>
                          {Services.map((service, index) => (
                            <li className='text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center' key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Products</AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <ul>
                          {Products.map((product, index) => (
                            <li className='text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center' key={index}>{product}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Research and innovation</AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <ul>
                          {Research.map((item, index) => (
                            <li className='text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center' key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who we are</AccordionTrigger>
              <AccordionContent>
                Coming Soon...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <li className="font-semibold flex items-center">What we do <IoIosArrowDown /></li>
          <li className="font-semibold flex items-center">Who we are <IoIosArrowDown /></li> */}
          <li className="font-semibold">Blog</li>
          <li className="font-semibold">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
