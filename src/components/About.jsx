import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from './hoc'

const ServicesCard = ({index, title, icon}) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
    >
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertinary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
           className='w-16 h-16 object-contain' 
          />
          <h3
            className='text-white text-[20px] font-bold text-center'
          >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secoundary text-[12px] sm:text-[17px] tracking-wide max-w-3xl leading-[22px] sm:leading-[30px]'
      >
        I'm, a skilled front-end web developer with expertise in crafting visually appealing and user-friendly websites. With a passion for creating dynamic and responsive user interfaces, and I have extensive experience in HTML, CSS, JavaScript, and front-end frameworks like React. My knowledge of design principles and attention to detail allow me to create web applications that not only look great but also function smoothly across multiple devices and platforms.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServicesCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')