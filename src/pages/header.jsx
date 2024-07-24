import React, { useState } from "react";
import nipponLogo from "../assets/MandlacLogo.png";
import { IoIosArrowDown, IoIosClose, IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { industrySectors, Products, Research, Services } from "./contents";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const handleSubMenuClick = (menu) => {
    setActiveSubMenu(menu === activeSubMenu ? null : menu);
  }

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const handleNavigateIndustry = (sector) => {
    navigate(`/Industries/${sector}`);
    setMenuOpen(false);
    location.reload();
  };

  const handleNavigateServices = (service) => {
    navigate(`/Services/${service}`);
    setMenuOpen(false);
    location.reload();
  };

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row hover:bg-white transition-300 w-full bg-[#ffeb9b] justify-between items-center border-b-1 border-gray-300 shadow-sm p-2 h-24 fixed z-50">
        <div className="flex justify-between w-full md:w-auto items-center">
          <img
            onClick={() => navigate("/")}
            src={nipponLogo}
            className="w-28 mb-2 md:mb-0 cursor-pointer lg:ml-[100px]"
            alt="Logo"
          />
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (<IoIosClose className="bg-black text-white" />) : (<IoIosMenu />)}
          </button>
        </div>
        <div className={`hidden md:flex flex-row gap-4 md:gap-8 items-center`}>
          <ul className="flex flex-row gap-4 md:gap-8 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <li
                  className="font-semibold flex items-center cursor-pointer"
                  variant="link"
                >
                  What we do <IoIosArrowDown />
                </li>
              </PopoverTrigger>
              <PopoverContent className="w-screen h-80 mt-8">
                <div className="flex items-start w-[85%] mt-5 mb-5 ml-auto mr-auto">
                  <div className="w-[30%] border-r-2">
                    <div
                      className={`${activeSection === "Overview" ? "bg-[#FFFCEE]" : ""
                        } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer`}
                      onClick={() => handleClick("Overview")}
                    >
                      Overview <IoIosArrowForward />
                    </div>
                    <div
                      className={`${activeSection === "Industries" ? "bg-[#FFFCEE]" : ""
                        } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer`}
                      onClick={() => handleClick("Industries")}
                    >
                      Industries <IoIosArrowForward />
                    </div>
                    <div
                      className={`${activeSection === "Services" ? "bg-[#FFFCEE]" : ""
                        } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer`}
                      onClick={() => handleClick("Services")}
                    >
                      Services <IoIosArrowForward />
                    </div>
                    <div
                      className={`${activeSection === "Products" ? "bg-[#FFFCEE]" : ""
                        } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer`}
                      onClick={() => handleClick("Products")}
                    >
                      Products <IoIosArrowForward />
                    </div>
                    <div
                      className={`${activeSection === "Research" ? "bg-[#FFFCEE]" : ""
                        } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer`}
                      onClick={() => handleClick("Research")}
                    >
                      Research and innovation <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="w-[70%] ml-8">
                    {activeSection === "Overview" && (
                      <div>
                        <p className="text-[24px] mt-4 font-light">
                          Mandlac is a comprehensive platform designed to
                          facilitate the deployment, management, and operation
                          of IoT systems
                        </p>
                        <p className="mt-4 text-[14px]">
                          Our customizable solutions encompass both hardware and
                          software services, ensuring that our products
                          seamlessly integrate into your operations while
                          meeting your specific requirements.
                        </p>
                        <div className="border border-amber-300 text-amber-400 text-center p-1 mt-5 w-[140px] rounded cursor-pointer">
                          Discover More
                        </div>
                      </div>
                    )}
                    {activeSection === "Industries" && (
                      <ul>
                        {industrySectors
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((sector, index) => (
                            <li
                              onClick={() =>
                                handleNavigateIndustry(sector.navigate)
                              }
                              className="text-[18px] font-normal cursor-pointer me-4 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400 inline-flex items-center justify-center"
                              key={index}
                            >
                              {sector.name}
                            </li>
                          ))}
                      </ul>
                    )}
                    {activeSection === "Services" && (
                      <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                        {Services.sort((a, b) =>
                          a.name.localeCompare(b.name)
                        ).map((service, index) => (
                          <li
                            onClick={() =>
                              handleNavigateServices(service.navigate)
                            }
                            className="text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400 items-center justify-center"
                            key={index}
                          >
                            {service.name}
                          </li>
                        ))}
                      </ul>
                    )}
                    {activeSection === "Products" && (
                      <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                        {Products.map((product, index) => (
                          <li
                            className="text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  items-center justify-center"
                            key={index}
                          >
                            {product.name}
                          </li>
                        ))}
                      </ul>
                    )}
                    {activeSection === "Research" && (
                      <ul className="flex flex-col">
                        {Research.map((item, index) => (
                          <li
                            className="text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400 items-center justify-center"
                            key={index}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <li
                  className="font-semibold flex items-center cursor-pointer"
                  variant="link"
                >
                  Who we are <IoIosArrowDown />
                </li>
              </PopoverTrigger>
              <PopoverContent className="w-screen h-80 mt-8">
                <div className="flex items-center font-serif justify-center mt-20 font-bold text-[40px]">
                  coming soon...
                </div>
              </PopoverContent>
            </Popover>
            <li
              onClick={() => navigate("/blog")}
              className="font-semibold cursor-pointer"
            >
              Blog
            </li>
            <li
              onClick={() => navigate("/contact")}
              className="font-semibold cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="absolute top-10 right-12 lg:mr-[100px] sm:static flex items-center gap-4">
          <span className="text-lg">
            <IoSearchOutline />
          </span>
          <span
            onClick={() => navigate("/contact")}
            className="bg-black text-white cursor-pointer text-[14px] p-1 md:p-2 rounded"
          >
            Get Connected
          </span>
        </div>
      </div>
      <div
        className={`fixed mt-24 z-30 overflow-y-auto top-0 left-0 h-full bg-white transition-transform transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        style={{ width: "100%", transition: "transform 0.3s ease-in-out" }}
      >
        {/* <ul className="flex flex-col w-[80%] mt-4 ml-auto mb-0 mr-auto gap-4">
          <Accordion type="single" collapsible className="w-[90%]">
            <AccordionItem value="item-1">
              <AccordionTrigger>What we do</AccordionTrigger>
              <AccordionContent>
                <Accordion
                  type="single"
                  collapsible
                  className="w-[90%] mt-0 mb-0 ml-auto mr-auto"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Overview</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[18px] mt-4 font-semibold">
                        Mandlac is a comprehensive platform designed to
                        facilitate the deployment, management, and operation of
                        IoT systems
                      </p>
                      <p className="mt-4 text-[14px]">
                        Our customizable solutions encompass both hardware and
                        software services, ensuring that our products seamlessly
                        integrate into your operations while meeting your
                        specific requirements.
                      </p>
                      <div className="border border-amber-300 text-amber-400 text-center p-1 mt-5 w-[140px] rounded">
                        Discover More
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Industries</AccordionTrigger>
                    <AccordionContent>
                      {industrySectors.map((sector, index) => (
                        <li
                          onClick={() =>
                            handleNavigateIndustry(sector.navigate)
                          }
                          className="text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center"
                          key={index}
                        >
                          {sector.name}
                        </li>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Services</AccordionTrigger>
                    <AccordionContent>
                      {Services.map((service, index) => (
                        <li
                          onClick={() =>
                            handleNavigateServices(service.navigate)
                          }
                          className="text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center"
                          key={index}
                        >
                          {service.name}
                        </li>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Products</AccordionTrigger>
                    <AccordionContent>
                      {Products.map((product, index) => (
                        <li
                          className="text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center"
                          key={index}
                        >
                          {product.name}
                        </li>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Research and innovation</AccordionTrigger>
                    <AccordionContent>
                      {Research.map((item, index) => (
                        <li
                          className="text-[18px] font-normal cursor-pointer me-2 px-3 py-2 mb-1 rounded dark:bg-gray-700 dark:text-blue-400  inline-flex items-center justify-center"
                          key={index}
                        >
                          {item.name}
                        </li>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who we are</AccordionTrigger>
              <AccordionContent>Coming Soon...</AccordionContent>
            </AccordionItem>
          </Accordion>
          <li
            className="font-semibold mb-3"
            onClick={() => {
              navigate("/blog"), setMenuOpen(false);
            }}
          >
            Blog
          </li>
          <li
            className="font-semibold"
            onClick={() => {
              navigate("/contact"), setMenuOpen(false);
            }}
          >
            Contact
          </li>
        </ul> */}
        <div>
          <ul className={`mb-32 mt-5 w-[90%] mx-auto ${activeMenu ? 'hidden' : 'block'}`}>
            <li onClick={() => handleMenuClick('whatWeDo')} className="cursor-pointer flex justify-between border-b-2 py-2">
              What we do <FaArrowRight />
            </li>
            <li onClick={() => handleMenuClick('whoWeAre')} className="cursor-pointer flex justify-between border-b-2 py-2">
              Who we are <FaArrowRight />
            </li>
            <li onClick={() => {
              navigate("/blog"), setMenuOpen(false);
            }} className="cursor-pointer flex justify-between border-b-2 py-2">
              Blog
            </li>
            <li onClick={() => {
              navigate("/contact"), setMenuOpen(false);
            }} className="cursor-pointer flex justify-between border-b-2 py-2">
              Contact
            </li>
          </ul>

          {activeMenu === 'whatWeDo' && (
            <div className={`mb-32 w-[90%] mx-auto transition-transform duration-300 transform translate-x-0 ${activeSubMenu ? 'hidden' : 'block'}`}>
              <div onClick={() => setActiveMenu(null)} className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"  >
                <FaArrowLeft />
                Back
              </div>
              <div className=" font-semibold mb-2">
                What We Do
              </div>
              <ul >
                <li onClick={() => handleSubMenuClick('OverView')} className="flex border-t-2 border-b-2 py-2 justify-between items-center">
                  OverView <FaArrowRight />
                </li>
                <li onClick={() => handleSubMenuClick('Industries')} className="flex border-b-2 py-2 justify-between items-center">
                  Industries <FaArrowRight />
                </li>
                <li onClick={() => handleSubMenuClick('Services')} className="flex border-b-2 py-2 justify-between items-center">
                  Services <FaArrowRight />
                </li>
                <li onClick={() => handleSubMenuClick('Products')} className="flex border-b-2 py-2 justify-between items-center">
                  Products <FaArrowRight />
                </li>
                <li onClick={() => handleSubMenuClick('Research')} className="flex border-b-2 py-2 justify-between items-center">
                  Research and innovation <FaArrowRight />
                </li>
              </ul>
            </div>
          )}
          {activeMenu === 'whoWeAre' && (
            <div className={`mb-32 w-[90%] mx-auto transition-transform duration-300 transform translate-x-0 ${activeSubMenu ? 'hidden' : 'block'}`}>
              <div onClick={() => setActiveMenu(null)} className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"  >
                <FaArrowLeft />
                Back
              </div>
              <div className=" font-semibold mb-2">
                What We Do
              </div>
              <div>
                Coming Soon...
              </div>
            </div>
          )}

          {activeSubMenu === 'OverView' && (
            <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
              <div onClick={() => setActiveSubMenu(null)} className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"  >
                <FaArrowLeft />
                Back
              </div>
              <div className="font-semibold">
                Over View
              </div>
              <p className="text-[18px] mt-2 font-semibold">
                Mandlac is a comprehensive platform designed to
                facilitate the deployment, management, and operation of
                IoT systems
              </p>
              <p className="mt-4 text-[14px]">
                Our customizable solutions encompass both hardware and
                software services, ensuring that our products seamlessly
                integrate into your operations while meeting your
                specific requirements.
              </p>
              <div className="border border-amber-300 text-amber-400 text-center p-1 mt-5 w-[140px] rounded">
                Discover More
              </div>
            </div>
          )}

          {activeSubMenu === 'Industries' && (
            <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
              <div onClick={() => setActiveSubMenu(null)} className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"  >
                <FaArrowLeft />
                Back
              </div>
              <ul>
                {industrySectors.map((sector, index) => (
                  <li
                    onClick={() =>
                      handleNavigateIndustry(sector.navigate)
                    }
                    className="border-b-2 py-2 flex items-center justify-between"
                    key={index}
                  >
                    {sector.name}  <FaArrowRight />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSubMenu === 'Services' && (
            <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
              <div onClick={() => setActiveSubMenu(null)} className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"  >
                <FaArrowLeft />
                Back
              </div>
              <ul>
                {Services.map((service, index) => (
                  <li
                    onClick={() =>
                      handleNavigateServices(service.navigate)
                    }
                    className="border-b-2 py-2 flex items-center justify-between"
                    key={index}
                  >
                    {service.name}   <FaArrowRight />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSubMenu === 'Products' && (
            <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
              <div onClick={() => setActiveSubMenu(null)} className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"  >
                <FaArrowLeft />
                Back
              </div>
              <ul>
                {Products.map((product, index) => (
                  <li
                    className="border-b-2 py-2 flex items-center justify-between"
                    key={index}
                  >
                    {product.name} <FaArrowRight />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSubMenu === 'Research' && (
            <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
              <div onClick={() => setActiveSubMenu(null)} className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"  >
                <FaArrowLeft />
                Back
              </div>
              <ul>
                {Research.map((item, index) => (
                  <li
                    className="border-b-2 py-2 flex items-center justify-between"
                    key={index}
                  >
                    {item.name} <FaArrowRight />
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Header;
