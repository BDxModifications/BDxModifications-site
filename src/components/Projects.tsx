import { useState } from "react";

const categories = ["All", "Web App", "Mobile", "Open Source", "AI/ML"];

const projects = [
  {
    title: "TaskFlow Pro",
    category: "Web App",
    description:
      "A real-time project management platform with AI-powered task prioritization, team collaboration, and advanced analytics dashboard built for distributed teams.",
    image: "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: { stars: "1.2k", forks: "340" },
  },
  {
    title: "ShopSense AI",
    category: "AI/ML",
    description:
      "An e-commerce recommendation engine using machine learning to personalize shopping experiences, boosting conversion rates by 35% for retail clients.",
    image: "https://images.pexels.com/photos/29502368/pexels-photo-29502368.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["Python", "FastAPI", "TensorFlow", "React", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    stats: { stars: "870", forks: "210" },
  },
  {
    title: "CryptoTrack Mobile",
    category: "Mobile",
    description:
      "A cross-platform mobile app for real-time cryptocurrency portfolio tracking with price alerts, technical analysis charts, and news aggregation.",
    image: "https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["React Native", "TypeScript", "GraphQL", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: { stars: "520", forks: "130" },
  },
  {
    title: "DevDocs CLI",
    category: "Open Source",
    description:
      "A blazing-fast command-line tool for searching developer documentation offline, supporting 200+ languages and frameworks with fuzzy search.",
    image: "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["Rust", "CLI", "Open Source", "Linux", "macOS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: { stars: "3.4k", forks: "890" },
  },
  {
    title: "MindMap Canvas",
    category: "Web App",
    description:
      "A collaborative infinite canvas for brainstorming and mind mapping with real-time multiplayer, AI content suggestions, and export to various formats.",
    image: "https://images.pexels.com/photos/18530501/pexels-photo-18530501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["Next.js", "Canvas API", "WebRTC", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: { stars: "290", forks: "78" },
  },
  {
    title: "AutoML Studio",
    category: "AI/ML",
    description:
      "A no-code machine learning platform that lets non-technical users train, evaluate, and deploy ML models through a drag-and-drop interface.",
    image: "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["Python", "scikit-learn", "React", "Docker", "GCP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    stats: { stars: "650", forks: "160" },
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-violet-600 font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            Featured
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            A selection of projects I've built — from side projects to production apps serving thousands of users.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200"
                  : "bg-slate-100 text-slate-600 hover:bg-violet-50 hover:text-violet-700 border border-transparent hover:border-violet-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Featured
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-white">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-violet-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-medium">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5.559 8.855c.166 1.453.639 2.536 1.463 3.276.824.74 2.024 1.198 3.633 1.367v1.255a1 1 0 001.618.786l3.666-2.942a1 1 0 000-1.572L11.273 8.077a1 1 0 00-1.618.787v1.097c-1.014-.129-1.73-.449-2.193-.96-.464-.511-.722-1.307-.777-2.486a1 1 0 00-1-.998 1 1 0 00-1 .998c-.018.33-.025.662-.025.997 0 .448.033.866.9.342z" />
                      </svg>
                      {project.stats.forks}
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium py-2 rounded-xl hover:shadow-lg hover:shadow-violet-200 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-xl hover:bg-slate-200 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-8 py-3.5 rounded-full hover:border-violet-300 hover:text-violet-600 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
