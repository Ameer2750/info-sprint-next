import ServiceCardOne from "@/components/card/ServiceCardOne";
import SimpleSlider from "@/components/SimpleSlider";
import Image from "next/image";
import ApproachImage from '@/assets/heroimg/apprach.png'

export default function Home() {
    return (
        <div className="overflow-x-hidden container mx-auto flex flex-col gap-20">
            <SimpleSlider />
            <div className="flex flex-col gap-10">
                <h1 className="text-4xl text-center font-bold">Services</h1>
                <div className="flex flex-row gap-10 justify-between items-center mx-14">
                    <ServiceCardOne />
                    <ServiceCardOne />
                    <ServiceCardOne />
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <h1 className="text-4xl text-center font-bold">Approach</h1>
                <div className="flex flex-row gap-10 justify-between items-center mx-14">
                    <Image src={ApproachImage} />
                    <div className="">
                        <h2 className=" text-lg font-semibold">Creating Business Growth</h2>
                    </div>
                </div>
            </div>
        </div>
    )
} 