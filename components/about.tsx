"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.22 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm currently a junior year student pursuing a{" "}
        <span className="font-bold">B.S.</span> degree in
        <span className="font-bold"> Software Engineering</span> at San Jose
        State University. My favorite part of programming is the problem solving
        aspect. I love solving hard problems, reading and writing.
      </p>
      <p className="mb-3">
        My current goal is to learn anything I want to learn at any level, build
        teams of people around me to support my learning, and aspire to be a
        professional to successfully navigate my world as I work towards the
        goals I care most about.
      </p>
      <p className="mb-3 italic">
        <span className="font-bold"> Learning</span> is change. Reading is
        knowledge. Knowledge is power. With that power I will work towards the
        goals I care most about. I will use every bit of democratic power I have
        to shape the world I want to live in and fight for people in my
        communities who have the least systematic power.
      </p>
    </motion.section>
  );
}
