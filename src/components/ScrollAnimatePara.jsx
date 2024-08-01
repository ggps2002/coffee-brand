import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollAnimatePara = () => {
    gsap.registerPlugin(ScrollTrigger);
    const containerRef = useRef(null);
    const triggerRef = useRef(null)
    useEffect(()=>{
        const reveal = gsap.to(
            containerRef.current,
            {
                scrollTrigger:{
                    trigger:triggerRef.current,
                    scrub:true,
                    markers:true,
                    start: "0% 50%",
                    end: "50% 50%",
                },
                width:"85%",
                duration: 6,
                stagger: 1,
            }
        )
        return ()=>{
            reveal.kill()
        }
    },[containerRef])
  return (
    <div ref={triggerRef} className='relative min-h-screen'>
         <div className='absolute About-Subtext mt-5 px-[2vw]'>
        A <span className='About-Subtext-span'>coffee brand</span> specialized in picking and providing the <span className='About-Subtext-span'>most finest coffee beans</span> across the world.<br />
        Providing our customers with the<br /> most <span className='About-Subtext-span'>authentic and refreshing coffee</span> experience for <span className='About-Subtext-span'>more than a decade</span>.
      </div>
      <div ref={containerRef}  className='overflow-hidden whitespace-nowrap absolute About-Subtext-overlay mt-5 px-[2vw]'>
        A <span className='About-Subtext-span'>coffee brand</span> specialized in picking and providing the <span className='About-Subtext-span'>most finest coffee beans</span> across the world.<br />
        Providing our customers with the<br /> most <span className='About-Subtext-span'>authentic and refreshing coffee</span> experience for <span className='About-Subtext-span'>more than a decade</span>.
      </div>
    </div>
  )
}

export default ScrollAnimatePara