import React from "react";
import history from "../assets/aboutUs/history.svg";
import { useParams } from "react-router-dom";
import ExploreSolution from "./exploreSolution";

function AboutSector() {
  const { sector } = useParams();

  const aboutContent = [
    {
      menu: "CompanyHistory",
      title: "Our Company History",
      contant: (
        <span>
          Mandlac was founded with a vision to revolutionize industries through
          innovative IoT solutions. Our journey began with a commitment to serve
          all sectors by creating futuristic products. Harnessing data-driven
          processes, we specialize in smart monitoring, controlling, and
          management systems. Our aim is to empower industries with cutting-edge
          technology, driving efficiency and sustainability into the future, all
          while ensuring we deliver on our promises.
        </span>
      ),
    },
    {
      menu: "FounderStory",
      title: "Our Founder Story",
      contant: (
        <div className="flex flex-col gap-5">
          <span>
            The story of Mandlac's inception is rooted in a collective passion
            for sustainable development and a deep understanding of technology
            and industry landscapes. Drawing from our founders' extensive
            knowledge and experience across diverse fields, including
            technology, domain expertise, and market analysis, we identified a
            critical gap in the industry: the need for innovative IoT solutions
            that drive efficiency and sustainability.<br />
          </span>
          <span>
            Motivated by this insight, we came together with a shared vision: to
            leverage our combined expertise to develop transformative solutions
            that address the evolving needs of various industries. Each founder
            brings a unique perspective and skill set to the table, enriching
            our collaborative efforts and driving innovation forward. <br />
          </span>
          <span>
            With a firm commitment to sustainable development, we embarked on
            our journey, fueled by a collective ambition to make a positive
            impact on the world. Our team's multidisciplinary approach and
            deep-rooted industry knowledge enable us to envision and create
            cutting-edge IoT products that not only meet but exceed
            expectations.<br />
          </span>
          <span>
            Having collectively accumulated more than a decade of experience in
            our respective fields, we are well-equipped to navigate the
            complexities of the industry landscape and deliver solutions that
            drive tangible results. At Mandlac, our journey is driven by a
            shared commitment to excellence, innovation, and the relentless
            pursuit of a more sustainable future.
          </span>
        </div>
      ),
    },
  ];

  const data = aboutContent.find(
    (item) => item.menu.toLowerCase() === sector.toLowerCase()
  );

  return (
    <div className="w-full">
      <div className="w-full mt-20">
        <img src={history} alt="companyhistory" className="w-full" />
      </div>
      <div className="w-full my-10 flex flex-col items-center text-center">
        <div className="w-[80%]">
          <span className="font-mulish font-extrabold text-4xl">
            {data.title}
          </span>
        </div>
        <div className="w-[70%] my-10">
          <span className="font-roboto font-normal text-xl">
            {data.contant}
          </span>
        </div>
      </div>
      <ExploreSolution />
    </div>
  );
}

export default AboutSector;
