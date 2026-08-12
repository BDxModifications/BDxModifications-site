const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO at TechVision Inc.",
    avatar: "SM",
    avatarColor: "from-pink-400 to-rose-500",
    rating: 5,
    text: "Alex is an exceptional developer who consistently delivers beyond expectations. The platform he built for us handles millions of events daily without a hiccup. His attention to detail and proactive communication make him a true asset to any team.",
  },
  {
    name: "Marcus Chen",
    role: "CTO at StartupHub",
    avatar: "MC",
    avatarColor: "from-blue-400 to-indigo-500",
    rating: 5,
    text: "We hired Alex to build our MVP and he delivered a production-ready product in just 6 weeks. His technical knowledge is outstanding, but what really sets him apart is his ability to understand the business problem and propose smart solutions.",
  },
  {
    name: "Jessica Park",
    role: "Product Lead at MindMap Canvas",
    avatar: "JP",
    avatarColor: "from-emerald-400 to-teal-500",
    rating: 5,
    text: "Working with Alex was a fantastic experience. He built our collaborative canvas feature from scratch, implementing complex real-time sync that just works flawlessly. He's professional, fast, and genuinely cares about the quality of his work.",
  },
  {
    name: "David Okafor",
    role: "Founder at DevAgency Co.",
    avatar: "DO",
    avatarColor: "from-amber-400 to-orange-500",
    rating: 5,
    text: "Alex single-handedly modernized our tech stack from jQuery to React, improving developer productivity by 50%. He's an excellent communicator and a natural mentor — our junior devs loved working with him and grew significantly under his guidance.",
  },
  {
    name: "Priya Sharma",
    role: "Engineering Manager at ShopSense",
    avatar: "PS",
    avatarColor: "from-violet-400 to-purple-500",
    rating: 5,
    text: "Alex built our AI recommendation engine that boosted our conversion rate by 35%. The ML integration he architected is elegant, maintainable, and well-documented. I would not hesitate to hire him again — he's simply one of the best developers I've worked with.",
  },
  {
    name: "Tom Westbrook",
    role: "Indie Hacker & Client",
    avatar: "TW",
    avatarColor: "from-cyan-400 to-sky-500",
    rating: 5,
    text: "I came to Alex with a vague idea and he helped me ship a polished product that got featured on Product Hunt as #1 of the day. He's technically brilliant but also great at product thinking. 10/10 would recommend to anyone looking for a developer.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-violet-600 font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            What clients
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"> say about me</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Don't just take my word for it — hear from the people I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <svg className="w-8 h-8 text-violet-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <p className="text-2xl font-bold mb-2">Ready to work together?</p>
          <p className="text-violet-200 mb-6">Let's turn your idea into a reality. I'm currently accepting new projects.</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Start a Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
