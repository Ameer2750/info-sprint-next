import ArrowSvg from "@/components/svg/ArrowSvg";
import RingSvg from "@/components/svg/RingSvg";
import img from "@/assets/contact/NewImages/image.png"
import Image from "next/image";
import SmallCircle from "@/components/svg/SmallCircle";
import ZigzagSvg from "@/components/svg/ZigzagSvg";
import DownArrow from "@/components/svg/DownArrow";
import DownCircle from "@/components/svg/DownCircle";
import LeftCircle from "@/components/svg/LeftCircle";
import RightCircle from "@/components/svg/RightCircle";
import RightRing from "@/components/svg/RightRing";
import CircleSvg from "@/components/svg/CircleSvg";

export default function Contact() {
    return (
        <div className="relative container mx-auto ">
            <div className="absolute top-0">
                <RingSvg />
            </div>
            <div className="absolute top-44 left-1 ">
                <ArrowSvg />
            </div>
            <div className="absolute transform translate-x-96 top-5 left-10 ">
                <SmallCircle />
            </div>
            <h1 className="font-medium text-center text-[64px]">Contact Us </h1>
            <div className="absolute top-6 right-96 translate-x-32">
                <CircleSvg/>
            </div>
            <div className="flex flex-row justify-evenly items-start px-14 py-20 gap-10 ">
                <Image src={img} width={600} height={500} />
                <div className="flex flex-col gap-5">
                    <h1 className="text-[30px]">Ready to take the next step and work together? Let’s do it!</h1>
                    <p className="text-[17px]">The digital marketing environment is highly dynamic and competitive. Gain a competitive edge and advance your online presence by making use of our strategic business planning, innovative technology, and in-depth analysis.</p>
                </div>
            </div>
            <div className="absolute top-32 translate-y-72 right-40">
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
            <div className="relative ">
                <h1 className="font-medium text-center text-[40px] mt-24">Let’s Start transforming your business today!</h1>
            </div>
            <div className="absolute right-0 ">
                <RightRing />
            </div>
            <div className="absolute right-0 translate-y-52">
                <ArrowSvg />
            </div>



            <div className='flex flex-col relative lg:gap-5 gap-3 mx-20 mt-5 z-50'>
                <div className='flex flex-col gap-2'>
                    <label className='text-white text-sm'>Your Name*</label>
                    <input
                        type='text'
                        name='yname'
                        className='p-2 border text-sm rounded-md bg-[#f3f3fb]'
                        placeholder='Your Name'
                    />
                </div>
                <div className='flex flex-col  gap-2'>
                    <label className='text-white text-sm'>Your Email*</label>
                    <input
                        type='text'
                        name='yemail'
                        className='p-2 border text-sm rounded-md bg-[#f3f3fb]'
                        placeholder='info@example.com'
                    />
                </div>
                <div className='flex flex-col  gap-2'>
                    <label className='text-white text-sm'>Services*</label>
                    <input
                        type='text'
                        name='ysubject'
                        className='p-2 border text-sm rounded-md bg-[#f3f3fb]'
                        placeholder='Services'
                    />
                </div>
                <div className='flex flex-col  gap-2'>
                    <label className='text-white text-sm'>Your Phone*</label>
                    <input
                        type='text'
                        name='yphone'
                        className='p-2 border text-sm rounded-md bg-[#f3f3fb]'
                        placeholder='123 456 789 0'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-white text-sm  '>Message</label>
                    <textarea className='border py-8 pt-1 pl-2 rounded-md bg-[#f3f3fb] text-gray-400 text-sm '>
                        Write Message
                    </textarea>
                </div>
            </div>

            <div className='text-start pb-10 mx-20 mt-5'>
                <button className='py-3  bg-[#3236b7] hover:bg-transparent hover:text-black border hover:border-[#3236b7] rounded-md lg:text-md text-sm  text-white lg:px-10 px-5 '>Send Message</button>
            </div>





        </div>
    )
}