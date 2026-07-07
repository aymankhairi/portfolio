import { Mail, MessageCircle } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      py-32
      px-6
      "
    >
      <div
        className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-2
      gap-16
      "
      >
        {/* Left Side */}

        <div>
          <h2
            className="
          text-4xl
          font-bold
          mb-6
          "
          >
            Let's Work Together
          </h2>
          <div
            className="
mb-8
inline-flex
items-center
gap-3
px-5
py-3
rounded-xl
bg-green-500/10
border
border-green-500/20
"
          >
            <span
              className="
w-3
h-3
bg-green-400
rounded-full
animate-pulse
"
            />

            <div>
              <p
                className="
text-green-400
font-semibold
"
              >
                Available for freelance projects
              </p>

              <p
                className="
text-sm
text-gray-400
"
              >
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
          <p
            className="
          text-gray-400
          leading-8
          text-lg
          "
          >
            Have a project idea or need a modern website or application? I'm
            available for freelance projects and business solutions.
          </p>

          <div
            className="
          mt-10
          space-y-5
          "
          >
            <a
              href="mailto:aymanakh99@gmail.com"
              className="
            flex
            items-center
            gap-4
            text-gray-300
            hover:text-cyan-400
            transition
            "
            >
              <Mail />
              aymanakh99@gmail.com
            </a>

            <a
              href="https://github.com/aymankhairi"
              target="_blank"
              className="
            flex
            items-center
            gap-4
            text-gray-300
            hover:text-cyan-400
            transition
            "
            >
              <FaGithub size={22} />
              GitHub
            </a>

            <a
              href="#"
              className="
            flex
            items-center
            gap-4
            text-gray-300
            hover:text-cyan-400
            transition
            "
            >
              <FaLinkedin size={22} /> LinkedIn
            </a>

            <a
              href="https://wa.me/963964682595"
              target="_blank"
              className="
            flex
            items-center
            gap-4
            text-gray-300
            hover:text-cyan-400
            transition
            "
            >
              <MessageCircle />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Form */}

        <form
          className="
        space-y-6
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        rounded-2xl
        "
        >
          <input
            className="
          w-full
          p-4
          rounded-xl
          bg-black
          border
          border-white/10
          outline-none
          focus:border-cyan-400
          "
            placeholder="Your Name"
          />

          <input
            type="email"
            className="
          w-full
          p-4
          rounded-xl
          bg-black
          border
          border-white/10
          outline-none
          focus:border-cyan-400
          "
            placeholder="Your Email"
          />

          <textarea
            rows={6}
            className="
          w-full
          p-4
          rounded-xl
          bg-black
          border
          border-white/10
          outline-none
          focus:border-cyan-400
          "
            placeholder="Your Message"
          />

          <button
            className="
          w-full
          py-4
          rounded-xl
          bg-white
          text-black
          font-semibold
          hover:scale-105
          transition
          "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
