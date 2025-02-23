"use client";
import { MotionConfig } from "framer-motion";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Start() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQF9L0LB156zjQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726433939983?e=2147483647&v=beta&t=hyr2sOTdXWW4hGd2eTzbLJG1c3xFqMH_L42W-PAcvOI"
              alt="Buyan pic"
              width="200"
              height="200"
              quality="100"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🎓
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Buyan `}</span>I'm an
        <span className="font-bold"> aspiring software engineer. </span>I love
        the challenge of
        <span className="italic"> unraveling patterns </span>and creating
        intelligent solutions. My current focus is
        <span className="underline"> Machine Learning, AI. </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:outline-none focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer border border-black/10"
          href="/Resume.pdf"
          download
        >
          My Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full
          focus:scale-[1.4] hover:scale-[1.4] hover:text-blue-600 0 active:scale-10 transition cursor-pointer
          border border-black/10"
          href="https://www.linkedin.com/in/khurel/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full
          focus:scale-[1.4] hover:scale-[1.4] hover:text-orange-400 active:scale-10 transition cursor-pointer
          border border-black/10"
          href="https://github.com/buyan-kh"
          target="_blank "
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
