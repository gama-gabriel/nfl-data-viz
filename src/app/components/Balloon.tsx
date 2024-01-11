'use client'

import React, { ReactNode } from 'react';
import Accordion from './Accordion';
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

type Children = {children?: ReactNode}

const Balloon = ({ items, children }: {items: Array<any>, children: any} ) => {
    const path = usePathname()

    return (
    <div className=' my-auto'>
        
            <div className="absolute px-5 py-2 bg-neutral-950 rounded-md border border-neutral-800 text-xs invisible group-hover:visible hover:visible">  
              <ul className="list-none ">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className='block my-ayto py-2 text-stone-400 cursor-pointer hover:text-white'>
                            {item.label}
                        </Link>
                    </li>

                ))}           
              </ul>
              {children}
            </div>
    </div>
  );
};

export default Balloon;