"use client";
import { MotionConfig } from "framer-motion";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Start() {
  return (
    <section>
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
    </section>
  );
}
