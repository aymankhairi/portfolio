"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="
fixed
top-0
w-full
z-50
bg-black/40
backdrop-blur-xl
border-b
border-white/10
"
    >
      <div
        className="
max-w-7xl
mx-auto
px-6
py-5
flex
justify-between
items-center
"
      >
        <h1
          className="
font-bold
text-xl
"
        >
          Ayman Khairi
        </h1>

        <div
          className="
hidden
md:flex
gap-8
text-gray-300
"
        >
          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
