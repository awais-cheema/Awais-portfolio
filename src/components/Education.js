import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYprogress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64  md:my-20 xs:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-5xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYprogress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] sm:left-[20px] xs:left-[18px]"
        />

        <ul className="w-full flex flex-col items-end justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2019-2023"
            place="Lahore Leads University"
            info="Instilled a strong foundation in programming, algorithms, and software development, empowering me to excel in the ever-evolving tech landscape."
          />

          <Details
            type="Intermediate of Computer Science"
            time="2016-2018"
            place="Punjab Group of Colleges"
            info="Provided me with essential knowledge in programming and computer science fundamentals. This educational background laid the groundwork for my career in technology, enhancing my problem-solving skills and instilling a passion for innovation."
          />

          <Details
            type="Matriculation in Computer Science"
            time="2013-2015"
            place="Wapda Boys High School, LHR"
            info="Laid the essential groundwork for my journey into the world of technology and problem-solving."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
