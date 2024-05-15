import ServiceCardOne from "@/components/card/ServiceCardOne";
import SimpleSlider from "@/components/SimpleSlider";
import Image from "next/image";
import ApproachImage from '@/assets/heroimg/apprach.png'
import RingSvg from "@/components/svg/RingSvg";
import ArrowSvg from "@/components/svg/ArrowSvg";
import landingImage from '@/assets/images/image.png'
import RightRing from "@/components/svg/RightRing";
import ZigzagSvg from "@/components/svg/ZigzagSvg";
import DownCircle from "@/components/svg/DownCircle";
import DownArrow from "@/components/svg/DownArrow";
import LeftCircle from "@/components/svg/LeftCircle";
import CircleSvg from "@/components/svg/CircleSvg";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Squada_One } from "next/font/google";
import SquareCircle from "@/components/svg/SquareCircle";
import SmallRing from "@/components/svg/SmallRing";
export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    return (
        <div className="overflow-x-hidden container mx-auto flex flex-col relative gap-20">
            <div className="absolute top-0">
                <RingSvg />
            </div>
            <div className="absolute top-44 left-1 ">
                <ArrowSvg />
            </div>
            <div className="flex flex-row justify-between items-center px-14 gap-8 " >
                <div data-aos='fade-right' data-aos-once='true' data-aos-delay='300' className="px-16">
                    <h1 className="text-[28px]">Empowering Innovation, Accelerating Success</h1>
                    <p className="text-[40px]">Seamless Transition into <br /> The Digital Future</p>
                    <p className="text-[18px]">From Cloud to AI and beyond, we offer tailored solutions for Agility, Scalability, & Growth.</p>
                </div>
                <div data-aos='fade-left' data-aos-once='true' data-aos-delay='300' className="py-10">
                    <Image src={landingImage} width={600} height={900} />
                </div>
            </div>
            <div className="absolute  top-6 left-52 translate-x-32">
                <CircleSvg />
            </div>
            <div className="absolute top-28 translate-y-96 right-40">
                <ZigzagSvg />
            </div>
            <div className="absolute translate-x-80 translate-y-32 left-72" >
                <DownCircle />
            </div>
            <div className="absolute translate-x-96 left-60 top-16 translate-y-96  ">
                <DownArrow />
            </div>
            <div className="absolute left-4 top-10 translate-y-96 ">
                <LeftCircle />
            </div>
            {/* <SimpleSlider /> */}
            <div className="flex flex-col gap-10 ">
                <h1 className="text-4xl text-center font-bold">Services</h1>
                <div className="flex flex-row gap-10 justify-between items-center mx-14 relative z-50">
                    <ServiceCardOne />
                    <ServiceCardOne />
                    <ServiceCardOne />
                </div>
                <div className="absolute right-0 ">
                    <RightRing />
                </div>
                <div className="absolute right-0 translate-y-52">
                    <ArrowSvg />
                </div>
            </div>

            <div className="flex flex-col gap-10">
                <div className="absolute translate-x-80 -translate-y-0 ">
                    <SquareCircle />
                </div>
                <div className="absolute tran-y-96">
                    <SmallRing />
                </div>
                <h1 className="text-4xl text-center font-bold relative  z-50">The Infosprint Approach</h1>
                <div className="flex flex-row gap-10 justify-between items-center mx-14">
                    <Image src={ApproachImage} width={600} height={600} />
                    <div className="flex flex-col  gap-5 ">
                        <h2 className=" text-[28px] font-semibold">Creating Business Growth</h2>
                        <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 