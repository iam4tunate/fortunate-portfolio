import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Accordion as AccordionArr } from '../data';

const Accordion = () => {
  const [selectedID, setSelectedID] = useState(null);

  const handleToggle = (id) => {
    setSelectedID(id !== selectedID ? id : null);
  };
  return (
    <div className=''>
      {AccordionArr.map(({ id, title, text }) => (
        <div
          key={id}
          className='mb-12 last:mb-0 cursor-pointer'
          onClick={() => handleToggle(id)}
        >
          <div className='after:bg-dark after:h-[2px] after:w-full after:block after:mt-3'>
            <div className='grid grid-cols-[3rem_1fr] items-center'>
              <span className='rounded-full border-2 border-dark h-6 w-6 font-ppmoriSemibold flex items-center justify-center text-sm'>
                {id}
              </span>
              <div className='flex items-center'>
                <span className='text-xl'>{title}</span>
                <BiChevronDown className='ml-auto text-2xl' />
              </div>
            </div>
          </div>
          {selectedID === id && (
            <p className='pl-[3rem] pt-4 font-extralight'>{text}</p>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
