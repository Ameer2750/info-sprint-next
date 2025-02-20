import Image from "next/image";
import { truncateText } from "@/utils/truncateText";
import Link from "next/link";

export default function ServiceCardOne({ data }) {

    const truncatedPara = truncateText(data?.para, 100);


    return (
        <div style={{
            borderRadius: '5px',
            background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
            boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff',
        }}   className="relative z-10">
            <div className="w-full h-1/2 overflow-hidden">
                <Image src={data?.img} alt={data?.header} className="w-full  h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-evenly gap-5 mx-4 my-5 h-1/2">
                <h1 className="font-semibold text-base text-center">{data?.header}</h1>
                <p className="text-xs text-gray-600 text-justify">{truncatedPara}</p>
                <Link href={data?.link ?? '/'}>
                    <button className="font-semibold bg-[#3236b7] px-5 py-1.5 text-sm rounded text-white">Read More</button>
                </Link>
            </div>
        </div>
    );
}