'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function NavitemWrapper({ children, className, initial=0.7 }: {children: any, className?: string, initial?: number}) 
{
  return (
    <motion.div initial={{opacity: initial}} whileHover={{ opacity: 1 }} className={className}>
        {children}
    </motion.div>
  )
}
