import React, { useState } from "react";
import nipponLogo from "../assets/MandlacLogo.png";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosClose,
  IoIosMenu,
} from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { industrySectors, Products, Research, Services } from "./contents";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [headerWhite, setHeaderWhite] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const handleSubMenuClick = (menu) => {
    setActiveSubMenu(menu === activeSubMenu ? null : menu);
  };

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

  const handleNavigate = (path) => {
    setHeaderWhite(true);
    navigate(path);
  };

  const handlePopoverOpen = (popoverName) => {
    setPopoverOpen((prev) => (prev === popoverName ? null : popoverName));
    setHeaderWhite(false);
  };

  const handleBackHome = () => {
    navigate("/");
    setHeaderWhite(false);
  };

  return (
    <div className="relative w-full">
      <div
        className={cn(
          "flex flex-col md:flex-row w-full justify-between items-center border-b-1 border-gray-300 shadow-sm p-2 h-24 fixed z-50",
          popoverOpen || headerWhite ? "bg-white" : "bg-[#ffeb9b]"
        )}
      >
        <div className="flex justify-between w-full md:w-auto items-center">
          <img
            onClick={handleBackHome}
            src={nipponLogo}
            className=" w-20 h-16 mb-2 md:mb-0 cursor-pointer lg:ml-[100px]"
            alt="Logo"
          />
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoIosClose className="bg-black text-white" />
            ) : (
              <IoIosMenu />
            )}
          </button>
        </div>
        <div className={`hidden md:flex flex-row gap-4 md:gap-8 items-center`}>
          <ul className="flex flex-row gap-4 md:gap-8 items-center">
            <Popover onOpenChange={() => handlePopoverOpen("whatWeDo")}>
              <PopoverTrigger asChild>
                <li
                  className={cn(
                    popoverOpen === "whatWeDo" && "text-[#D0A600]",
                    "font-roboto font-medium text-[15px] flex items-center cursor-pointer gap-2"
                  )}
                  variant="link"
                >
                  What we do
                  <IoIosArrowDown
                    className={cn(
                      "transition-transform duration-300",
                      popoverOpen === "whatWeDo" ? "rotate-180" : ""
                    )}
                  />
                </li>
              </PopoverTrigger>
              <PopoverContent className="w-screen h-80 mt-8">
                <div className="flex items-start w-[85%] mt-5 mb-5 ml-auto mr-auto">
                  <div className="w-[30%] border-r-2">
                    <div
                      className={`${
                        activeSection === "Overview" ? "bg-[#FFFCEE]" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer hover:bg-[#FFFCEE] group`}
                      onClick={() => handleClick("Overview")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        Overview
                      </span>
                      {(isHovered || activeSection === "Overview") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                    <div
                      className={`${
                        activeSection === "Industries" ? "bg-yellow-50" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer hover:bg-[#FFFCEE] group`}
                      onClick={() => handleClick("Industries")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        Industries
                      </span>
                      {(isHovered || activeSection === "Industries") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                    <div
                      className={`${
                        activeSection === "Services" ? "bg-[#FFFCEE]" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer group`}
                      onClick={() => handleClick("Services")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        Services
                      </span>
                      {(isHovered || activeSection === "Services") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                    <div
                      className={`${
                        activeSection === "Products" ? "bg-[#FFFCEE]" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer group`}
                      onClick={() => handleClick("Products")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        Products
                      </span>
                      {(isHovered || activeSection === "Products") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                    <div
                      className={`${
                        activeSection === "Research" ? "bg-[#FFFCEE]" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer group`}
                      onClick={() => handleClick("Research")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        Research and innovation
                      </span>
                      {(isHovered || activeSection === "Research") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                  </div>
                  <div className="w-[70%] h-full ml-8">
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
                      <ul className="grid md:grid-cols-3 lg:grid-cols-5 gap-2">
                        {industrySectors
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((sector, index) => (
                            <li
                              onClick={() =>
                                handleNavigateIndustry(sector.navigate)
                              }
                              className="md:text-sm lg:text-base text-left font-light font-roboto cursor-pointer hover:text-[#D0A600]"
                              key={index}
                            >
                              {sector.name}
                            </li>
                          ))}
                      </ul>
                    )}
                    {activeSection === "Services" && (
                      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {Services.sort((a, b) =>
                          a.name.localeCompare(b.name)
                        ).map((service, index) => (
                          <li
                            onClick={() =>
                              handleNavigateServices(service.navigate)
                            }
                            className="md:text-sm lg:text-base text-left font-light font-roboto cursor-pointer hover:text-[#D0A600]"
                            key={index}
                          >
                            {service.name}
                          </li>
                        ))}
                      </ul>
                    )}
                    {activeSection === "Products" && (
                      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {Products.map((product, index) => (
                          <li
                            className="md:text-sm lg:text-base text-left font-light font-roboto cursor-pointer hover:text-[#D0A600]"
                            key={index}
                          >
                            {product.name}
                          </li>
                        ))}
                      </ul>
                    )}
                    {activeSection === "Research" && (
                      <ul className="flex flex-col gap-4">
                        {Research.map((item, index) => (
                          <li
                            className="md:text-sm lg:text-base text-left font-light font-roboto cursor-pointer hover:text-[#D0A600]"
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
            <Popover onOpenChange={() => handlePopoverOpen("whoWeAre")}>
              <PopoverTrigger asChild>
                <li
                  className={cn(
                    popoverOpen === "whoWeAre" && "text-[#D0A600]",
                    "font-roboto font-medium text-[15px] flex items-center cursor-pointer gap-2"
                  )}
                  variant="link"
                >
                  Who we are
                  <IoIosArrowDown
                    className={cn(
                      "transition-transform duration-300",
                      popoverOpen === "whoWeAre" ? "rotate-180" : ""
                    )}
                  />
                </li>
              </PopoverTrigger>
              <PopoverContent className="w-screen h-80 mt-8">
                <div className="flex items-center w-[85%] mt-5 mb-5 ml-auto mr-auto">
                  <div className="w-[30%] border-r-2">
                    <div
                      className={`${
                        activeSection === "Overview" ? "bg-[#FFFCEE]" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer hover:bg-[#FFFCEE] group`}
                      onClick={() => handleClick("Overview")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        Overview
                      </span>
                      {(isHovered || activeSection === "Overview") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                    <div
                      className={`${
                        activeSection === "AboutUs" ? "bg-yellow-50" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer hover:bg-[#FFFCEE] group`}
                      onClick={() => handleClick("AboutUs")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        About Us
                      </span>
                      {(isHovered || activeSection === "AboutUs") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                    <div
                      className={`${
                        activeSection === "LeaderShip" ? "bg-[#FFFCEE]" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer group`}
                      onClick={() => handleClick("LeaderShip")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        LeaderShip
                      </span>
                      {(isHovered || activeSection === "LeaderShip") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                    <div
                      className={`${
                        activeSection === "Events" ? "bg-[#FFFCEE]" : ""
                      } flex font-semibold p-2 text-[20px] justify-between items-center cursor-pointer group`}
                      onClick={() => handleClick("Events")}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <span className="font-roboto font-normal text-lg group-hover:text-[#D0A600]">
                        Events
                      </span>
                      {(isHovered || activeSection === "Events") && (
                        <IoIosArrowForward className="text-[#D0A600]" />
                      )}
                    </div>
                  </div>
                <div className="w-[70%] h-full bg-slate-200">

                </div>
                </div>
              </PopoverContent>
            </Popover>
            <li
              onClick={() => handleNavigate("/blog")}
              className="font-roboto font-medium text-[15px] cursor-pointer"
            >
              Blog
            </li>
            <li
              onClick={() => handleNavigate("/contact")}
              className="font-roboto font-medium text-[15px] cursor-pointer"
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
            className="bg-black text-white cursor-pointer font-roboto font-semibold text-[16px] p-1 md:p-2 rounded"
          >
            Get Connected
          </span>
        </div>
      </div>
      <div
        className={`fixed mt-24 z-30 overflow-y-auto top-0 left-0 h-full bg-white transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        style={{ width: "100%", transition: "transform 0.3s ease-in-out" }}
      >
        <ul
          className={`mb-32 mt-5 w-[90%] mx-auto ${
            activeMenu ? "hidden" : "block"
          }`}
        >
          <li
            onClick={() => handleMenuClick("whatWeDo")}
            className="cursor-pointer flex justify-between border-b-2 py-2"
          >
            What we do <FaArrowRight />
          </li>
          <li
            onClick={() => handleMenuClick("whoWeAre")}
            className="cursor-pointer flex justify-between border-b-2 py-2"
          >
            Who we are <FaArrowRight />
          </li>
          <li
            onClick={() => {
              navigate("/blog"), setMenuOpen(false);
            }}
            className="cursor-pointer flex justify-between border-b-2 py-2"
          >
            Blog
          </li>
          <li
            onClick={() => {
              navigate("/contact"), setMenuOpen(false);
            }}
            className="cursor-pointer flex justify-between border-b-2 py-2"
          >
            Contact
          </li>
        </ul>

        {activeMenu === "whatWeDo" && (
          <div
            className={`mb-32 w-[90%] mx-auto transition-transform duration-300 transform translate-x-0 ${
              activeSubMenu ? "hidden" : "block"
            }`}
          >
            <div
              onClick={() => setActiveMenu(null)}
              className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"
            >
              <FaArrowLeft />
              Back
            </div>
            <div className=" font-semibold mb-2">What We Do</div>
            <ul>
              <li
                onClick={() => handleSubMenuClick("OverView")}
                className="flex border-t-2 border-b-2 py-2 justify-between items-center"
              >
                OverView <FaArrowRight />
              </li>
              <li
                onClick={() => handleSubMenuClick("Industries")}
                className="flex border-b-2 py-2 justify-between items-center"
              >
                Industries <FaArrowRight />
              </li>
              <li
                onClick={() => handleSubMenuClick("Services")}
                className="flex border-b-2 py-2 justify-between items-center"
              >
                Services <FaArrowRight />
              </li>
              <li
                onClick={() => handleSubMenuClick("Products")}
                className="flex border-b-2 py-2 justify-between items-center"
              >
                Products <FaArrowRight />
              </li>
              <li
                onClick={() => handleSubMenuClick("Research")}
                className="flex border-b-2 py-2 justify-between items-center"
              >
                Research and innovation <FaArrowRight />
              </li>
            </ul>
          </div>
        )}
        {activeMenu === "whoWeAre" && (
          <div
            className={`mb-32 w-[90%] mx-auto transition-transform duration-300 transform translate-x-0 ${
              activeSubMenu ? "hidden" : "block"
            }`}
          >
            <div
              onClick={() => setActiveMenu(null)}
              className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"
            >
              <FaArrowLeft />
              Back
            </div>
            <div className=" font-semibold mb-2">What We Do</div>
            <div>Coming Soon...</div>
          </div>
        )}

        {activeSubMenu === "OverView" && (
          <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
            <div
              onClick={() => setActiveSubMenu(null)}
              className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"
            >
              <FaArrowLeft />
              Back
            </div>
            <div className="font-semibold">Over View</div>
            <p className="text-[18px] mt-2 font-semibold">
              Mandlac is a comprehensive platform designed to facilitate the
              deployment, management, and operation of IoT systems
            </p>
            <p className="mt-4 text-[14px]">
              Our customizable solutions encompass both hardware and software
              services, ensuring that our products seamlessly integrate into
              your operations while meeting your specific requirements.
            </p>
            <div className="border border-amber-300 text-amber-400 text-center p-1 mt-5 w-[140px] rounded">
              Discover More
            </div>
          </div>
        )}

        {activeSubMenu === "Industries" && (
          <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
            <div
              onClick={() => setActiveSubMenu(null)}
              className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"
            >
              <FaArrowLeft />
              Back
            </div>
            <ul>
              {industrySectors
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((sector, index) => (
                  <li
                    onClick={() => handleNavigateIndustry(sector.navigate)}
                    className="border-b-2 py-2 flex items-center justify-between"
                    key={index}
                  >
                    {sector.name} <FaArrowRight />
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeSubMenu === "Services" && (
          <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
            <div
              onClick={() => setActiveSubMenu(null)}
              className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"
            >
              <FaArrowLeft />
              Back
            </div>
            <ul>
              {Services.sort((a, b) => a.name.localeCompare(b.name)).map(
                (service, index) => (
                  <li
                    onClick={() => handleNavigateServices(service.navigate)}
                    className="border-b-2 py-2 flex items-center justify-between"
                    key={index}
                  >
                    {service.name} <FaArrowRight />
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        {activeSubMenu === "Products" && (
          <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
            <div
              onClick={() => setActiveSubMenu(null)}
              className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"
            >
              <FaArrowLeft />
              Back
            </div>
            <ul>
              {Products.sort((a, b) => a.name.localeCompare(b.name)).map(
                (product, index) => (
                  <li
                    className="border-b-2 py-2 flex items-center justify-between"
                    key={index}
                  >
                    {product.name} <FaArrowRight />
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {activeSubMenu === "Research" && (
          <div className="transition-transform duration-300 transform translate-x-0 w-[90%] mx-auto">
            <div
              onClick={() => setActiveSubMenu(null)}
              className="mb-2 mt-2 py-2 text-gray-800 rounded hover:bg-gray-300 flex items-center gap-4"
            >
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
  );
}

export default Header;
