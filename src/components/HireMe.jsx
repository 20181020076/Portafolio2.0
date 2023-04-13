import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden fill-white md:right-4 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24 xs:w-28">
        <CircularText className="animate-spin-slow fill-dark dark:fill-white md:w-28 md:h-auto" />
        <Link
          href={"mailto:diegoarojas@hotmail.es"}
          target={"_blank"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light md:w-12 md:h-12 md:text-[10px] xs:h-14 xs:w-14 xs:text-[13px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
