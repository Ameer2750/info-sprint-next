import ArrowSvg from "@/components/svg/ArrowSvg";
import CircleSvg from "@/components/svg/CircleSvg";
import RingSvg from "@/components/svg/RingSvg";
import SmallCircle from "@/components/svg/SmallCircle";
import img from '@/assets/careers/image.png'
import Image from "next/image";
import CareerPageForm from "@/components/CareerPageForm";
import RightCircle from "@/components/svg/RightCircle";
import RightRing from "@/components/svg/RightRing";
import ZigzagSvg from "@/components/svg/ZigzagSvg";
import DownCircle from "@/components/svg/DownCircle";
import DownArrow from "@/components/svg/DownArrow";
import LeftCircle from "@/components/svg/LeftCircle";

export default function Careers() {
    return (

        <div className="relative w-full">
            <div className="absolute top-0">
                <RingSvg />
            </div>
            <div className="absolute top-44 left-1 ">
                <ArrowSvg />
            </div>
            <div className="absolute transform translate-x-96 top-5 left-20 ">
                <SmallCircle />
            </div>
            <h1 className="font-medium text-center text-[64px]">Careers </h1>
            <div className="absolute top-6 right-96 translate-x-32">
                <CircleSvg />
            </div>
            <div className="my-14  flex justify-center items-center ">
                <Image src={img} width={700} height={900} />
            </div>
            <div className="absolute top-60 translate-y-96 right-40">
                <ZigzagSvg />
            </div>
            <div className="absolute translate-x-80 translate-y-32  left-72" >
                <DownCircle />
            </div>
            <div className="absolute translate-x-96 left-60 top-32 translate-y-96  ">
                <DownArrow />
            </div>
            <div className="absolute left-4 top-10 translate-y-96 ">
                <LeftCircle />
            </div>
            {/* <div>
                    <h1 className="font-medium text-center text-[40px]">Apply for this position</h1>
                </div> */}
            <div className="absolute translate-x-96 translate-y-6">
                <RightCircle />
            </div>
            <div className="relative ">
                <h1 className="font-medium text-center text-black text-[40px] mt-32">Apply For This Position</h1>
            </div>
            <div className="absolute right-0 ">
                <RightRing />
            </div>
            <div className="absolute right-0 translate-y-52">
                <ArrowSvg />
            </div>


            <CareerPageForm />
        </div>
    )
}