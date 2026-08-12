const skillCategories = [
  {
    title: "Frontend",
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50 border-violet-200",
    textColor: "text-violet-700",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "Three.js / WebGL", level: 65 },
    ],
  },
  {
    title: "Backend",
    color: "from-indigo-500 to-blue-600",
    lightColor: "bg-indigo-50 border-indigo-200",
    textColor: "text-indigo-700",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "from-sky-500 to-cyan-600",
    lightColor: "bg-sky-50 border-sky-200",
    textColor: "text-sky-700",
    skills: [
      { name: "AWS / GCP", level: 80 },
      { name: "Docker / Kubernetes", level: 75 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Terraform", level: 65 },
      { name: "Linux / Bash", level: 88 },
    ],
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🔀" },
  { name: "Figma", icon: "🎨" },
  { name: "GraphQL", icon: "🔗" },
  { name: "Redis", icon: "🔴" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-600 font-semibold text-sm tracking-widest uppercase mb-3">My Skills</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            Tools & Technologies
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              I work with
            </span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            A curated set of technologies I've mastered over years of professional development.
          </p>
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-6 border ${category.lightColor} ${category.textColor}`}>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </div>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs font-semibold text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
          <h3 className="text-center text-slate-500 text-sm font-semibold tracking-widest uppercase mb-8">
            Full Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-slate-50 hover:bg-violet-50 border border-slate-200 hover:border-violet-200 rounded-xl px-4 py-2.5 transition-all duration-200 cursor-default group"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-sm font-medium text-slate-600 group-hover:text-violet-700 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
