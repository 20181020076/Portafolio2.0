import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, place, time, info }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type={"Primary and High School"}
            time="2005 -2017"
            place="Liceo de Cervantes Norte, Bogotá Colombia"
            info="I studied in this institution where I not only learned everything necessary but also strong skills in mathematics, physics and programming."
          />
          <Details
            type={"Systems Engineer"}
            time="2018-2020"
            place="Universidad Francico José de Caldas"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and POO."
          />
          <Details
            type={"Systems Engineer"}
            time="2020-current"
            place="Universidad Nacional de Colombia"
            info="Relevant courses where i learn more about Computer Systems Engineering, Data Structures and Algorithms, Desing Patterns, Artificial 
            Intelligence."
          />
          <Details
            type={"Machine Learning and Data Science"}
            time="2021"
            place="Universidad Nacional de Colombia"
            info="Relevant courses included Data Analitycs, Python, Machine Learning, Artificial Intelligence and Big Data."
          />
          <Details
            type={"FullStack Developer"}
            time="2022-current"
            place="CoderHouse"
            info="I get new knowleges included Web Development, JavaScript, ReactJS, MySQL, MongoDB, NodeJS, Express, Nest, GraphQL, Desing Patterns, and other technologies."
          />
          <Details
            type={"Mobile Developer"}
            time="2022-2023"
            place="CoderHouse"
            info="I deepened the knowledge that I had in ReactJS, and I learned to develop hybrid native applications in React Native."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
