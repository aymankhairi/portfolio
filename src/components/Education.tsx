export default function Education() {
  return (
    <section
      id="education"
      className="
      py-32
      px-6
      max-w-6xl
      mx-auto
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
        Education
      </h2>

      <div
        className="
      max-w-4xl
      mx-auto
      "
      >
        <div
          className="
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        rounded-2xl
        p-8
        hover:border-cyan-400/50
        transition
        "
        >
          <div
            className="
          flex
          justify-between
          flex-wrap
          gap-4
          "
          >
            <div>
              <h3
                className="
              text-2xl
              font-bold
              "
              >
                Technical Diploma in Computer Engineering
              </h3>

              <p
                className="
              text-cyan-400
              mt-2
              "
              >
                Damascus University
              </p>
            </div>

            <span
              className="
            text-gray-400
            "
            >
              Software Engineering
            </span>
          </div>

          <p
            className="
          text-gray-400
          mt-6
          leading-7
          "
          >
            Specialized in software engineering, software development, and
            analysis of information and communication technology solutions.
          </p>

          <div
            className="
          flex
          flex-wrap
          gap-3
          mt-6
          "
          >
            {[
              "Software Development",
              "Programming",
              "Database Systems",
              "Application Design",
              "Web Development",
            ].map((item) => (
              <span
                key={item}
                className="
              px-4
              py-2
              rounded-full
              bg-black
              border
              border-white/10
              text-sm
              "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
