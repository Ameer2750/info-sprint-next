import Image from 'next/image'
import logo from '../assets/logo/white_logo_transparent_background-1.png'
import Link from 'next/link'
import { FaAnglesRight, FaPhone, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="w-full bg-[#3236b7] ">
            <div className=''>
                <div className='grid lg:grid-cols-4 lg:gap-0 gap-3  py-10 px-14 '>
                    <div className='flex flex-col items-start'>
                        <Link href='/home'>
                            <Image src={logo} width={150} height={100} alt='' />
                        </Link>
                        <h3 className='text-white text-md'>Empowering Innovation,<br /> Accelerating Success</h3>
                        <div className='flex flex-row gap-6 items-center mt-3'>
                            <Link href='https://twitter.com/InfosprintTech'>
                                <FaSquareXTwitter className='text-white text-3xl cursor-pointer hover:scale-105' />
                            </Link>
                            <Link href='https://www.linkedin.com/company/infosprinttech/'>
                                <FaLinkedin className='text-white text-3xl cursor-pointer hover:scale-105' />
                            </Link>
                            <Link href='https://www.facebook.com/InfosprintTech/'>
                                <FaFacebookSquare className='text-white text-3xl cursor-pointer hover:scale-105' />
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h3 className='text-white text-lg font-semibold'>Quick Links</h3>
                        <ul className='flex flex-col gap-3'>
                            <Link href='/'>
                                <li className='text-sm text-white flex flex-row items-center gap-2 hover:scale-105 duration-200 hover:text-blue-300 cursor-pointer'>
                                    <FaAnglesRight />
                                    Home
                                </li>
                            </Link>
                            <Link href='/about'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer' >
                                    <FaAnglesRight />
                                    About Us
                                </li>
                            </Link>

                            <Link href='/services'>

                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer'>
                                    <FaAnglesRight />
                                    Services</li>
                            </Link>

                            <Link href='/industries'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer ' >
                                    <FaAnglesRight />
                                    Industries
                                </li>
                            </Link>

                            <Link href='/careers'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer  '>
                                    <FaAnglesRight />
                                    Careers
                                </li>
                            </Link>
                            <Link href='/contact'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer  '>
                                    <FaAnglesRight />
                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h3 className='text-white text-lg font-semibold'>Services</h3>
                        <ul className='flex flex-col gap-3'>
                            <Link href='/services/digital-transformation'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer '><span><FaAnglesRight />
                                </span>Digital Transformation</li>
                            </Link>
                            <Link href='/services/azure'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer '><span><FaAnglesRight />
                                </span>Cloud Technologies</li>
                            </Link>
                            <Link href='/services/dev-ops'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer '><span><FaAnglesRight />
                                </span>DevOps</li>
                            </Link>
                            <Link href='/services/appian'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer '><span><FaAnglesRight />
                                </span>Appian</li>
                            </Link>
                            <Link href='/services/pega'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer '><span><FaAnglesRight />
                                </span>PEGA</li>
                            </Link>
                            <Link href='/services/aws'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer '><span><FaAnglesRight />
                                </span>AWS</li>
                            </Link>
                            <Link href='/services/azure'>
                                <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200 hover:text-blue-300  cursor-pointer '><span><FaAnglesRight />
                                </span>Azure</li>
                            </Link>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h3 className='text-white text-lg font-semibold'>Contact Us</h3>
                        <h2 className='text-white text-md font-semibold'>CANADA (Head office)</h2>
                        <ul className=''>
                            <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200'>
                                <span>130 King Street West,</span>
                            </li>
                            <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200'>

                                <span> Suite 1900, hrefronhref, M5X 1E3</span>
                            </li>

                            <div className='flex lg:flex-row   gap-3 pt-5 '>
                                <div className='pt-4'>
                                    <FaPhone className='text-white text-2xl cursor-pointer ' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-white text-sm'>Phone Call:</h3>
                                    <span className='text-sm text-white flex flex-row items-center gap-2 '>+1 4168751093</span>
                                </div>
                            </div>
                            <h2 className='text-white text-md font-semibold pt-5'>INDIA</h2>

                            <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200'>
                                <span>Infosprint Technologies, My Home Hub,
                                </span>
                            </li>
                            <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200'>

                                <span> Block 1, Level 5, Patrika Nagar, Hitech City, </span>
                            </li>
                            <li className='text-sm text-white flex flex-row items-center gap-2  hover:scale-105 duration-200'>

                                <span> Hyderabad, Telangana 500081</span>
                            </li>


                            <div className='flex lg:flex-row   gap-3 pt-5 '>
                                <div className='pt-4'>
                                    <FaPhone className='text-white text-2xl cursor-pointer ' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-white text-sm '>Phone Call:</h3>
                                    <span className='text-sm text-white flex flex-row items-center gap-2 '>+91 9100534549
                                    </span>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className=' border my-6 '></div>
                <div className='flex lg:flex-row flex-col justify-between container mx-auto mt-4 lg:px-14 pb-5   '>
                    <div className=''>
                        <p className='text-md container mx-auto text-start font-semibold  text-white   '>
                            © {new Date().getFullYear()} Infosprint Technologies - All Rights Reserved
                        </p>
                    </div>
                    <ul className='flex flex-row lg:pt-0  text-md gap-6'>
                        <li className='text-white hover:scale-105 cursor-pointer '>Terms & Conditions</li>
                        <li className='text-white hover:scale-105 cursor-pointer '>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}