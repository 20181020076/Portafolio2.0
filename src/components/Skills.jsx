import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute border border-transparent dark:border-light dark:text-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:py-1 sm:px-2 xs:py-0.5 xs:px-1 xs:text-xs xs:border-transparent"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x={"-10vw"} y={"-8vw"}  />
        <Skill name="CSS/SASS" x={"-12vw"} y={"7vw"} />
        <Skill name="NextJS" x={"0vw"} y={"-13vw"} />
        <Skill name="ReactJS" x={"0vw"} y={"14vw"} />
        <Skill name="React Native" x={"15vw"} y={"8vw"} />
        <Skill name="JavaScript" x={"12vw"} y={"-5vw"}/>
        <Skill name="Python" x={"37vw"} y={"-5vw"} />
        <Skill name="SQL/NoSQL" x={"-20vw"} y={"-15vw"}  />
        <Skill name="Firebase" x={"-29vw"} y={"4vw"} />
        <Skill name="Big Data" x={"5vw"} y={"-22vw"} />
        <Skill name="Machine Learning" x={"-16vw"} y={"20vw"} />
      </div>
    </>
  );
};

export default Skills;
