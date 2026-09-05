import React, { useState, useMemo } from "react";
import MenuCard from "./MenuCard";
import { Coffee, Search, Flame, Sparkles } from "lucide-react";

const coffeeMenuData = [
  {
    id: 1,
    name: "Artisan Flat White",
    category: "Hot Brews",
    price: 180,
    rating: 4.9,
    badge: "Bestseller",
    notes: "Velvety microfoam & double ristretto",
    description: "Rich, bold double espresso shot folded into silky steamed microfoam for intense espresso flavor.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Spanish Saffron Latte",
    category: "Signature Crafts",
    price: 240,
    rating: 5.0,
    badge: "Chef's Pick",
    notes: "Infused with organic Kashmiri saffron & condensed milk",
    description: "A decadent signature espresso creation steeped with fragrant saffron strands and sweetened cream.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Nitro Cold Brew",
    category: "Cold Coffee",
    price: 210,
    rating: 4.8,
    badge: "Popular",
    notes: "18-hr steeped, nitrogen infused",
    description: "Slow-steeped single-origin coffee infused with nitrogen for a naturally sweet, cascading creamy head.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Caramel Macchiato Royale",
    category: "Hot Brews",
    price: 210,
    rating: 4.9,
    badge: "Classic",
    notes: "House-made sea salt vanilla caramel",
    description: "Freshly steamed vanilla milk marked with intense espresso and drizzled with buttery caramel.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Iced Pistachio Latte",
    category: "Cold Coffee",
    price: 230,
    rating: 4.9,
    badge: "New",
    notes: "Roasted pistachio paste & oat milk",
    description: "Espresso over chilled milk infused with authentic Mediterranean pistachio butter and crushed nuts.",
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Pour-Over V60 Single Origin",
    category: "Hot Brews",
    price: 190,
    rating: 4.9,
    badge: "Barista Choice",
    notes: "Floral jasmine & citrus bergamot notes",
    description: "Meticulously hand-dripped Ethiopian Yirgacheffe highlighting delicate floral sweetness and crisp acidity.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Butter Croissant",
    category: "Bakery & Treats",
    price: 130,
    rating: 4.8,
    badge: "Fresh Baked",
    notes: "Layered with French Normandy butter",
    description: "Golden flaky, 100% butter artisan pastry baked fresh every single morning in our ovens.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Dark Belgian Chocolate Muffin",
    category: "Bakery & Treats",
    price: 150,
    rating: 4.9,
    badge: "Sweet Tooth",
    notes: "70% single origin cocoa core",
    description: "Moist double chocolate muffin loaded with gooey Belgian dark chocolate chunks.",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Artisan Sourdough Avocado Toast",
    category: "Savory Bites",
    price: 220,
    rating: 4.8,
    badge: "Healthy",
    notes: "Hass avocado, chili flakes & microgreens",
    description: "Crispy grilled country sourdough topped with freshly mashed ripe avocado, feta crumble, and lime.",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Gourmet Truffle Grilled Cheese",
    category: "Savory Bites",
    price: 250,
    rating: 4.9,
    badge: "Chef's Special",
    notes: "Aged cheddar, gruyère & black truffle butter",
    description: "Decadent melted artisan cheese blend sandwiched between golden butter-toasted rustic bread.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Matcha Zen Cloud Latte",
    category: "Signature Crafts",
    price: 220,
    rating: 4.9,
    badge: "Organic",
    notes: "Uji ceremonial grade matcha & vanilla cream",
    description: "Stone-ground Japanese green tea whisked with silky warm oat milk and topped with matcha dust.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Affogato al Caffè",
    category: "Bakery & Treats",
    price: 170,
    rating: 5.0,
    badge: "Italian Classic",
    notes: "Madagascan vanilla gelato & hot espresso",
    description: "A scoop of handcrafted creamy vanilla bean gelato drowned in a freshly pulled double espresso.",
    image: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=600&auto=format&fit=crop&q=80",
  },
];

const categories = [
  "All",
  "Hot Brews",
  "Cold Coffee",
  "Signature Crafts",
  "Bakery & Treats",
  "Savory Bites",
];

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return coffeeMenuData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 relative bg-[#100b07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#271810] border border-[#4a2a19] text-xs font-semibold text-[#d49b53]">
            <Sparkles size={14} />
            <span>CAREFULLY CURATED SELECTION</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Artisan <span className="text-[#d49b53]">Menu</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a8998d]">
            Every drink is formulated with perfection and every pastry is baked fresh daily using authentic recipes.
          </p>
        </div>

        {/* Controls: Category Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#d49b53] text-[#120c08] shadow-lg shadow-[#d49b53]/25 font-bold"
                    : "bg-[#1d130d] text-[#bdaea1] hover:text-white hover:bg-[#281a12] border border-[#332015]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c7b70]"
            />
            <input
              type="text"
              placeholder="Search coffee, bakery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#1b120c] border border-[#382317] text-sm text-white placeholder-[#7a6b61] focus:outline-none focus:border-[#d49b53] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8c7b70] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl border border-[#332015] space-y-3">
            <Coffee size={40} className="mx-auto text-[#d49b53]/50" />
            <p className="text-base font-bold text-white">No menu items found</p>
            <p className="text-xs text-[#8c7b70]">Try searching for something else or switch category.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-full bg-[#d49b53] text-[#120c08] text-xs font-bold mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
