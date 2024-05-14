import ArrowSvg from "@/components/svg/ArrowSvg";
import CircleSvg from "@/components/svg/CircleSvg";
import RingSvg from "@/components/svg/RingSvg";
import SmallCircle from "@/components/svg/SmallCircle";
import img from '@/assets/careers/image.png'
import Image from "next/image";
import CareerPageForm from "@/components/CareerPageForm";

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
            {/* <div>
                    <h1 className="font-medium text-center text-[40px]">Apply for this position</h1>
                </div> */}
            <CareerPageForm />
        </div>
    )
}