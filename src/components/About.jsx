import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const containerRef = useRef(null);
  const text1 = 'We are';
  const text2 = 'Authentic';

  // Custom hook for managing multiple refs
  const useArrayRef = () => {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  };
  
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);
  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const reveal = gsap.to(
      lettersRef.current,
      {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: "top 65%",
          end: "top 35%",
        },
        opacity: 1,
        duration: 5,
        stagger: 1,
      }
    );

    return () => {
      reveal.kill();
    };
  }, [lettersRef]);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.02" className='bg-[#1355a3] py-[2vw] overflow-x-hidden'>
      <div className='w-screen border-y-[2px]'>
        <motion.div data-scroll-section data-scroll style={{ x }} transition={{ ease: 'easeInOut' }}>
          <div className='whitespace-nowrap flex gap-[4vw]'>
            <div className='Marquee-Text tracking-wide'>
              Pretty Coffee
            </div>
            <div className='Marquee-Text tracking-wide'>
              Pretty Coffee
            </div>
            <div className='Marquee-Text tracking-wide'>
              Pretty Coffee
            </div>
            <div className='Marquee-Text tracking-wide'>
              Pretty Coffee
            </div>
          </div>
        </motion.div>
      </div>
      <div ref={triggerRef} className='About-Text p-[2vw]'>
        {text1.split("").map((letter, index) => (
          <span key={index} ref={setLettersRef} style={{ opacity: 0 }}>{letter}</span>
        ))}<br />
        {text2.split("").map((letter, index) => (
          <span key={index} ref={setLettersRef} style={{ opacity: 0 }}>{letter}</span>
        ))}
      </div>
      <div ref={containerRef} className='About-Subtext mt-5 px-[2vw]'>
        A <span className='About-Subtext-span'>coffee brand</span> specialized in picking and providing the <span className='About-Subtext-span'>most finest coffee beans</span> across the world.<br />
        Providing our customers with the<br /> most <span className='About-Subtext-span'>authentic and refreshing coffee</span> experience for <span className='About-Subtext-span'>more than a decade</span>.
      </div>
    </div>
  );
};

export default About;
