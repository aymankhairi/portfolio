const skills = [
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "Next.js",
    ],
  },

  {
    category: "Backend",
    items: ["C#", "ASP.NET MVC", "ASP.NET Core", "PHP", "REST APIs"],
  },

  {
    category: "Database",
    items: ["SQL Server", "Database Design", "Data Management"],
  },

  {
    category: "Mobile Development",
    items: ["Flutter", "Firebase Cloud Messaging"],
  },

  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Microsoft Office"],
  },
];

export default function Skills() {
  return (
    <section className="py-32 px-6">
      <h2
        className="
text-4xl
font-bold
text-center
mb-16
"
      >
        Technical Skills
      </h2>

      <div
        className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-8
"
      >
        {skills.map((group) => (
          <div
            key={group.category}
            className="
border
border-white/10
rounded-2xl
p-8
bg-white/5
hover:border-cyan-400/50
transition
"
          >
            <h3
              className="
text-xl
font-bold
mb-5
text-cyan-400
"
            >
              {group.category}
            </h3>

            <div
              className="
flex
flex-wrap
gap-3
"
            >
              {group.items.map((skill) => (
                <span
                  key={skill}
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
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
