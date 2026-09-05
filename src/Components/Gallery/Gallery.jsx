import React, { useState } from "react";
import { Camera, Sparkles, X, ZoomIn, Heart } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "/images/gallery1.jpg",
    fallback: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
    title: "Latte Art Masterclass",
    tag: "Artisan Craft",
    likes: "248",
  },
  {
    id: 2,
    image: "/images/gallery2.jpg",
    fallback: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80",
    title: "Cozy Corner Seating",
    tag: "Ambience",
    likes: "312",
  },
  {
    id: 3,
    image: "/images/gallery3.jpg",
    fallback: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&auto=format&fit=crop&q=80",
    title: "Batch Drum Roasting",
    tag: "Roastery",
    likes: "189",
  },
  {
    id: 4,
    image: "/images/gallery4.jpg",
    fallback: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&auto=format&fit=crop&q=80",
    title: "Morning Golden Hour",
    tag: "Moments",
    likes: "420",
  },
  {
    id: 5,
    image: "/images/gallery5.jpg",
    fallback: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&auto=format&fit=crop&q=80",
    title: "Cold Brew Extraction",
    tag: "Brews",
    likes: "195",
  },
  {
    id: 6,
    image: "/images/gallery6.jpg",
    fallback: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    title: "Fresh Baked Croissants",
    tag: "Bakery",
    likes: "360",
  },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-20 relative bg-[#0e0906]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#271810] border border-[#4a2a19] text-xs font-semibold text-[#d49b53]">
            <Camera size={14} />
            <span>VISUAL CHRONICLES</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Moments at <span className="text-[#d49b53]">Prince Coffee Shop</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a8998d]">
            A glimpse into our vibrant café culture, artisan brewing processes, and cozy spaces at Prince Coffee Shop designed for deep conversations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="relative h-72 rounded-3xl overflow-hidden cursor-pointer group border border-[#301e13] shadow-lg"
            >
              <img
                src={item.image}
                onError={(e) => {
                  e.target.src = item.fallback;
                }}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-105"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120c08] via-[#120c08]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#d49b53] text-[#120c08]">
                    {item.tag}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center">
                    <ZoomIn size={16} />
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-serif-heading text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#d49b53]">Click to inspect</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <Heart size={12} fill="#e76f51" className="text-[#e76f51]" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1b120c] rounded-3xl overflow-hidden border border-[#4d2f1d] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#d49b53] hover:text-[#120c08] transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <img
              src={selectedImg.image}
              onError={(e) => {
                e.target.src = selectedImg.fallback;
              }}
              alt={selectedImg.title}
              className="w-full max-h-[75vh] object-cover"
            />

            <div className="p-6 bg-[#160e0a] flex justify-between items-center border-t border-[#332015]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#d49b53] font-bold block mb-1">
                  {selectedImg.tag}
                </span>
                <h3 className="font-serif-heading text-xl font-bold text-white">
                  {selectedImg.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#bdaea1]">
                <Heart size={16} fill="#e76f51" className="text-[#e76f51]" />
                <span>{selectedImg.likes} people loved this</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
