'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

export default function Underline({ selected }: {selected: string}) 
{
    const path = usePathname()
    return (
        <>
        {path === selected &&
        (<motion.span layoutId='underline' className='absolute left-0 top-full block rounded-lg -mt-3 h-[1px] w-full bg-lime-500'/>)}
        </>
    )
}

