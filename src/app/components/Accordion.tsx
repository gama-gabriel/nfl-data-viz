'use client'
import React, { useState } from 'react';
import arrow from '../../../public/arrow.svg'
import Img from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, stagger } from "framer-motion"

const Accordion = ({ items }: {items: Array<any>}) => {
    const [openIndices, setOpenIndices] = useState([]);

    const toggleItem = (index: number) => 
    {
        setOpenIndices((prevIndices: any) =>
        prevIndices.includes(index) ? prevIndices.filter((i: any) => i !== index): [...prevIndices, index]
        )
    }

    const container = {
      hidden: { opacity: 0},
      show: {
        opacity: 1, 
        transition: {
          staggerChildren: 0.05,
          delay: 0.05
        }
      }
      
    }

    const son = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
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
          <AnimatePresence>
          {openIndices.includes(index) && (
            
            <motion.ul variants={container}
            initial="hidden"
            animate="show"
            exit={{ height: 0, opacity: 0, transition: { delay: 0.05 }}}>
              {item.content.map((itemContent, contentIndex) => (

                  <motion.li key={contentIndex} variants={son} >
                    <Link href={`/${itemContent}`} key={contentIndex} className='flex my-ayto py-2 ms-3 text-stone-400 cursor-pointer hover:text-white'>
                      {itemContent}
                    </Link>
                  </motion.li>
              ))}
            </motion.ul>
            
            
          )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;