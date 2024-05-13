import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";


export default function ServiceCardOne() {

    const textHeaderClassName = 'text-white text-xl font-semibold text-center';

    const textParaClassName = 'text-white text-sm text-center'

    return (
        <div className="py-20 shadow-lg px-6 rounded-xl bg-[#0665c4] flex flex-col items-center justify-center gap-3 ">
            <IoSettingsSharp size={90} color="white" />
            <h1 className={textHeaderClassName}>User & Audience Insights Analysis</h1>
            <p className={textParaClassName}>Data-rich audience insight reports, segmenting of audience based on their online habits, interests, and keywords.</p>
        </div>
    )
}