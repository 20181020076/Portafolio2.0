import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import easyBank from "../../public/images/projects/easy-bank.jpg";
import timeTraking from "../../public/images/projects/time-traking.jpg";
import mustang from "../../public/images/projects/mustang.jpeg";
import johnDeere from "../../public/images/projects/johndeere.png";
import claro from "../../public/images/projects/claro.jpeg";
import splitter from "../../public/images/projects/splitter.jpeg";
import cube from "../../public/images/projects/cube.png";
import cocacola from "../../public/images/projects/cocacola.png";
import menu3d from "../../public/images/projects/menu3d.png";
import parallax from "../../public/images/projects/parallax.png";







import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-br-2x1 rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3x1 dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className={"w-full h-auto"}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border border-solid hover:text-dark hover:bg-light hover:border-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3x1 dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className={"w-full h-auto"}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Diego Rojas | Projects Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trimps Knowledge!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Mustang 3D"}
                summary="the car I will have in the future, wait for me to load the model :)"
                link={"https://splendorous-mochi-326017.netlify.app/"}
                type={"Featured Project"}
                img={mustang}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Cube Effect"}
                summary="Cube effect, hover to see it :)."
                link={"https://cube-hover3d-imzbfm5bf-20181020076.vercel.app/"}
                type={"Cube Effect"}
                img={cube}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Coca-cola effect"}
                summary="Cocacola effect hover to see it :)."
                link={"https://cocacola-r467ezji8-20181020076.vercel.app/"}
                type={"Featured Project"}
                img={cocacola}
                github="/"
              />
            </div>
           
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title={"John deere Mobile Application"}
                summary="Power calculator for choosing a tractor according to several factors and comparison of tractors, this application is still in progress."
                link={"https://admirable-salamander-7eab55.netlify.app/"}
                type={"Featured Project"}
                img={johnDeere}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Menu 3D"}
                summary="Hover to see it."
                link={"https://menu3d-88h9ilr0s-20181020076.vercel.app/"}
                type={"menu 3d"}
                img={menu3d}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Parallax effect"}
                summary="A PArallax effect scroll to see it."
                link={"https://paralax-c95qmmgs1-20181020076.vercel.app/"}
                type={"parallax"}
                img={parallax}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Bank landing page Application"}
                summary="A feature-rich Bank Screener App using React, Tailwind CSS, Context API, React Router. 
It shows detail a simple landing page."
                link={"https://dainty-malabi-829e84.netlify.app"}
                type={"Easy Bank"}
                img={easyBank}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Profile Page"}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link={"https://heartfelt-hummingbird-c6dfad.netlify.app"}
                type={"Featured Project"}
                img={timeTraking}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Claro Clone"}
                summary="A Clone of Claro email."
                link={"https://gorgeous-tanuki-cc3d95.netlify.app"}
                type={"Featured Project"}
                img={claro}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Splitter Application"}
                summary="an application that divides a restaurant bill into parts including service."
                link={"https://enchanting-scone-1c3670.netlify.app"}
                type={"Featured Project"}
                img={splitter}
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
