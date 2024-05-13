import Image from "next/image";
import Logo from '../assets/logo/infosprint-logo.png';
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="shadow px-14 ">
            <div className="container mx-auto flex justify-between items-center py-2 bg-white text-black">
                <Link href='/home'>
                    <div>
                        <Image src={Logo} width={90} height={90} />
                    </div>
                </Link>
                <div className="flex flex-row justify-between items-center gap-10">
                    <ul className="flex flex-row items-center gap-10 font-[21px]">
                        <Link href='/home'>
                            <li>Home</li>
                        </Link>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Industries</li>
                        <Link href='/careers'>
                            <li>Careers</li>
                        </Link>
                    </ul>
                    <Link href='/contact'>
                    <button className="font-[21px] rounded-full px-5 py-1 border-[#1976d2] hover:bg-[#1976d2] hover:text-white border">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
        </header >
    )
}