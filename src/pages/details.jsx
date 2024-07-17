import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sectorMappings from './industriesContents';

function Details() {
  const { sector } = useParams();
  const SectorComponent = sectorMappings[sector.toLowerCase()];
  const [selectedSection, setSelectedSection] = useState(SectorComponent[0].title);

  const handleSectionClick = (title) => {
    setSelectedSection(title);
  };

  return (
    <div className='flex bg-transparent bg-gradient-to-b from-[#EDF8EB00] to-[#edf8eb] h-auto'>
      <div className='flex flex-col h-auto mb-10 md:flex-row w-[90%] mt-107 ml-auto mr-auto gap-3'>
        <div className='md:w-[40%] w-full'>
          {SectorComponent.map((section) => (
            <div key={section.title} onClick={() => handleSectionClick(section.title)} className={`${selectedSection === section.title ? 'font-bold bg-green-50' : ''} p-3 cursor-pointer`} >
              {section.title}
            </div>
          ))}
        </div>
        <div className='md:w-[60%] w-full'>
          {SectorComponent.map((section) => (
            selectedSection === section.title && (
              <div key={section.title} className='p-3'>
                {section.content}
              </div>
            )
          ))}
        </div>
      </div>
    </div>

  );
}

export default Details;
