"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="h-full w-full relative z-10 group">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: "easeIn",
                    },
                }}
                className="relative bg-primary rounded-full"
            >
                {/* Circle */}
                <motion.svg
                    className="w-[300px] h-[300px] xl:w-[380px] xl:h-[380px] absolute top-0 left-0"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#01ffbb"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            strokeDasharray: "24 10 0 0",
                        }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />

                    <motion.circle
                        cx="253"
                        cy="253"
                        r="230"
                        stroke="#01ffbb"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            strokeDasharray: "24 10 0 0",
                        }}
                        animate={{
                            strokeDasharray: ["2 255 15 5", "12 22 55 42"],
                            rotate: [90, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    />

                    <motion.circle
                        cx="253"
                        cy="253"
                        r="290"
                        stroke="#01ffbb"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            strokeDasharray: "24 10 0 0",
                        }}
                        animate={{
                            strokeDasharray: ["2 255 15 5", "2 155 95 15"],
                            rotate: [90, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    />
                </motion.svg>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    }}
                    className="relative w-[298px] h-[298px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden"
                >
                    <Image
                        src="/assets/dp/dp3.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain p-6 rounded-full transition-transform duration-500 group-hover:scale-110 ease-in-out mix-blend-lighten"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;