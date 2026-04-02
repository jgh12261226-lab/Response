import { useState } from "react";

const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1673526759317-be71a1243e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwcHVycGxlJTIwYmx1ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MDI1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  heroScreen: "https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXJrfGVufDF8fHx8MTc3NTExMTUxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  gallery1: "https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzUxMDg1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gallery2: "https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHNjcmVlbnxlbnwxfHx8fDE3NzUxMDk0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gallery3: "https://images.unsplash.com/photo-1573770012830-7cf1777db19c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzUxMTE1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  gallery4: "https://images.unsplash.com/photo-1561356476-2abbdca2b22f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc3NTExMTUxOXww&ixlib=rb-4.1.0&q=80&w=1080",
  author1: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUxMTE1MTh8MA&ixlib=rb-4.1.0&q=80&w=400",
  author2: "https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NTEwODg2NHww&ixlib=rb-4.1.0&q=80&w=400",
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 xl:px-20 h-[64px] bg-white/80 backdrop-blur-md border-b border-black/[0.06]">
      <span className="font-['Inter:Bold',sans-serif] font-bold text-[20px] tracking-[-0.5px] text-black">
        Namedly
      </span>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {["Product", "Features", "Pricing", "Blog"].map((item) => (
          <a
            key={item}
            href="#"
            className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black/60 hover:text-black transition-colors tracking-[-0.03px]"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-3">
        <a href="#" className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-black/70 hover:text-black transition-colors px-4 py-2">
          Log in
        </a>
        <a href="#" className="bg-black text-white font-['Inter:Medium',sans-serif] font-medium text-[15px] px-5 py-2 rounded-[10px] hover:bg-black/80 transition-colors">
          Get started
        </a>
      </div>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-[8px] hover:bg-black/5 transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-[5px] w-[22px]">
          <span className={`block h-[2px] bg-black rounded-full transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] bg-black rounded-full transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] bg-black rounded-full transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </div>
      </button>
      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-[64px] left-0 right-0 bg-white border-b border-black/[0.08] px-6 py-6 flex flex-col gap-4 md:hidden shadow-lg">
          {["Product", "Features", "Pricing", "Blog"].map((item) => (
            <a key={item} href="#" className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black/70">
              {item}
            </a>
          ))}
          <hr className="border-black/[0.08]" />
          <a href="#" className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black/70">Log in</a>
          <a href="#" className="bg-black text-white font-['Inter:Medium',sans-serif] font-medium text-[15px] px-5 py-3 rounded-[10px] text-center">
            Get started
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-start overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[140px] md:pt-[160px] xl:pt-[180px] px-6 md:px-12 xl:px-20 pb-0 w-full max-w-[1200px] mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white/90 tracking-[0.01em]">
            Now in public beta — free to start
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[44px] md:text-[60px] xl:text-[76px] text-white leading-[1.08] tracking-[-2px] md:tracking-[-2.5px] xl:tracking-[-3px] max-w-[900px]">
          Build products your team will{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300">
            actually love
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 font-['Inter:Regular',sans-serif] font-normal text-[17px] md:text-[19px] xl:text-[21px] text-white/70 leading-[1.55] max-w-[580px]">
          Namedly helps teams ship faster, collaborate better, and stay aligned — all in one beautifully simple workspace.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="#"
            className="bg-white text-black font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] px-8 py-4 rounded-[14px] hover:bg-white/90 transition-all shadow-lg shadow-black/20 tracking-[-0.03px] text-center"
          >
            Start for free
          </a>
          <a
            href="#"
            className="relative border border-white/25 text-white font-['Inter:Medium',sans-serif] font-medium text-[16px] px-8 py-4 rounded-[14px] hover:bg-white/10 transition-all backdrop-blur-sm tracking-[-0.03px] text-center"
          >
            See how it works →
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 font-['Inter:Regular',sans-serif] text-[13px] text-white/40 tracking-[0.02em]">
          Trusted by 2,000+ teams worldwide
        </p>

        {/* Hero Screenshot */}
        <div className="mt-12 md:mt-16 w-full max-w-[1000px] mx-auto">
          <div className="relative rounded-[20px] md:rounded-[28px] overflow-hidden border-[8px] border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <img
              src={IMAGES.heroScreen}
              alt="Product screenshot"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 rounded-[12px] md:rounded-[20px] ring-1 ring-white/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: "⚡",
    title: "Lightning fast",
    desc: "Built on the edge — responses in under 50ms anywhere on Earth.",
  },
  {
    icon: "🔒",
    title: "Enterprise security",
    desc: "SOC 2 Type II certified. Your data is encrypted at rest and in transit.",
  },
  {
    icon: "🔗",
    title: "100+ integrations",
    desc: "Connects seamlessly with Slack, Notion, GitHub, Jira, and more.",
  },
  {
    icon: "📊",
    title: "Real-time analytics",
    desc: "Dashboards that update live so your team always has the full picture.",
  },
  {
    icon: "🤖",
    title: "AI-powered",
    desc: "Smart suggestions that learn from your team's workflow over time.",
  },
  {
    icon: "🌍",
    title: "Built for scale",
    desc: "From 5 to 50,000 users — Namedly grows as fast as you do.",
  },
];

function Features() {
  return (
    <section className="bg-[#fafafa] w-full py-[80px] md:py-[100px] xl:py-[120px] px-6 md:px-12 xl:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-[56px] md:mb-[72px]">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-violet-600 tracking-[0.08em] uppercase">
            Everything you need
          </span>
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[40px] xl:text-[48px] text-black tracking-[-1px] md:tracking-[-1.5px] leading-[1.15] max-w-[600px]">
            One platform, endless possibilities
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-[16px] p-6 xl:p-8 border border-black/[0.07] hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300 group"
            >
              <div className="text-[32px] mb-4">{f.icon}</div>
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[17px] text-black tracking-[-0.04px] mb-2 group-hover:text-violet-700 transition-colors">
                {f.title}
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[15px] text-black/55 leading-[1.6]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery / Showcase ────────────────────────────────────────────────────────
function Showcase() {
  return (
    <section className="bg-white w-full py-[80px] md:py-[100px] xl:py-[120px] px-6 md:px-12 xl:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[48px] md:mb-[64px]">
          <div className="flex flex-col gap-4 max-w-[560px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-violet-600 tracking-[0.08em] uppercase">
              See it in action
            </span>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[40px] xl:text-[48px] text-black tracking-[-1px] md:tracking-[-1.5px] leading-[1.15]">
              A really compelling headline
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-black/55 leading-[1.6]">
              Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.
            </p>
          </div>
          <a
            href="#"
            className="bg-black text-white font-['Inter:Medium',sans-serif] font-medium text-[15px] px-6 py-3 rounded-[12px] hover:bg-black/80 transition-colors whitespace-nowrap self-start md:self-auto"
          >
            Explore all features
          </a>
        </div>

        {/* Staggered gallery: mobile single col, tablet+ two col */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Col 1 */}
          <div className="flex flex-col gap-6 w-full md:flex-1">
            <div className="h-[280px] md:h-[320px] xl:h-[400px] rounded-[16px] overflow-hidden">
              <img
                src={IMAGES.gallery1}
                alt="Team collaboration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[280px] md:h-[320px] xl:h-[400px] rounded-[16px] overflow-hidden">
              <img
                src={IMAGES.gallery2}
                alt="Data analytics"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* Col 2 — offset */}
          <div className="flex flex-col gap-6 w-full md:flex-1 md:pt-[80px]">
            <div className="h-[280px] md:h-[320px] xl:h-[400px] rounded-[16px] overflow-hidden">
              <img
                src={IMAGES.gallery3}
                alt="Design studio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[280px] md:h-[320px] xl:h-[400px] rounded-[16px] overflow-hidden">
              <img
                src={IMAGES.gallery4}
                alt="Modern office"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    avatar: IMAGES.author1,
    name: "Sarah Mitchell",
    role: "Head of Product at Loopify",
    quote:
      "Namedly completely changed how our team works. We shipped 3x faster within the first month. I honestly can't imagine going back to how things were before.",
    stars: 5,
  },
  {
    avatar: IMAGES.author2,
    name: "James Park",
    role: "CTO at Verdicto",
    quote:
      "The best investment we've made this year. The AI suggestions alone save our team hours every week. Setup took less than ten minutes and the onboarding was flawless.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#fafafa] w-full py-[80px] md:py-[100px] xl:py-[120px] px-6 md:px-12 xl:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-[48px] md:mb-[64px]">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-violet-600 tracking-[0.08em] uppercase">
            Testimonials
          </span>
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[40px] xl:text-[48px] text-black tracking-[-1px] md:tracking-[-1.5px] leading-[1.15]">
            Loved by teams worldwide
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-black/55 leading-[1.6] max-w-[480px]">
            A little line about what's being said and who's saying it.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white flex-1 rounded-[20px] p-8 border border-black/[0.07] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Stars count={t.stars} />
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-black leading-[1.65] mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-black tracking-[-0.02px]">
                    {t.name}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-black/50">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="w-full px-6 md:px-12 xl:px-20 py-[80px] md:py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 px-8 md:px-16 xl:px-20 py-16 md:py-20 text-center">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[44px] xl:text-[52px] text-white tracking-[-1px] md:tracking-[-1.5px] leading-[1.1] max-w-[700px]">
              Ready to level up your team?
            </h2>
            <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] text-white/75 leading-[1.6] max-w-[460px]">
              Start your free trial today. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="#"
                className="bg-white text-violet-700 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] px-8 py-4 rounded-[14px] hover:bg-white/90 transition-colors shadow-xl shadow-black/20 tracking-[-0.02px]"
              >
                Get started for free
              </a>
              <a
                href="#"
                className="border border-white/30 text-white font-['Inter:Medium',sans-serif] font-medium text-[16px] px-8 py-4 rounded-[14px] hover:bg-white/10 transition-colors"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const NAV_COLS = [
  { title: "Product", links: ["Overview", "Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Docs", "API reference", "Status", "Community", "Templates"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
];

function Footer() {
  return (
    <footer className="bg-[#0f0f11] w-full pt-[72px] pb-[48px] px-6 md:px-12 xl:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between pb-16 border-b border-white/[0.08]">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[260px]">
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[22px] text-white tracking-[-0.5px]">
              Namedly
            </span>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-white/45 leading-[1.65]">
              The modern workspace for ambitious teams who want to ship great products.
            </p>
          </div>

          {/* Nav grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 xl:gap-20">
            {NAV_COLS.map((col) => (
              <nav key={col.title} className="flex flex-col gap-3">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-white tracking-[0.05em] uppercase mb-1">
                  {col.title}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-white/45 hover:text-white/90 transition-colors leading-[1.5]"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-white/30">
            © 2026 Namedly, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-['Inter:Regular',sans-serif] text-[13px] text-white/35 hover:text-white/80 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
