import React from 'react'
import Navbar from './Navbar'
import HeroImage from '../assets/heroImage.png'

const Hero = () => {
  return (
    <div className='bg-[#f3b6c5] h-screen w-screen'>
        <Navbar/>
        <div className='flex justify-end gap-[15vw] mt-[10vh] '>
            <div >
                <div>
                    <h1 className='Hero-Text tracking-wider'>
                        Pretty<br/>
                        Coffee
                    </h1>
                    <h2 className='Hero-Subtext tracking-wider mt-1'>
                        We have the best coffee in town.
                    </h2>
                    <p className='Hero-Para mt-8'>
                        Lorem Ipsum this is some para about the coffee bean brand <br/>
                        potraying its authenticity and the true essence of coffee 
                    </p>
                    <button className='h-[5vh] w-[13vw] bg-[#1355a3] mt-10 rounded-3xl text-white text-[3vh]'>
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