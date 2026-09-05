import React from "react";
import { Star, Quote, MessageSquare } from "lucide-react";

const reviews = [
  {
    name: "Dr. Ananya Verma",
    role: "Regular Connoisseur",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "The Spanish Saffron Latte is genuinely unmatched anywhere in the region. The ambient warm lighting and calm aesthetic makes it my favorite workspace.",
  },
  {
    name: "Rohan Mukherjee",
    role: "Coffee Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Their V60 single origin extraction has the cleanest floral notes. You can immediately tell they roast in small batches and care deeply about bean quality.",
  },
  {
    name: "Sneha Kapoor",
    role: "Food & Travel Blogger",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "From the warm butter croissants to their signature nitro cold brew, Prince Coffee Shop sets a gold standard for specialty coffee cafes. A must-visit gem!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#120c08] relative border-t border-[#291910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#271810] border border-[#4a2a19] text-xs font-semibold text-[#d49b53]">
            <MessageSquare size={14} />
            <span>COMMUNITY VOICES</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Loved by <span className="text-[#d49b53]">Coffee Lovers</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a8998d]">
            Hear what our daily patrons and specialty enthusiasts have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-[#332015] flex flex-col justify-between relative group hover:border-[#d49b53]/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-[#d49b53]/15 group-hover:text-[#d49b53]/30 transition-colors" size={48} />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#f5a623]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-[#ded3c8] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[#2a1a11]">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#d49b53]"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <p className="text-xs text-[#a8998d]">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
