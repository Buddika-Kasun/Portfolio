"use client"

import { motion } from "framer-motion";
import isMobile from "is-mobile";
import React from "react";

const EducationSubSection = () => {
  const education = [
    {
      title:
      "Bachelor of Information and Communication Technology (BICT) (Hons.)",
      year: "Expected 2027",
      description:
      "Currently pursuing a Bachelor of Information and Communication Technology (BICT) (Hons.) at the University of Sri Jayewardenepura. Acquired comprehensive knowledge and skills in areas such as advanced mathematics, physics, statistics, data structures, cybersecurity, networking, and programming. Proficient in multiple programming languages including C, C#, C++, Java, Python, SQL, and MongoDB, as well as front-end and back-end technologies like React, JavaScript, HTML, and CSS. Gained experience in IoT, machine learning, data mining, multimedia systems, and more.",
      direct: 'left',
    },
    {
      title: "GCE Advanced Level (A/L)",
      year: 2020,
      description:
      "Achieved 3 A's in the Technology Stream with an island rank of 20. Completed studies at Taxila Central College, Horana, demonstrating exceptional performance and expertise in technology-focused subjects.",
      direct: 'right',
    },
    {
      title: "GCE Ordinary Level (O/L)",
      year: 2017,
      description:
        "Achieved 6 A's, 2 B's, and 1 C while studying at Royal College, Panadura. Main subjects with distinctions (A's) include Mathematics, Science, ICT and English, showcasing strong analytical and linguistic skills.",
      direct: 'left',
    },
  ];

  const viewportMarginH1 = isMobile()
    ? "-40% 0px -25% 0px" // For mobile devices
    : "-15% 0px -25% 0px"; // For larger screens

  return (
    <div className="relative">
      <motion.h1 
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
          },
        }}
        viewport={{
          margin: viewportMarginH1,
          //once: true,
        }}
        className="text-2xl font-semibold pb-4"
      >
        Education
      </motion.h1>
      <div className="before:absolute before:w-[2px] before:h-full before:bg-accent before:left-0 xl:before:left-[calc(50%-1px)] overflow-hidden">
        {education.map((item, index) => (
          <motion.div
            initial={{
              opacity: 0,
              x: item.direct === 'left'? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
              },
            }}
            viewport={{
              margin: viewportMarginH1,
              // once: true,
            }}
            key={index}
            className="mb-6 w-full relative pl-4 xl:odd:pr-[calc(50%+30px)] xl:odd:text-right xl:even:pl-[calc(50%+30px)]"
          >
            <div className="h-5 w-5 bg-accent absolute -left-2 xl:left-[calc(50%-10px)] rounded-full top-2" />
            <div className="m-2">{item.year}</div>
            <div className="border-2 rounded-xl border-accent py-4 px-6 lg:hover:scale-105 transition-all duration-300 hover:bg-[#38383f55]">
              <h3 className="text-accent text-lg pb-4">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSubSection;
