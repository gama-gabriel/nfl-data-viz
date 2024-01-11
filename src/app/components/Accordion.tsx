'use client'
import React, { useState } from 'react';
import arrow from '../../../public/arrow.svg'
import Img from 'next/image'
import Link from 'next/link'

const Accordion = ({ items }: {items: Array<any>}) => {
    const [openIndices, setOpenIndices] = useState([]);

    const toggleItem = (index: number) => 
    {
        setOpenIndices((prevIndices: any) =>
        prevIndices.includes(index) ? prevIndices.filter((i: any) => i !== index): [...prevIndices, index]
        )
    }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={openIndices.includes(index) ? 'block my-ayto py-2 text-stone-400 cursor-pointer font-bold hover:text-white' : 'block my-ayto py-2 text-stone-400 cursor-pointer hover:text-white'}
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <Img src={arrow} width={10} height={10} alt='arrow' className={openIndices.includes(index) ? 'ms-6 my-1.5 float-right' : 'ms-6 my-1.5 float-right rotate-180'}></Img>
          </div>
          {openIndices.includes(index) && (
            <ul >
              {item.content.map((itemContent, contentIndex) => (
                <Link href={`/${itemContent}`} key={contentIndex} className='flex my-ayto py-2 ms-3 text-stone-400 cursor-pointer hover:text-white'>{itemContent}</Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;