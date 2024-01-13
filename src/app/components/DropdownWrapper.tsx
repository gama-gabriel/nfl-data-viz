'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function DropdownWrapper({ children, className }: {children: any, className: string}) 
{
  return (
    <motion.div initial={{opacity: 0.7}} whileHover={{ opacity: 1 }} className={className}>
        {children}
    </motion.div>
  )
}
