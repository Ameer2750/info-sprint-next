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

            <div className="absolute ">
                <RightCircle />
            </div>
            <h1 className="font-medium text-center text-[50px] mt-24">Let's get in touch.</h1>
            <div className="">

                <div>
                    <div  className="flex flex-row justify-evenly items-center">
                        <input
                            type="text"
                            name="yourname"
                            placeholder="Your Name*"
                            className="border rounded-3xl py-2 pl-5 bg-[#0665c4] text-white px-52 "
                        />


                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email*"
                            className="border py-2  rounded-3xl pl-5 bg-[#0665c4] text-white px-52"
                        />
                    </div>
                  
                </div>
                
            </div>

        </div>
    )
}