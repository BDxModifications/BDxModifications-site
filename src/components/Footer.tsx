const currentYear = new Date().getFullYear();

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Web Development", href: "#" },
    { label: "Mobile Apps", href: "#" },
    { label: "UI/UX Design", href: "#" },
    { label: "API Development", href: "#" },
    { label: "Code Review", href: "#" },
    { label: "Consulting", href: "#" },
  ],
  Social: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "Dev.to", href: "https://dev.to" },
    { label: "Medium", href: "https://medium.com" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent"
            >
              &lt;Alex.dev /&gt;
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-stack developer & UI designer crafting beautiful, performant web experiences. Based in San Francisco.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400 font-medium">Available for work</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.href.startsWith("#") ? (e) => { e.preventDefault(); handleNavClick(link.href); } : undefined}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-slate-400 hover:text-violet-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-white mb-1">Stay in the loop</h3>
              <p className="text-slate-400 text-sm">Get monthly dev tips, project updates, and insights.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-900/50 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center">
            © {currentYear} Alex Johnson. All rights reserved. Built with ❤️ using React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-violet-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-violet-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
