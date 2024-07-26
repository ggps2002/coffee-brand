import React from 'react'
import Navbar from './Navbar'
import HeroImage from '../assets/heroImage.png'

const Hero = () => {
    return (
            <div data-scroll data-scroll-section data-scroll-speed="-.5" className='bg-[#f3b6c5] min-h-screen w-screen '>
                <Navbar />
                <div className='flex justify-end gap-[15vw] mt-[10vh] xs:flex-col md:flex-row'>
                    <div className='px-[5vw]'>
                        <div>
                            <h1 className='Hero-Text tracking-wider'>
                                Pretty<br />
                                Coffee
                            </h1>
                            <h2 className='Hero-Subtext tracking-wider mt-1'>
                                We have the best coffee in town.
                            </h2>
                            <p className='Hero-Para mt-8'>
                                Lorem Ipsum this is some para about the coffee bean brand <br />
                                showing its authenticity and the true essence of coffee
                            </p>
                            <button className='h-[5vh] px-[2vw] bg-[#1355a3] mt-10 rounded-3xl text-white text-[3vh]'>
                                Get it now
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={HeroImage} alt="" />
                    </div>
                </div>
            </div>

    )
}

export default Hero