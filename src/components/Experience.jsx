import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
            position={"Freelance"}
            time="2020-2021"
            company={"Kubicando"}
            address="Bogota, Colombia"
            work="I worked on several construction company project websites and simple inventory"
          />
          <Details
            position={"Frelance"}
            address={"Bogota, Colombia"}
            time="2021-2021"
            company={"Las Delicias de Ramon y Ramona"}
            work={
              "I worked on a sales and inventory system for a restaurant, which used technologies such as MongoDB, Rectjs and SASS"
            }
          />
          <Details
            position={"Freelance"}
            time="2022-Present"
            company={"LitoGrafia Grafolito"}
            address="Bogota, Colombia"
            work="
            working on different types of applications for the company, such as the website and inventory systems"
          />
          <Details
            position={"Freelance"}
            time="2022-Present"
            company={"Zündada"}
            address="Bogota, Colombia"
            work="currently working on a personal ticket sales project, working as a technology leader for the company"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
