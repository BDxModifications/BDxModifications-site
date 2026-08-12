const highlights = [
  {
    icon: "🎓",
    title: "Education",
    description: "B.S. Computer Science, Stanford University, Class of 2019",
  },
  {
    icon: "💼",
    title: "Experience",
    description: "5+ years building scalable web apps for startups and enterprises",
  },
  {
    icon: "🌍",
    title: "Location",
    description: "Based in San Francisco, CA — open to remote work worldwide",
  },
  {
    icon: "🏆",
    title: "Achievements",
    description: "Winner of 3 hackathons, featured on Product Hunt #1",
  },
];

const values = [
  { emoji: "⚡", title: "Performance First", desc: "I obsess over load times and runtime efficiency." },
  { emoji: "♿", title: "Accessibility", desc: "Building inclusive products everyone can use." },
  { emoji: "🎨", title: "Design Thinking", desc: "Beautiful UIs backed by solid UX principles." },
  { emoji: "🔒", title: "Security Minded", desc: "Security best practices baked in from day one." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-600 font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            Passionate about building
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              great digital experiences
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Hi! I'm Alex, a full-stack developer with a deep passion for creating web experiences
                that are not just functional — but delightful. I started coding at 14, building
                small games and websites for fun, and never looked back.
              </p>
              <p>
                Over the past 5+ years, I've worked with startups in Silicon Valley and enterprise
                clients worldwide, shipping products used by millions of users. I specialize in
                <strong className="text-slate-800"> React, Node.js, TypeScript</strong>, and cloud
                infrastructure, with a strong eye for design.
              </p>
              <p>
                When I'm not coding, you'll find me hiking in the Bay Area, contributing to open-source
                projects, or mentoring junior developers in my community.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Problem Solver", "Team Player", "Fast Learner", "Open Source Contributor", "Tech Writer"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-violet-50 text-violet-700 border border-violet-200 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-violet-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Highlights & Values */}
          <div className="space-y-6">
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-violet-200 hover:bg-violet-50/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-800 mb-1 group-hover:text-violet-700 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">What I Value</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div key={v.title} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{v.emoji}</span>
                      <span className="font-semibold text-sm">{v.title}</span>
                    </div>
                    <p className="text-violet-200 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
