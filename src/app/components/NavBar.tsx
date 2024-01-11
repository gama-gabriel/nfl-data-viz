

import React from 'react';
import Accordion from './Accordion';
import Balloon from './Balloon'
import Underline from './Underline'
import logo from '../../../public/logo.svg'
import hamburger from '../resources/hamburger.svg'
import Img from 'next/image'
import Link from 'next/link'


export default function NavBar() 
{
    const general_items = 
    [
        {
          title: 'Offensive stats', href: 'offense',
          content: ['Pass', 'Rush', 'Dropback vs Rush', 'Offensive success rate', 'Early downs', 'Late Downs', 'Screens', 'Trick plays', 'Short yardage', 'Motion', 'No huddle'],
        },
        {
          title: 'Defensive stats',  href: 'defense',
          content: ['Pass', 'Rush', 'Dropback vs Rush', 'Offensive success rate', 'Early downs', 'Late Downs', 'Screens', 'Trick plays', 'Short yardage', 'Motion', 'No huddle'],
        },
    ]

    const links = 
    [
        {href: '/', label: 'Home', dropdown: false},
        {href: '/general', label: 'General', dropdown: true, drop_items: [{label: 'EPA', href: 'general/epa'}, {label: 'Success Rate', href: 'general/success_rate'}], accordion: true, acc_items: general_items},
        {href: '/teams', label: 'Teams', dropdown: true, drop_items: [{label: 'EPA', href: 'general/epa'}, {label: 'Success Rate', href: 'general/success_rate'}], accordion: true, acc_items: general_items},
        {href: '/players', label: 'Players', dropdown: true, drop_items:[{label: 'EPA', href: 'general/epa'}, {label: 'Success Rate', href: 'general/success_rate'}], accordion: true, acc_items: general_items}
    ]

    return(
        <nav className=' px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex'>
        <Img src={hamburger} width={20} height={20} alt={'Menu'} className='cursor-pointer my-auto mx-4 invisible'></Img>
        <Img src={logo} width={80} height={80} alt={'NFL data viz logo'} className='cursor-pointer my-auto mx-4'></Img>
        <div className='flex px-5'>
            <ul className='flex my-auto'>
            {links.map((link) => (
                <li key={link.href} className='ml-5'>
                    <div className={link.dropdown ? 'group': ''}>
                        <Link href={link.href} className='flex relative py-3 font-bold text-sm cursor-pointer underline-offset-4 decoration-1 text-stone-400 hover:text-white'>
                            <Underline selected={link.href}/>
                            {link.label}
                        </Link>
                        
                            {link.dropdown &&
                            <Balloon items={link.drop_items} >
                                {link.accordion &&
                                <Accordion items={link.acc_items} />
                                }
                            </Balloon>
                            }
                    </div>
                </li>
            ))}
            </ul>
        </div>
                {/* <li className='ml-4'>

                    <Link href='/teams' className='relative py-3 font-bold text-sm cursor-pointer underline-offset-4 decoration-1 text-white  hover:text-white'>
                    {path === '/teams' &&
                    (<motion.span 
                    layoutId='underline'
                    className='absolute left-0 top-full block -mt-3 h-[2px] w-full bg-lime-500'/>)}
                        Home
                    </Link>
                    <Link href='/' className='relative ml-4 py-3 font-bold text-sm cursor-pointer underline-offset-4 decoration-1 text-white  hover:text-white'>
                    {path === '/' &&
                    (<motion.span 
                    layoutId='underline'
                    className='absolute left-0 top-full block -mt-3 h-[2px] w-full bg-lime-500'/>)}
                        Home
                    </Link>
                </li>
                <li className='ml-4'>
                    <div className='group'>
                        <Balloon items={items} name='General'></Balloon>    
                    </div>
                </li>
                <li className='ml-4'>
                <div className='group'>
                        <Balloon items={items} name='Teams'></Balloon>    
                    </div>
                </li>
                <li className='ml-4'>
                    <Balloon items={items} name='Players'></Balloon>    
                </li>
            
            </ul> */}

            
            <input type="text" placeholder='Search' className='my-auto ms-auto me-16 w-24 h-8 px-4 bg-stone-800 rounded-md text-xs '/>
            <p className='pe-4 my-auto text-sm'>About</p>
        
    </nav>
    )
}

