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
import SquareCircle from "@/components/svg/SquareCircle";
import SmallRing from "@/components/svg/SmallRing";
import img from "@/assets/about/newimages/image.png"
import ServiceHeader from "@/components/svg/header/ServiceHeader";

export default function Home() {

    return (
        <div>

            <div className="overflow-x-hidden container mx-auto flex flex-col py-20 relative gap-20 ">
                <div className="absolute top-16">
                    <RingSvg />
                </div>
                <div className="absolute top-44 left-1 ">
                    <ArrowSvg />
                </div>
                <div className="flex flex-row justify-between items-center px-14  gap-8 " >
                    <div data-aos='fade-right' data-aos-once='true' data-aos-delay='300' className=" flex flex-col gap-5">
                        <h1 className="text-xl bg-[#3236b7] text-white rounded-full px-5 pt-1 pb-1.5 ">Empowering Innovation, Accelerating Success</h1>
                        <p className="text-5xl font-bold">Seamless Transition into <br /> The Digital Future</p>
                        <p className="text-medium">From Cloud to AI and beyond, we offer tailored solutions for Agility, Scalability, & Growth.</p>
                    </div>
                    <div data-aos='fade-left' data-aos-once='true' data-aos-delay='300' className="py-10">
                        <Image src={landingImage} width={500} height={800} />
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


            </div >

            <div className="bg-[#ebebfa] flex flex-col gap-14  pt-14 pb-24">
                <div className="container mx-auto">
                    <h1 className="text-4xl text-center font-bold">Who Are We ?</h1>
                    <div className="flex flex-row justify-evenly items-start px-14  gap-12 ">
                        <Image className="border-2 border-white shadow-lg" src={img} width={550} height={500} />
                        <div className="flex flex-col gap-8 text-justify">
                            <h1 className="text-2xl font-semibold">Inspiring Limitless Innovation & Growth Today</h1>
                            <p className="text-sm leading-6">Since 2008, Infosprint Technology has been a trusted partner in technology and digital transformation solutions. With 15+ years of experience, we empower businesses worldwide to achieve increased efficiency, streamlined operations, and enhanced customer experience through cutting-edge digital transformation solutions.</p>
                            <p className="text-sm leading-6">Our expertise spans cloud computing solutions, RPA (automating repetitive tasks), SAP & PEGA implementations, Customer Relationship Management (CRM), Business Process Management (BPM), Microsoft Solutions, Salesforce, and DevOps for faster development cycles. With our team of 100+ passionate experts driven by innovation, collaboration, and a client-centric approach, we deliver tailored solutions for your unique needs and help you stay ahead of the curve.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* <SimpleSlider /> */}
            <se className="">
            <ServiceHeader />
            </div>
            <div className="flex flex-col gap-10 container mx-auto ">
                
                <div className="flex flex-row gap-10 justify-between items-center mx-14 relative ">
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

            <div className="flex flex-col gap-10 container mx-auto ">
                <div className="absolute translate-x-80 -translate-y-0 ">
                    <SquareCircle />
                </div>
                <div className="absolute translate-y-96 ">
                    <SmallRing />
                </div>
                <h1 className="text-4xl text-center font-bold relative">The Infosprint Approach</h1>
                <div className="flex flex-row gap-10 justify-between items-center mx-14">
                    <Image src={ApproachImage} width={600} height={600} />
                    <div className="flex flex-col text-justify gap-5 ">
                        <h2 className=" text-2xl  font-semibold">Creating Business Growth</h2>
                        <p className="text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>

    )
} 