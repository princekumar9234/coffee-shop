import React from "react";
import { Coffee, Award, Sparkles, Star, ArrowRight, ShieldCheck, Flame, Compass } from "lucide-react";

const Home = ({ onOpenBooking }) => {
  const highlights = [
    {
      icon: <Award className="text-[#d49b53]" size={26} />,
      title: "Award-Winning Brews",
      desc: "Voted Best Specialty Roaster 2024 & 2025",
    },
    {
      icon: <Flame className="text-[#d49b53]" size={26} />,
      title: "Daily Micro-Roasting",
      desc: "Fresh beans batch-roasted within 48 hours of serving",
    },
    {
      icon: <Compass className="text-[#d49b53]" size={26} />,
      title: "Ethically Sourced",
      desc: "Direct-trade partnerships with sustainable organic farms",
    },
    {
      icon: <ShieldCheck className="text-[#d49b53]" size={26} />,
      title: "Master Baristas",
      desc: "Certified craftsmanship behind every single extraction",
    },
  ];

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#d49b53]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-glow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8c4b1d]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#271810] border border-[#4a2a19] text-xs font-semibold text-[#d49b53]">
              <Sparkles size={14} className="animate-spin" style={{ animationDuration: "6s" }} />
              <span>THE ULTIMATE SPECIALTY COFFEE EXPERIENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Handcrafted Coffee,{" "}
              <span className="bg-gradient-to-r from-[#d49b53] via-[#f0bb78] to-[#c77a34] bg-clip-text text-transparent">
                Elevated Moments.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#b8a99d] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to our artisanal sanctuary where every bean tells a story of passion and precision. From rich single-origin espressos to velvety smooth signature pour-overs, taste perfection in every sip.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d49b53] to-[#b87635] hover:from-[#e2ab66] hover:to-[#c6823e] text-[#120c08] font-bold text-base shadow-xl shadow-[#d49b53]/25 flex items-center justify-center gap-2 group transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1e1510] hover:bg-[#2a1c14] border border-[#4d2f1d] hover:border-[#d49b53] text-[#f5ebe0] font-semibold text-base transition-all duration-200 cursor-pointer"
              >
                Reserve a Table
              </button>
            </div>

            {/* Customer Trust Proof */}
            <div className="pt-6 border-t border-[#291a11] flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-[#120c08] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-[#120c08] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-[#120c08] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Customer" />
                <div className="w-10 h-10 rounded-full border-2 border-[#120c08] bg-[#d49b53] text-[#120c08] font-bold text-xs flex items-center justify-center">
                  +5k
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#f5a623]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                  <span className="text-white text-xs font-bold ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-[#9d8e82]">Trusted by 5,000+ local coffee enthusiasts</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient circular backdrop glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#d49b53]/20 via-[#b87635]/10 to-transparent border border-[#d49b53]/20 blur-sm pointer-events-none"></div>

            {/* Main Coffee Visual with floating effect */}
            <div className="relative z-10 w-full max-w-md animate-float">
              <img
                src="/images/main-coffee.png"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80";
                }}
                alt="Artisan Specialty Coffee"
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] filter"
              />

              {/* Floating Pill Badge 1 */}
              <div className="absolute top-8 -left-4 sm:left-2 bg-[#1b120c]/90 backdrop-blur-md border border-[#4d2f1d] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-9 h-9 rounded-xl bg-[#d49b53]/20 text-[#d49b53] flex items-center justify-center font-bold">
                  ☕
                </div>
                <div>
                  <p className="text-[11px] text-[#9d8e82] uppercase tracking-wider font-semibold">Origin</p>
                  <p className="text-xs font-bold text-white">Ethiopian Yirgacheffe</p>
                </div>
              </div>

              {/* Floating Pill Badge 2 */}
              <div className="absolute -bottom-4 right-0 sm:right-4 bg-[#1b120c]/90 backdrop-blur-md border border-[#4d2f1d] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: "2.5s" }}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  🌱
                </div>
                <div>
                  <p className="text-[11px] text-[#9d8e82] uppercase tracking-wider font-semibold">Process</p>
                  <p className="text-xs font-bold text-white">100% Organic Washed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Feature Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-[#332015] hover:border-[#d49b53]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#241710] border border-[#3d2315] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#331f14] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#d49b53] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#a39488] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
