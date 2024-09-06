import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-black text-white w-full h-auto flex flex-col justify-center items-center">
      <div className="py-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-2 w-[90%]">
        <div className="">
          <h2 className="text-xl font-roboto font-semibold mb-3">About</h2>
          <p className="w-[90%] font-roboto font-normal text-base">
            Mandlac pioneers IoT innovation, offering customizable smart water
            management solutions for residential, commercial, and
            multi-apartment buildings, revolutionizing everyday interactions
            with technology.
          </p>
          <div className="flex mt-4 gap-5">
            <FaFacebookSquare className="w-5 h-5" />
            <FaYoutube className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaLinkedin className="w-5 h-5" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-roboto font-semibold mb-3">Explore</h2>
          <ul>
            <li className="mb-2">
              <span onClick={() => { navigate("/"), window.location.reload(); }}
                className="pb-2 cursor-pointer hover:text-amber-300">What we do</span>
            </li>
            <li className="mb-2">
              <span onClick={() => { navigate("/"), window.location.reload(); }}
                className="pb-2 cursor-pointer hover:text-amber-300"> Who we are</span>
            </li>
            <li className="mb-2">
              <span className="pb-2 cursor-pointer hover:text-amber-300" onClick={() => {
                navigate("/blog");
                window.location.reload();
                window.scrollTo(0, 0);
              }}> Blog</span>
            </li>
            <li className="mb-2">
              <span onClick={() => {
                navigate("/contact"), window.scrollTo(0, 0);
                window.location.reload();
              }}
                className="pb-2 cursor-pointer hover:text-amber-300">Contact</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-roboto font-semibold mb-3">Products</h2>
          <ul>
            <li className="pb-2">Biometric</li>
            <li className="pb-2">Fire Alarm</li>
            <li className="pb-2">Smart Home</li>
            <li className="pb-2">Smart Locker</li>
            <li className="pb-2">Vital Sense</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-roboto font-semibold mb-3">Contact Us</h2>
          <h4>CORPORATE ADDRESS</h4>
          <p className="text-[13px] mt-2 mb-2">
            Mandlac Technologies Private Limited HD-127,
            <br />
            RMZ Latitude, 9th Floor, WeWork Hebbal, Bengaluru,
            <br />
            Karnataka – 560024, India
          </p>
          <h4>Registered Address</h4>
          <p className="text-[13px] mt-2 mb-2">
            Mandlac Technologies Private Limited 543/2, Vandipettai, NH Main
            Road, Kadayanallur, Tamilnadu – 627751, India
          </p>
          <h4>AUSTRALIA ADDRESS</h4>
          <p className="text-[13px] mt-2 mb-2">
            22, Canterburry Drive, Willetton 6155, Australia
          </p>
          <h4>REACH US</h4>
          <div className="flex items-center gap-2">
            <MdEmail className="w-5 h-5 text-amber-400" />
            reachus@mandlac.com
          </div>
          <div className="flex items-center gap-2">
            <FaMobileAlt className="w-5 h-5 text-amber-400" />
            +91-9791245607
          </div>
          <div className="flex items-center gap-2">
            <GiRotaryPhone className="w-5 h-5 text-amber-400" />
            1800-309-8980
          </div>
        </div>
      </div>
      <div className="text-center w-full border-t-2 pt-5 pb-3">
        © 2024 MandLac . All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
