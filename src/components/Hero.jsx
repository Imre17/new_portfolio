import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {

  return (
    <section className='relative w-full h-screen mx-auto'>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[195px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col mt-5 items-center z-10">
          <div className='w-5 h-5 rounded-full bg-[#ac0307]'/>
          <div className='w-1 sm:h-80 h-40 red-gradient'/>
        </div>
        <div className='z-10'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#ac0307]'>Imre</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop 3D visual, user <br className='sm:block hidden'/> interfaces and web applications</p>
        </div>
      </div>

      <ComputersCanvas />
      <div
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
      >
        <a href="#about">
          <div className='sm:w-[35px] sm:h-[64px] w-[25px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start'>
            <motion.div
              animate={{ y:[0, 30, 0], x: [0] }} 
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='sm:w-5 sm:h-5 w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero