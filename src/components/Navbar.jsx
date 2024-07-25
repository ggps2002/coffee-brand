import React from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../index.css'

const Navbar = () => {
    return (
        <div className='flex md:justify-around items-center py-4 xs:justify-between xs:p-5 md:px-0'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='md:flex gap-[3vw] hidden items-center'>
                <div className='text-[#1355a3] font-semibold'>
                    <a href="#">
                        Home
                    </a>
                </div>
                <div className='text-[#1355a3] font-semibold'>
                    <a href="#">
                        About
                    </a>
                </div>
                <div className='text-[#1355a3] font-semibold'>
                    <a href="#">
                        Menu
                    </a>
                </div>
                <div className='text-[#1355a3] font-semibold'>
                    <a href="#">
                        Service
                    </a>
                </div>
                <div className='flex gap-[1.5vw]'>
                    <div className='w-[200px] h-[30px] border-[#1355a3] border-[2px] rounded-2xl p-4 flex items-center justify-end text-[#1355a3] font-semibold'>
                        <h1>Search</h1>
                    </div>
                    <div className='w-[35px] h-[35px] bg-[#1355a3] rounded-full'>
                        <a href="#" className='social-icon'>
                            <FontAwesomeIcon icon={faFacebookF} className='custom-size' />
                        </a>
                    </div>
                    <div className='w-[35px] h-[35px] bg-[#1355a3] rounded-full'>
                        <a href="#" className='social-icon'>
                            <FontAwesomeIcon icon={faInstagram} className='custom-size' />
                        </a>
                    </div>
                    <div className='w-[35px] h-[35px] bg-[#1355a3] rounded-full'>
                        <a href="#" className='social-icon'>
                            <FontAwesomeIcon icon={faTwitter} className='custom-size' />
                        </a>
                    </div>
                    <div className='w-[35px] h-[35px] bg-[#1355a3] rounded-full'>
                        <a href="#" className='social-icon'>
                            <FontAwesomeIcon icon={faWhatsapp} className='custom-size' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='xs:flex md:hidden'>
                <div className='relative w-[30px] -top-5'>
                    <div className='absolute w-full h-[0.5vh] bg-[#1355a3]'>

                    </div>
                    <div className='absolute top-2 w-full h-[0.5vh] bg-[#1355a3]'>

                    </div>
                    <div className='absolute top-4 w-full h-[0.5vh] bg-[#1355a3]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar