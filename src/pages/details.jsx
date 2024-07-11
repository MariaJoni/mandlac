import React, { useState } from 'react';
import '../App.css'
const sections = [
  {
    title: 'Reservation and Booking Management',
    content: (
      <>
        <h2 className='font-bold text-[30px]'>Reservation and Booking Management</h2>
        <p className='text-[25px] mb-5'>Industry Needs</p>
        <ul className='list-disc mb-5 ml-5'>
          <li className='text-[20px]'>Streamlined reservation process</li>
          <li className='text-[20px]'>Efficient booking management</li>
          <li className='text-[20px]'>Real-time availability updates</li>
          <li className='text-[20px]'>Integration with distribution channels</li>
        </ul>
        <p className='text-[25px] mb-4'>Mandlac Solutions</p>
        <div className='mb-3'>
          <span className='font-bold'>Reservation Systems: </span> Reservation Systems: Deployment of reservation systems that offer seamless booking experiences for guests, providing real-time availability updates and instant confirmation of bookings
        </div>
        <div className='mb-3'>
          <span className='font-bold'>Booking Management Platforms: </span>
          Implementation of booking management platforms that centralize reservation data, streamline booking workflows, and integrate with distribution channels such as OTAs and GDSs.
        </div>
        <div className='mb-3'>
          <span className='font-bold'> Channel Manager Integration:</span>
          Integration with channel manager solutions that synchronize room inventory and rates across various distribution channels, ensuring consistency and maximizing booking opportunities.
        </div>
        <div>
          <span className='font-bold'>Mobile Booking Applications</span>
          Mobile Booking Applications: Development of mobile booking applications that allow guests to make reservations conveniently from their smartphones, enhancing accessibility and guest satisfaction.
        </div>
      </>
    )
  },
  {
    title: 'Guest Experience Enhancement',
    content: (
      <>
        <h2 className='font-bold text-[30px]'>Guest Experience Enhancement</h2>
        <p className='text-[25px] mb-5'>Industry Needs</p>
        <ul className='list-disc mb-5 ml-5'>
          <li className='text-[20px]'>Personalized guest interactions</li>
          <li className='text-[20px]'>Efficient check-in and check-out processes</li>
          <li className='text-[20px]'>Access to guest amenities and services</li>
          <li className='text-[20px]'>Prompt resolution of guest requests</li>
        </ul>
        <p className='text-[25px] mb-4'>Mandlac Solutions</p>
        <div className='mb-3'>
          <span className='font-bold'>Guest Relationship Management (GRM) Systems: </span> Deployment of GRM systems that capture guest preferences and behavior, enabling personalized interactions, customized recommendations, and targeted marketing campaigns.
        </div>
        <div className='mb-3'>
          <span className='font-bold'>Mobile Check-In/Check-Out: </span>
          Implementation of mobile check-in/check-out solutions that allow guests to bypass front desk queues, complete registration formalities remotely, and receive digital room keys for seamless access.
        </div>
        <div className='mb-3'>
          <span className='font-bold'>In-Room Technology Integration: </span>
          Integration with in-room technology solutions such as smart TVs, IoT devices, and mobile apps that enable guests to control room amenities, access hotel services, and request assistance.
        </div>
        <div>
          <span className='font-bold'>Service Request Automation: </span>  Development of service request automation tools that enable guests to submit requests and preferences digitally, triggering automated workflows for prompt resolution and follow-up.
        </div>
      </>
    )
  },
  {
    title: 'Revenue Management and Pricing Optimization',
    content: (
      <>
        <h2 className='font-bold text-[30px]'>Revenue Management and Pricing Optimization</h2>
        <p className='text-[25px] mb-5'>Industry Needs</p>
        <ul className='list-disc mb-5 ml-5'>
          <li className='text-[20px]'>Dynamic pricing strategies</li>
          <li className='text-[20px]'>Revenue maximization through yield management</li>
          <li className='text-[20px]'>Forecasting and demand analysis</li>
          <li className='text-[20px]'>Competitive pricing intelligence</li>
        </ul>
        <p className='text-[25px] mb-4'>Mandlac Solutions</p>
        <div className='mb-3'>
          <span className='font-bold'>Competitive pricing intelligence: </span>
          Deployment of RMS that analyze demand trends, competitor pricing, and market dynamics to optimize room rates, maximize revenue, and achieve occupancy targets.
        </div>
        <div className='mb-3'>
          <span className='font-bold'>Dynamic Pricing Algorithms: </span>
          Implementation of dynamic pricing algorithms that adjust room rates in real-time based on demand fluctuations, availability, and other market variables, ensuring competitiveness and profitability.        </div>
        <div className='mb-3'>
          <span className='font-bold'>Demand Forecasting Tools: </span>
          Integration of demand forecasting tools that use historical data and predictive analytics to forecast future demand patterns, enabling proactive revenue management strategies        </div>
        <div>
          <span className='font-bold'>Competitive Intelligence Platforms: </span>
          Development of competitive intelligence platforms that monitor competitor pricing, promotions, and distribution strategies, providing insights for pricing optimization and market positioning.        </div>
      </>
    )
  },
  {
    title: 'Operational Efficiency and Staff Management',
    content: (
      <>
        <h2 className='font-bold text-[30px]'>Operational Efficiency and Staff Management </h2>
        <p className='text-[25px] mb-5'>Industry Needs</p>
        <ul className='list-disc mb-5 ml-5'>
          <li className='text-[20px]'>Streamlined operations and workflows</li>
          <li className='text-[20px]'>Efficient resource allocation and scheduling</li>
          <li className='text-[20px]'>Staff training and performance management</li>
          <li className='text-[20px]'>Communication and collaboration among staff</li>
        </ul>
        <p className='text-[25px] mb-4'>Mandlac Solutions</p>
        <div className='mb-3'>
          <span className='font-bold'>Property Management Systems (PMS):</span>
          Deployment of PMS that automate front and back-office operations, including room assignment, housekeeping, inventory management, and billing, improving operational efficiency and guest service.
        </div>
        <div className='mb-3'>
          <span className='font-bold'>Staff Scheduling Software: </span>
          Implementation of staff scheduling software that optimizes employee shifts, manages labor costs, and ensures adequate staffing levels based on occupancy forecasts and workload analysis.
        </div>
        <div className='mb-3'>
          <span className='font-bold'>Training and Performance Management Tools: </span>
          Integration with training and performance management tools that provide staff training modules, performance assessments, and feedback mechanisms to enhance employee skills and productivity.
        </div>
        <div>
          <span className='font-bold'>Communication Platforms: </span>
          Development of communication platforms that facilitate real-time communication and collaboration among staff members, improving coordination, response times, and guest satisfaction.        </div>
      </>
    )
  },
  {
    title: 'Guest Feedback and Reputation Management',
    content: (
      <>
        <h2 className='font-bold text-[30px]'>Guest Feedback and Reputation Management</h2>
        <p className='text-[25px] mb-5'>Industry Needs</p>
        <ul className='list-disc mb-5 ml-5'>
          <li className='text-[20px]'>Collection of guest feedback and reviews</li>
          <li className='text-[20px]'>Monitoring and response to online reputation</li>
          <li className='text-[20px]'>Continuous improvement based on guest insights</li>
          <li className='text-[20px]'>Reputation building and brand management</li>
        </ul>
        <p className='text-[25px] mb-4'>Mandlac Solutions</p>
        <div className='mb-3'>
          <span className='font-bold'>Guest Feedback Management Systems: </span>
          Deployment of guest feedback management systems that collect feedback through surveys, comment cards, and online reviews, enabling hotels to capture guest sentiment and identify areas for improvement.
        </div>
        <div className='mb-3'>
          <span className='font-bold'>Online Reputation Monitoring Tools: </span>
          Implementation of online reputation monitoring tools that track reviews and mentions across review sites, social media, and OTAs, allowing hotels to respond promptly and manage their online reputation.
        </div>
        <div className='mb-3'>
          <span className='font-bold'>Data Analytics for Guest Insights: </span>
          Integration with data analytics tools that analyze guest feedback and sentiment data to derive actionable insights, inform operational improvements, and enhance guest satisfaction.
        </div>
        <div>
          <span className='font-bold'>Brand Reputation Building Strategies: </span>
          Development of brand reputation building strategies that focus on delivering exceptional guest experiences, fostering positive word-of-mouth, and building brand loyalty through consistent quality and service excellence.            </div>
      </>
    )
  }
];

function Details() {
  const [selectedSection, setSelectedSection] = useState(sections[0].title);

  const handleSectionClick = (section) => {
    setSelectedSection(section.title);
  };

  return (
    <div className='details'>
      <div className='flex w-[90%] mt-10 mb-0 ml-auto mr-auto gap-3'>
        <div className='w-[40%]'>
          {sections.map((section) => (
            <div
              key={section.title}
              onClick={() => handleSectionClick(section)}
              className={`${selectedSection === section.title ? 'font-bold bg-green-50' : ''} p-3`}
            >
              {section.title}
            </div>
          ))}
        </div>
        <div className='w-[50%]'>
          {sections.map((section) => (
            selectedSection === section.title && (
              <div key={section.title}>
                {section.content}
              </div>
            )
          ))}
        </div>
      </div>
    </div >
  );
}

export default Details;
