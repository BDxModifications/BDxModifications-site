const experiences = [
  {
    company: "TechVision Inc.",
    role: "Senior Full-Stack Engineer",
    period: "2022 – Present",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "🏢",
    color: "from-violet-500 to-purple-600",
    description:
      "Leading a team of 6 engineers building a B2B SaaS analytics platform. Architected a microservices system handling 10M+ daily events. Reduced page load times by 60% through performance optimization.",
    achievements: [
      "Promoted within 8 months to senior role",
      "Led migration from monolith to microservices",
      "Mentored 4 junior developers",
      "Shipped 3 major product features",
    ],
    skills: ["React", "Node.js", "PostgreSQL", "Kafka", "AWS"],
  },
  {
    company: "StartupHub",
    role: "Full-Stack Developer",
    period: "2020 – 2022",
    location: "Remote",
    type: "Full-time",
    logo: "🚀",
    color: "from-indigo-500 to-blue-600",
    description:
      "Built the core product for an edtech startup from scratch — a real-time collaborative learning platform reaching 50,000 students across 20 countries. Responsible for end-to-end feature development.",
    achievements: [
      "Built MVP in 6 weeks, secured Series A",
      "Scaled platform from 0 to 50K users",
      "Reduced infrastructure costs by 40%",
      "Implemented real-time collaboration with WebSockets",
    ],
    skills: ["Next.js", "Python", "MongoDB", "Socket.io", "GCP"],
  },
  {
    company: "Freelance / Consulting",
    role: "Independent Developer",
    period: "2019 – 2020",
    location: "Remote",
    type: "Freelance",
    logo: "💻",
    color: "from-sky-500 to-cyan-600",
    description:
      "Delivered 20+ web and mobile projects for clients ranging from local businesses to VC-backed startups. Specialized in React applications, RESTful APIs, and e-commerce solutions.",
    achievements: [
      "20+ projects delivered on time",
      "100% client satisfaction rating",
      "Built custom CMS for 3 media companies",
      "E-commerce apps with $2M+ in transactions",
    ],
    skills: ["React", "Vue.js", "Firebase", "Stripe", "Shopify"],
  },
  {
    company: "DevAgency Co.",
    role: "Junior Web Developer",
    period: "2018 – 2019",
    location: "Austin, TX",
    type: "Full-time",
    logo: "🌱",
    color: "from-emerald-500 to-teal-600",
    description:
      "Kickstarted my professional career building websites and web apps for a digital agency's diverse client base. Worked across the full stack, learning best practices in an agile environment.",
    achievements: [
      "Delivered 30+ client websites",
      "Introduced component-based architecture",
      "Led transition to React from jQuery",
      "Earned Employee of the Month twice",
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "PHP", "MySQL"],
  },
];

const education = [
  {
    school: "Stanford University",
    degree: "B.S. Computer Science",
    period: "2014 – 2018",
    gpa: "3.9 / 4.0",
    icon: "🎓",
    highlights: ["Dean's List all 4 years", "CS Dept. Award for Excellence", "Hackathon Club President"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-600 font-semibold text-sm tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            Work
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"> Experience</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            5+ years of professional experience building products at every stage — from early-stage startups to scale-ups.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300 group">
                {/* Accent bar */}
                <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl shrink-0 shadow-sm`}>
                    {exp.logo}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-violet-700 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-violet-600 font-medium text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.achievements.map((ach) => (
                        <li key={ach} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {ach}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className={`text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education + Certifications */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-5 flex items-center gap-2">
                <span className="text-2xl">🎓</span> Education
              </h3>
              {education.map((edu) => (
                <div key={edu.school} className="space-y-3">
                  <div>
                    <p className="font-bold text-slate-800">{edu.school}</p>
                    <p className="text-violet-600 text-sm font-medium">{edu.degree}</p>
                    <p className="text-slate-400 text-xs mt-1">{edu.period} • GPA: {edu.gpa}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-5 flex items-center gap-2">
                <span className="text-2xl">🏅</span> Certifications
              </h3>
              <div className="space-y-4">
                {[
                  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023", color: "bg-orange-50 border-orange-200 text-orange-700" },
                  { name: "Google Cloud Professional", issuer: "Google", year: "2022", color: "bg-blue-50 border-blue-200 text-blue-700" },
                  { name: "Meta React Developer", issuer: "Meta", year: "2021", color: "bg-blue-50 border-blue-200 text-blue-700" },
                  { name: "MongoDB Certified Dev", issuer: "MongoDB", year: "2021", color: "bg-green-50 border-green-200 text-green-700" },
                ].map((cert) => (
                  <div key={cert.name} className={`flex items-center gap-3 p-3 rounded-xl border ${cert.color}`}>
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm leading-tight truncate">{cert.name}</p>
                      <p className="text-xs opacity-70">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">By The Numbers</h3>
              <div className="space-y-3">
                {[
                  { label: "Lines of code written", value: "500k+" },
                  { label: "Cups of coffee", value: "∞" },
                  { label: "Bugs squashed", value: "9,999+" },
                  { label: "Stack Overflow visits", value: "Daily 😄" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-violet-200 text-sm">{item.label}</span>
                    <span className="font-bold">{item.value}</span>
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
