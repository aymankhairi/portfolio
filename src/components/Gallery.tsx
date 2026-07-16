"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play } from "lucide-react";

const galleryItems = [
  {
    type: "image",
    src: "/gallery/vive-home.png",
    title: "Vive E-Commerce",
    category: "Website",
  },

  {
    type: "image",
    src: "/gallery/gim-home.jpg",
    title: "GIM UEMOA",
    category: "Client Project",
  },

  {
    type: "image",
    src: "/gallery/aims-home.jpg",
    title: "AIMS Finance",
    category: "Finance",
  },

  {
    type: "image",
    src: "/gallery/arraf-login.png",
    title: "Arraf Mobile App",
    category: "Mobile",
  },

  {
    type: "video",
    src: "/gallery/arraf-demo.mp4",
    title: "App Demo",
    category: "Video",
  },

  {
    type: "image",
    src: "/gallery/dashboard.png",
    title: "Admin Dashboard",
    category: "System",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(
    null,
  );

  return (
    <section
      id="gallery"
      className="
      relative
      py-32
      px-6
      overflow-hidden
    "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[1000px]
        h-[1000px]
        bg-cyan-500/5
        rounded-full
        blur-[220px]
        pointer-events-none
      "
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >
          <span
            className="
            uppercase
            tracking-[6px]
            text-cyan-400
            text-sm
          "
          >
            Showcase
          </span>

          <h2
            className="
            mt-4
            text-4xl
            md:text-6xl
            font-bold
          "
          >
            Project Gallery
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-gray-400
            text-lg
          "
          >
            A collection of websites, applications, dashboards, interfaces, and
            client projects.
          </p>
        </motion.div>

        {/* Grid */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              onClick={() => setSelected(item)}
              className="
              group
              relative
              cursor-pointer
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              hover:border-cyan-400/30
              hover:shadow-[0_20px_80px_rgba(34,211,238,0.15)]
              transition-all
              duration-500
            "
            >
              {/* Media */}

              <div className="relative h-72">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  />
                ) : (
                  <>
                    <video
                      className="
                      w-full
                      h-full
                      object-cover
                    "
                    >
                      <source src={item.src} />
                    </video>

                    <div
                      className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                    >
                      <div
                        className="
                        w-16
                        h-16
                        rounded-full
                        bg-black/60
                        flex
                        items-center
                        justify-center
                        backdrop-blur-md
                      "
                      >
                        <Play size={28} />
                      </div>
                    </div>
                  </>
                )}

                {/* Overlay */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
                />

                {/* Glow */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-cyan-500/0
                  group-hover:bg-cyan-500/10
                  transition-all
                  duration-500
                "
                />

                {/* Content */}

                <div
                  className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                "
                >
                  <span
                    className="
                    text-cyan-400
                    text-sm
                  "
                  >
                    {item.category}
                  </span>

                  <h3
                    className="
                    text-xl
                    font-bold
                    mt-1
                  "
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelected(null)}
            className="
            fixed
            inset-0
            z-[999]
            bg-black/95
            backdrop-blur-xl
            flex
            items-center
            justify-center
            p-6
          "
          >
            <button
              className="
              absolute
              top-6
              right-6
              p-3
              rounded-full
              bg-white/10
              hover:bg-white/20
            "
            >
              <X />
            </button>

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
              max-w-6xl
              w-full
            "
            >
              {selected.type === "image" ? (
                <div
                  className="
                  relative
                  w-full
                  h-[80vh]
                "
                >
                  <Image
                    src={selected.src}
                    alt={selected.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <video
                  controls
                  autoPlay
                  className="
                  w-full
                  max-h-[80vh]
                  rounded-2xl
                "
                >
                  <source src={selected.src} />
                </video>
              )}

              <div className="mt-6 text-center">
                <h3 className="text-3xl font-bold">{selected.title}</h3>

                <p className="text-cyan-400 mt-2">{selected.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
