import ServicePageCard from "@/components/card/ServicePageCard";
import ArrowSvg from "@/components/svg/ArrowSvg";
import CircleSvg from "@/components/svg/CircleSvg";
import RingSvg from "@/components/svg/RingSvg";
import SmallCircle from "@/components/svg/SmallCircle";
import TabCollapse from "@/components/TabCollapse";

export default function Services() {
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
            <h1 className="font-medium text-black text-center text-[64px]">Services </h1>
            <div className="absolute top-20 right-96 translate-x-32">
                <CircleSvg />
            </div>
            <div className="relative  mx-20">
                <TabCollapse />
            </div>
          
        </div>
    )
}