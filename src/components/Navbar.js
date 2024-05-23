import Image from "next/image";
import Logo from '../assets/logo/infosprint-logo.png';
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full bg-white shadow  fixed z-50 transition">
            <div className=" container mx-auto  px-14">
                <div className="flex justify-between items-center py-2  text-black">
                    <Link href='/'>
                        <div>
                            <Image src={Logo} width={90} height={90} />
                        </div>
                    </Link>
                    <div className="flex flex-row justify-between items-center gap-10">
                        <ul className="flex flex-row items-center gap-10 font-[21px]">
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/about'>
                                <li>About Us</li>
                            </Link>
                            <Link href='/services'>
                                <li>Services</li>
                            </Link>
                            <Link href='/industries'>
                                <li>Industries</li>
                            </Link>
                            <Link href='/careers'>
                                <li>Careers</li>
                            </Link>
                        </ul>
                        <Link href='/contact'>
                            <button className="font-[21px] rounded-full px-5 py-1 border-[#3236b7] hover:bg-[#3236b7] hover:text-white border">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    )
}
