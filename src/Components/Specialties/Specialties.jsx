import React from "react";
import { Sparkles, ArrowRight, Award, Zap } from "lucide-react";

const Specialties = ({ onOpenBooking }) => {
  const specials = [
    {
      title: "Spanish Saffron Velvet",
      tag: "Signature Blend",
      price: "₹240",
      description: "Infused with pure Kashmir saffron, double espresso extraction, condensed milk, and velvety golden crema.",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Nitro Hazelnut Cloud",
      tag: "Cold Specialty",
      price: "₹230",
      description: "Slow-dripped Ethiopian single-origin cold brew charged with nitrogen, roasted hazelnut syrup & sea-salt foam.",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Artisan Kyoto Drip",
      tag: "Limited Batch",
      price: "₹260",
      description: "12-hour cold-water slow percolation extraction unlocking complex winey undertones and jasmine notes.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="specialties" className="py-20 relative bg-[#130d09] border-t border-b border-[#281910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a1a11] border border-[#4d2f1d] text-xs font-semibold text-[#d49b53]">
              <Sparkles size={14} />
              <span>BARISTA SIGNATURE CRAFTS</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Crafted Beyond <span className="text-[#d49b53]">Ordinary</span>
            </h2>
            <p className="text-sm sm:text-base text-[#a8998d] max-w-xl">
              Limited-run signature creations curated by our head coffee roaster to deliver an unmatched sensory adventure.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-[#20140e] hover:bg-[#d49b53] text-[#ded3c8] hover:text-[#120c08] border border-[#4a2e1d] hover:border-[#d49b53] text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Book Chef's Table Experience</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl overflow-hidden border border-[#382317] hover:border-[#d49b53]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-[#180f0a]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150d09] via-transparent to-transparent opacity-80"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#d49b53] text-[#120c08] shadow-lg">
                  {item.tag}
                </span>
                <span className="absolute bottom-4 right-4 text-xl font-bold text-white bg-[#120c08]/80 backdrop-blur-md px-3 py-1 rounded-xl border border-[#3d2315]">
                  {item.price}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif-heading text-xl font-bold text-white group-hover:text-[#d49b53] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a8988b] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
