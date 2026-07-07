"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Vive E-Commerce",

    description:
      "Modern fashion e-commerce platform designed with a responsive shopping experience, product presentation, and clean user interface.",

    tech: ["HTML", "CSS", "JavaScript"],

    image: "/projects/vive.png",

    demo: "https://aymankhairi.github.io/vive/",

    github: "https://github.com/aymankhairi",
  },
  {
    title: "GIM UEMOA LTD Website",

    description:
      "Professional e-commerce website developed for a London-based footwear and clothing company. Focused on presenting products with a modern responsive interface.",

    type: "Client Project",

    tech: ["HTML", "CSS", "JavaScript"],

    image: "/projects/gim.jpg",

    demo: "https://gim-uemoa-ltd.uk/",

    github: "#",
  },
  {
    title: "AIMS Finance Services",

    description:
      "Business website created for a financial services company, showcasing strategic planning, budgeting, forecasting, investment analysis, and risk management services.",

    type: "Client Project",

    tech: ["HTML", "CSS", "JavaScript"],

    image: "/projects/aims.jpg",

    demo: "https://aimsfinance.uk/",

    github: "#",
  },
  {
    title: "EOS COINVST LTD",

    description:
      "IT services website developed for a London company providing cybersecurity, cloud computing, infrastructure management, and data analytics solutions.",

    type: "Client Project",

    tech: ["HTML", "CSS", "JavaScript"],

    image: "/projects/eos.jpg",

    demo: "https://eoscoinvst.uk/",

    github: "#",
  },
  {
    title: "Restaurant Website",

    description:
      "Professional restaurant website focused on customer experience, menu presentation, and business visibility.",

    tech: ["Next.js", "Tailwind CSS"],

    image: "/projects/restaurant.png",

    demo: "#",

    github: "#",
  },

  {
    title: "Cleaning Company Website",

    description:
      "Modern service website helping customers discover services and request information easily.",

    tech: ["Next.js", "Tailwind CSS"],

    image: "/projects/cleaning.png",

    demo: "#",

    github: "#",
  },

  {
    title: "Barbershop Management System",

    description:
      "Full-stack appointment management system with booking workflow, service management, and database integration.",

    tech: ["C#", "ASP.NET Core", "SQL Server"],

    image: "/projects/barber.png",

    demo: "#",

    github: "#",
  },

  {
    title: "Arraf Mobile Application",

    description:
      "Multi-role mobile application with admin, moderator, and user systems with backend integration.",

    tech: ["Flutter", "PHP", "SQL Server", "Firebase"],

    image: "/projects/arraf.png",

    demo: "#",

    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
py-32
px-6
"
    >
      <h2
        className="
text-4xl
font-bold
text-center
mb-16
"
      >
        Featured Projects
      </h2>

      <div
        className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="
group
overflow-hidden
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-xl
hover:border-cyan-400/50
transition
"
          >
            <div
              className="
relative
h-56
overflow-hidden
"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
object-cover
group-hover:scale-110
transition
duration-500
"
              />
            </div>

            <div className="p-6">
              <h3
                className="
text-2xl
font-bold
"
              >
                {project.title}
              </h3>

              <p
                className="
mt-4
text-gray-400
leading-7
"
              >
                {project.description}
              </p>

              <div
                className="
flex
flex-wrap
gap-2
mt-5
"
              >
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
px-3
py-1
rounded-full
text-sm
bg-black
border
border-white/10
"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div
                className="
flex
gap-4
mt-6
"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  className="
flex
items-center
gap-2
text-cyan-400
"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="
flex
items-center
gap-2
text-gray-300
"
                >
                  <FaGithub size={18} />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
