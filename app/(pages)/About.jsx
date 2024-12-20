"use client"

import AboutNav from "@/components/AboutNav";
import EducationSubSection from "@/components/EducationSubSection";
import { motion } from "framer-motion";

const About = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
        >
            <div className="container mx-auto relative">
                <div className="flex flex-col xl:flex-row gap-5">
                    {/* Menu */}
                    <div className="flex flex-col w-full max-w-80 h-fit mx-auto xl:mx-0 gap-6 sticky top-[100px] xl:top-[20vh] xl:pt-[100px] z-10">
                        <AboutNav />
                    </div>

                    {/* Content */}
                    <div className="relative top-[-220px] xl:top-0 z-0">

                        <div className="aboutSubSection" id="experience">Experience</div>

                        <div className="aboutSubSection" id="education">
                            <EducationSubSection />
                        </div>

                        <div className="aboutSubSection" id="skills">Skills</div>

                        <div className="aboutSubSection" id="aboutMe">About Me</div>

                    </div>
                </div>
            </div>                
        </motion.div>
    )
}

export default About;