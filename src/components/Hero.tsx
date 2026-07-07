"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
min-h-screen
flex
items-center
px-6
"
    >
      <div
        className="
max-w-5xl
mx-auto
w-full
"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
text-cyan-400
mb-5
"
        >
          Full Stack Software Developer
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
text-5xl
md:text-7xl
font-bold
leading-tight
"
        >
          Building Digital
          <br />
          <span
            className="
text-gray-400
"
          >
            Solutions That Scale
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
mt-8
text-gray-400
max-w-2xl
text-lg
"
        >
          I am Ayman Khairi, a Full Stack Developer specialized in web
          applications, e-commerce platforms, business systems, and mobile
          applications.
        </motion.p>

        <div
          className="
mt-10
flex
gap-5
"
        >
          <a
            href="#projects"
            className="
flex
items-center
gap-2
bg-white
text-black
px-7
py-3
rounded-xl
font-medium
"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="
border
border-white/20
px-7
py-3
rounded-xl
"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
