import { useEffect, useRef } from "react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:alex@example.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: "20+" },
];

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const { clientX, clientY } = e;
      blobRef.current.style.transform = `translate(${clientX * 0.02}px, ${clientY * 0.02}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/30 to-indigo-50/50"
    >
      {/* Background Decorations */}
      <div ref={blobRef} className="absolute top-20 right-10 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-100/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-violet-700">Available for work</span>
          </div>

          <div className="space-y-4">
            <p className="text-violet-600 font-semibold text-lg tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Alex
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Johnson
              </span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 bg-violet-600" />
              <p className="text-xl text-slate-600 font-medium">Full-Stack Developer & UI Designer</p>
            </div>
          </div>

          <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
            I craft beautiful, performant web applications with modern technologies.
            Passionate about clean code, great UX, and building products that make a difference.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 bg-white text-slate-700 font-semibold px-8 py-3.5 rounded-full border border-slate-200 hover:border-violet-300 hover:text-violet-600 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">Follow me:</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-violet-600 hover:border-violet-300 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            {/* Decorative Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 opacity-20 blur-xl animate-pulse" />
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Alex Johnson - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-slate-100">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Currently coding</p>
                <p className="text-sm font-semibold text-slate-800">React + TypeScript</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-slate-100">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="text-xs text-slate-500">Client Rating</p>
                <p className="text-sm font-semibold text-slate-800">5.0 / 5.0</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-400">Scroll down</span>
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
