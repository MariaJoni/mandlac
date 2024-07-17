import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { news } from './contents';

function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <div className='w-full'>
      <div className="bg-[url('./assets/Blog.png')] w-full h-[250px] md:h-[300px] lg:h-[350px] bg-no-repeat bg-cover relative -z-10 ">
        <div className="absolute -z-20 top-10 left-10 md:left-32 lg:left-32 md:top-32 lg:top-32 pt-2 pb-2 pl-1 pr-10 md:pt-5 md:pb-5 md:pl-3 text-white bg-[#565857] flex items-center gap-3 w-[200px] font-semibold text-[20px]">
          <FaSearch className='text-amber-400 h-6 w-6' /> Blog
        </div>
        <div className="absolute mt-5 top-24 left-10 text-[15px] text-white md:top-52 md:left-32 md:text-[25px]">
          Connected Insights: Exploring the World of IoT
        </div>
      </div>
      <div className='mt-20 flex flex-col'>
        <h2 className='text-[30px] font-semibold text-center mt-5 md:mt-0'> News & Articles</h2>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-[90%] ml-auto mr-auto mb-10'>
          {news.map((article, index) => (
            <div data-aos="fade-left" key={index} className='border p-2 md:w-[85%]'>
              <img src={article.img} alt="Article Image" className='w-[100%] h-[250px] rounded mr-4 transition-transform duration-300 ease-in-out hover:scale-110' />
              <div>
                <div className='text-sm text-gray-500 flex items-center gap-4'><FaUser /> {article.post}   <FaCalendarAlt /> {article.date}</div>
                <h3 className='text-lg font-semibold p-4'>{article.title}</h3>
                <div className='flex items-end border w-[150px] p-2 ml-5 hover:bg-amber-400 hover:text-white mb-10'>READ MORE ... | <FaArrowRight /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
