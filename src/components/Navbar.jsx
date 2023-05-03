import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link 
            to='' 
            className='flex sm:flex-row flex-col sm:items-center gap-2'
            onClick={()=> {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <img src={logo} alt="logo" className='object-contain sm:w-32 sm:h-32 w-24 h-24' />
            <p className='text-white sm:text-[18px] lg:flex text-[12px] font-bold cursor-pointer'>
              Front &nbsp;<span className='sm:block'>| Web Developer</span>
            </p>
          </Link>
          <ul className='list-none hidden sm:flex gap-6 flex-row lg:gap-10'>
            {navLinks.map((links) => (
               <li
                key={links.id}
                className={`${
                  active === links.title
                  ? 'text-white'
                  : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(links.title)}
               >
               <a href={`#${links.id}`}>{links.title}</a>
             </li>
            ))}
          </ul>
          <div className='sm:hidden felx justify-end items-center'>
              <img 
                src={toggle ? close : menu} 
                alt="menu" 
                className='w-[28px] h-[28px] object-contain cursor-pointer' 
                onClick={()=> setToggle(!toggle)}
              />

            <div 
              className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-36 xs:top-24 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((links) => (
                <li
                  key={links.id}
                  className={`${
                    active === links.title
                    ? 'text-white'
                    : 'text-secondary'
                  }font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => { 
                    setToggle(!toggle)
                    setActive(links.title)
                  }}
                >
                  <a href={`#${links.id}`}>{links.title}</a>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar