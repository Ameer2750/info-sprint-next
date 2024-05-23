import ArrowSvg from "@/components/svg/ArrowSvg";
import RingSvg from "@/components/svg/RingSvg";
import img from "@/assets/about/newimages/image.png"
import Image from "next/image";
import SmallCircle from "@/components/svg/SmallCircle";
import ZigzagSvg from "@/components/svg/ZigzagSvg";
import DownArrow from "@/components/svg/DownArrow";
import DownCircle from "@/components/svg/DownCircle";
import LeftCircle from "@/components/svg/LeftCircle";
import RightCircle from "@/components/svg/RightCircle";
import RightRing from "@/components/svg/RightRing";
import CircleSvg from "@/components/svg/CircleSvg";
import TabPanel from "@/components/TabPanel";
import ServicesTabs from "@/components/ServicesTabs";


// const categories = [
//     {
//         name: 'Category 1',
//         content: 'Content for Category 1',
//     },
//     {
//         name: 'Category 2',
//         content: 'Content for Category 2',
//     },
//     {
//         name: 'Category 3',
//         content: 'Content for Category 3',
//     },
//     {
//         name: 'Category 4',
//         content: 'Content for Category 1',
//     },
//     {
//         name: 'Category 5',
//         content: 'Content for Category 1',
//     },
//     {
//         name: 'Category 6',
//         content: 'Content for Category 1',
//     },
//     {
//         name: 'Category 7',
//         content: 'Content for Category 1',
//     }, {
//         name: 'Category 8',
//         content: 'Content for Category 1',
//     },

//      {
//         name: 'Category 9',
//         content: 'Content for Category 1',
//     }, {
//         name: 'Category 10',
//         content: 'Content for Category 1',
//     },

// ];

const categories = [
    { name: 'Web Development', content: 'Content for Web Development' },
    { name: 'Graphic Design', content: 'Content for Graphic Design' },
    { name: 'SEO Services', content: 'Content for SEO Services' },
    { name: 'Digital Marketing', content: 'Content for Digital Marketing' },
  ];
  

export default function About() {
    return (
        <div className="relative container mx-auto py-20 "> 
            <div className="absolute top-16">
                <RingSvg />
            </div>
            <div className="absolute top-44 left-1 ">
                <ArrowSvg />
            </div>
            <div className="absolute transform translate-x-96 top-20 left-10 ">
                <SmallCircle />
            </div>
            <h1 className="font-medium text-black text-center text-[64px]">About Us </h1>
            <div className="absolute top-20 right-96 translate-x-32">
                <CircleSvg />
            </div>
            <div className="flex flex-row justify-evenly items-start px-14 py-20 gap-10 ">
                <Image src={img} width={600} height={500} />
                <div className="flex flex-col gap-5">
                    <h1 className="text-[30px] font-medium">Inspiring Limitless Innovation & Growth Today</h1>
                    <p className="text-[17px]">Since 2008, Infosprint Technology has been a trusted partner in technology and digital transformation solutions. With 15+ years of experience, we empower businesses worldwide to achieve increased efficiency, streamlined operations, and enhanced customer experience through cutting-edge digital transformation solutions.</p>
                    <p className="text-[17px]">Our expertise spans cloud computing solutions, RPA (automating repetitive tasks), SAP & PEGA implementations, Customer Relationship Management (CRM), Business Process Management (BPM), Microsoft Solutions, Salesforce, and DevOps for faster development cycles. With our team of 100+ passionate experts driven by innovation, collaboration, and a client-centric approach, we deliver tailored solutions for your unique needs and help you stay ahead of the curve.</p>
                </div>
            </div>
            <div className="absolute top-96 translate-y-96 right-40">
                <ZigzagSvg />
            </div>
            <div className="absolute translate-x-80 -translate-y-32 left-72" >
                <DownCircle />
            </div>
            <div className="absolute translate-x-96 left-60 -translate-y-0 ">
                <DownArrow />
            </div>
            <div className="absolute left-4 -translate-y-20 ">
                <LeftCircle />
            </div>

            <div className="absolute translate-x-44 translate-y-16 ">
                <RightCircle />
            </div>

            <div className="absolute right-0  ">
                <RightRing />
            </div>
            <div className="absolute right-0 translate-y-52">
                <ArrowSvg />
            </div>
            {/* <div className="flex flex-row  justify-between items-start px-14 mt-32 relative z-50">
                <div className=" flex flex-col gap-5 mx-14">
                    <h1 className="text-[30px] font-medium">Our Vision</h1>
                    <p className="text-[17px]">We envision a limitless future, igniting growth, enabling success, and unlocking unlimited possibilities.</p>
                </div>

                <div>
                    <Image src={img} width={600} height={500} />
                </div>
            </div> */}
            {/* <div className="flex flex-row  mt-10 justify-between items-start   px-14  relative z-50">
                <div>
                    <Image src={img} width={900} height={500} />
                </div>
                <div className=" flex flex-col gap-5 ml-32 ">
                    <h1 className="text-[30px] font-medium">Our Mission</h1>
                    <p className="text-[17px]">Your Success is Our Mission.</p>
                    <p className="text-[17px]">Empowering businesses to thrive in the digital age with exceptional digital transformation solutions that unlock new possibilities.</p>
                </div>
            </div> */}

            <div className="flex shadow-lg border-4 rounded-tl-3xl rounded-br-3xl border-b-[#3236b7] border-l-[#3236b7]items-center mx-20  mt-32">
                <TabPanel />
            </div>
            <div>
                {/* <div className="my-10">
                    <div className="mx-20">
                        <ServicesTabs categories={categories} />
                    </div>
                </div> */}


            </div>






        </div>
    )
}