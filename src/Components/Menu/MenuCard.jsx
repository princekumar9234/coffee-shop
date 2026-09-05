import React from "react";
import { Star, Plus, Flame, Heart } from "lucide-react";

const MenuCard = ({ item, onAddToCart }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-[#332015] hover:border-[#d49b53]/50 transition-all duration-300 flex flex-col group h-full">
      {/* Image Container with Badge */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#180f0a]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#150d09] via-transparent to-transparent opacity-60"></div>

        {/* Badge */}
        {item.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#d49b53] text-[#120c08] shadow-md">
            {item.badge}
          </span>
        )}

        {/* Category tag */}
        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-[#120c08]/80 text-[#d49b53] backdrop-blur-sm border border-[#3d2315]">
          {item.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-heading text-lg font-bold text-white group-hover:text-[#d49b53] transition-colors line-clamp-1">
              {item.name}
            </h3>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
              <Star size={13} fill="currentColor" />
              <span>{item.rating || "4.9"}</span>
            </div>
          </div>

          <p className="text-xs text-[#a39488] line-clamp-2 leading-relaxed font-light">
            {item.description}
          </p>

          {item.notes && (
            <div className="flex items-center gap-1.5 text-[11px] text-[#8c7a6e]">
              <Flame size={12} className="text-[#d49b53]" />
              <span>{item.notes}</span>
            </div>
          )}
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-[#2d1b12] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-[#8c7b70] block font-semibold">Price</span>
            <span className="text-lg font-bold text-[#d49b53]">
              ₹{item.price}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(item)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2a1a11] hover:bg-[#d49b53] text-[#ded3c8] hover:text-[#120c08] text-xs font-bold border border-[#422718] hover:border-[#d49b53] transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
          >
            <Plus size={14} />
            <span>Add to Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
