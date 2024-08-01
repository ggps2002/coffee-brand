import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const overlayRefs = useRef([]);
  const triggerRef = useRef(null);
  const triggerOverlayRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -700]);

  const text1 = 'We are';
  const text2 = 'Authentic and';
  const text3 = 'Sustainable.';

  const useArrayRef = () => {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  };

  const [lettersRef, setLettersRef] = useArrayRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reveal = gsap.to(lettersRef.current, {
      opacity: 1,
      duration: 6,
      stagger: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "0% 50%",
        end: "60% 50%",
      }
    });

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: triggerOverlayRef.current,
        scrub: true,
        start: "top 90%",
        end: "top 0%",
        duration:10,
      }
    });

    overlayRefs.current.forEach(ref => {
      tl.to(ref, {
        width: "85%",
        duration: 16,
      });
    });

    return () => {
      reveal.kill();
      tl.kill();
    };
  }, [lettersRef, overlayRefs]);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.02" className='bg-[#1355a3] py-[2vw] overflow-x-hidden h-[100vw]'>
      <div className='w-screen border-y-[2px]'>
        <motion.div data-scroll-section data-scroll style={{ x }} transition={{ ease: 'easeInOut' }}>
          <div className='whitespace-nowrap flex gap-[4vw]'>
            <div className='Marquee-Text tracking-wide'>Pretty Coffee</div>
            <div className='Marquee-Text tracking-wide'>Pretty Coffee</div>
            <div className='Marquee-Text tracking-wide'>Pretty Coffee</div>
            <div className='Marquee-Text tracking-wide'>Pretty Coffee</div>
          </div>
        </motion.div>
      </div>
      <div ref={triggerRef} className='About-Text p-[2vw]'>
        {text1.split("").map((letter, index) => (
          <span key={index} ref={setLettersRef} style={{opacity: 0}}>{letter}</span>
        ))}<br />
        {text2.split("").map((letter, index) => (
          <span key={index} ref={setLettersRef} style={{opacity: 0}}>{letter}</span>
        ))}<br />
        {text3.split("").map((letter, index) => (
          <span key={index} ref={setLettersRef} style={{opacity: 0}}>{letter}</span>
        ))}
      </div>
      <div ref={triggerOverlayRef} className='relative'>
        <div className='absolute About-Subtext mt-5 px-[2vw]'>
          A <span>coffee brand</span> specialized in picking and
        </div>
        <div ref={el => overlayRefs.current[0] = el} className='absolute About-Subtext-overlay mt-5 px-[2vw]'>
          A <span className='About-Subtext-span'>coffee brand</span> specialized in picking and
        </div>
        <div className='absolute About-Subtext mt-5 px-[2vw] top-[5vw]'>
          providing the <span>most finest coffee beans</span>
        </div>
        <div ref={el => overlayRefs.current[1] = el} className='absolute About-Subtext-overlay mt-5 px-[2vw] top-[5vw]'>
          providing the <span className='About-Subtext-span'>most finest coffee beans</span>
        </div>
        <div className='absolute About-Subtext mt-5 px-[2vw] top-[10vw]'>
          across the world.
        </div>
        <div ref={el => overlayRefs.current[2] = el} className='absolute About-Subtext-overlay mt-5 px-[2vw] top-[10vw]'>
          across the world.
        </div>
        <div className='absolute About-Subtext mt-5 px-[2vw] top-[15vw]'>
          Providing our customers with the 
        </div>
        <div ref={el => overlayRefs.current[3] = el} className='absolute About-Subtext-overlay mt-5 px-[2vw] top-[15vw]'>
          Providing our customers with the
        </div>
        <div className='absolute About-Subtext mt-5 px-[2vw] top-[20vw]'>
          most authentic and refreshing coffee 
        </div>
        <div ref={el => overlayRefs.current[4] = el} className='absolute About-Subtext-overlay mt-5 px-[2vw] top-[20vw]'>
          most <span className='About-Subtext-span'>authentic and refreshing coffee</span>
        </div>
        <div className='absolute About-Subtext mt-5 px-[2vw] top-[25vw]'>
          experience for more than a decade
        </div>
        <div ref={el => overlayRefs.current[5] = el} className='absolute About-Subtext-overlay mt-5 px-[2vw] top-[25vw]'>
          experience for <span className='About-Subtext-span'>more than a decade</span>
        </div>
      </div>
    </div>
  );
};

export default About;
