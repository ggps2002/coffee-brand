import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About';
import { easeInOut, motion } from 'framer-motion'

const App = () => {
  const [loading, setLoading] = useState(0);
  const [isVisible, setIsVisible] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100;
        }
        return prev + 1
      })
    }, 10);
    const timer = setTimeout(()=>{
        setIsVisible(true)
    },4500)
    const heroTimer = setTimeout(()=>{
      setIsHeroVisible(true)
    },1400)
    return () => {
      clearInterval(interval)
      clearTimeout(timer)
      clearTimeout(heroTimer)
    }

  }, []);
  return (
    <div className={` bg-[#1355a3] w-screen min-h-screen h-auto `}>
      {
        !isHeroVisible ? (
          <motion.div animate={{opacity:0}} transition={{delay:1.2}} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-white text-[5vw]'> {loading}% Loading</h1>
          </motion.div>
        ) : (
          <motion.div animate={{ y: ["-100%", "0%"] }} transition={{ ease: easeInOut, duration: 1, delay: 1 }}>
            <motion.div animate={{ scale: [0.7, 1] }} transition={{ ease: easeInOut, duration: 1, delay: 2 }}>
              <Hero />
              {isVisible && <About />}
            </motion.div>
          </motion.div>
        )
      }
    </div>
  )
}

export default App