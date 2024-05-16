import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";
import { motion } from "framer-motion"

export default function ServiceCardOne() {

    const textHeaderClassName = 'text-white text-xl font-semibold text-center';

    const textParaClassName = 'text-white text-sm text-center'

    const divClassName = "py-20 cursor-pointer shadow-lg px-6 rounded-xl bg-[#3236b7] flex flex-col items-center justify-center gap-3 "

    // Define animation variants
    const animationVariants = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.2, // Adding a slight delay to improve visibility
                type: "tween", // Animation type
                ease: "easeInOut", // Easing function
            },
        },
    };



    return (
        <motion.div
            layout
            className={divClassName}
            initial={{ opacity: 0, y: 50 }} // Initial animation: fade in and slide up
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: 'true'}}
            // animate={{ opacity: 1, y: 0 }} // Final animation: fully visible and in place
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition with ease-out
            style={{ position: "relative" }} // Ensure relative positioning for absolute children
        >
            {/* Background color change effect */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#555555]"
                style={{ zIndex: -1 }} // Ensure it's behind other content
            />
            {/* Content */}
            <IoSettingsSharp size={90} color="white" />
            <motion.h1 className={textHeaderClassName}>IT Solutions</motion.h1>
            <motion.p className={textParaClassName}>Data-rich audience insight reports, segmenting of audience based on their online habits, interests, and keywords.</motion.p>
        </motion.div>
    );
}