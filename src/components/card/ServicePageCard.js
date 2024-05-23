import Image from "next/image";
import { truncateText } from "@/utils/truncateText";
import Link from "next/link";

export default function ServicePageCard({ data }) {
    const truncatedPara = truncateText(data?.para, 100);

    const bgClassName = "shadow-lg border-4 rounded-b-3xl w-72 h-96 flex flex-col justify-between border-gray-300 border-gradient-to-b from-gray-100 to-gray-200 hover:scale-105 duration-200"
    return (
        <div
            style={{
                borderRadius: '5px',
                background: '#ffffff',
                boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff',
            }}
        >
            <div className="w-full h-1/2 overflow-hidden">
                <Image src={data?.img} alt={data?.header} className="w-full  h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-evenly gap-5 mx-4 my-5 h-1/2">
                <h1 className="font-semibold text-lg  text-center">{data?.header}</h1>
                <p className="text-xs text-gray-600 text-justify">{truncatedPara}</p>
                <Link href={data.link}>
                    <button className="font-semibold bg-[#3236b7] px-5 py-1.5 text-sm rounded text-white">Read More</button>
                </Link>
            </div>
        </div>
    );
}
