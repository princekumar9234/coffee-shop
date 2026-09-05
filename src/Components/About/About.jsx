import React from "react";
import { CheckCircle2, Heart, Award, Users, Coffee } from "lucide-react";

const About = () => {
  const stats = [
    { value: "10+", label: "Years of Craft" },
    { value: "25+", label: "Single Origins" },
    { value: "100%", label: "Fair Trade Sourced" },
    { value: "50k+", label: "Happy Cups Brewed" },
  ];

  const pillars = [
    "Ethically sourced beans from certified high-altitude family farms.",
    "Small-batch drum roasting to unlock unique floral & chocolate notes.",
    "Trained Q-Grader certified baristas passionate about precision.",
    "Eco-conscious compostable packaging & zero single-use plastics.",
  ];

  return (
    <section id="about" className="py-20 relative bg-[#150d09]/70 border-t border-b border-[#2a1a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#3d2518] shadow-2xl shadow-black/80 group">
                <img
                  src="/images/about-img.jpeg"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80";
                  }}
                  alt="Coffee Shop Roastery Ambience"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120c08] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#21140d] border border-[#4d2f1d] p-5 rounded-2xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#d49b53] text-[#120c08] flex items-center justify-center font-bold">
                    <Heart size={24} fill="#120c08" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Made with Soul</h4>
                    <p className="text-xs text-[#a8998d]">Every drop is a tribute to the craft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d49b53]">
                OUR HERITAGE & ROOTS
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Rooted in Passion, <br />
                <span className="text-[#d49b53]">Perfected in Every Cup.</span>
              </h2>
            </div>

            <p className="text-[#b8a99d] text-base leading-relaxed">
              Born from a relentless fascination with extraordinary coffee profiles, Prince Coffee Shop started as a boutique micro-roastery in Sadipur-Dihri. We believe coffee isn't just fuel—it is a shared ritual that sparks connection, mindfulness, and joy.
            </p>

            <p className="text-[#9e8f83] text-sm leading-relaxed">
              We travel to origin, build lifelong relationships with farmers, and roast small batches on vintage cast-iron roasters to celebrate each origin’s terroir and inherent sweetness.
            </p>

            {/* Quality Pillars List */}
            <div className="space-y-3 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#d49b53] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#ded3c8] font-medium">{pillar}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#2d1c13]">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <p className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#d49b53]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#9d8d81] font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
