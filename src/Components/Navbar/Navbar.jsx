import React, { useState, useEffect } from "react";
import { Coffee, Menu, X, ShoppingBag, Clock, Phone, MapPin, Sparkles } from "lucide-react";

const Navbar = ({ onOpenBooking, cartCount = 0, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Specialties", href: "#specialties" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact & Visit", href: "#contact" },
  ];

  return (
    <>
      {/* Top micro bar for info */}
      <div className="bg-[#180f0a] border-b border-[#2d1b12] text-xs text-[#a89b91] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#d49b53]" /> Mon - Sun: 7:30 AM - 10:30 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#d49b53]" /> Sadipur-Dihri, Obra, Aurangabad
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-[#d49b53] font-medium">
              <Sparkles size={13} /> Fresh Daily Batch Roasted
            </span>
            <a href="tel:+919234000000" className="flex items-center gap-1 hover:text-[#d49b53] transition-colors">
              <Phone size={13} /> +91 92340-XXXXX
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-2xl py-3"
            : "bg-[#120c08]/90 backdrop-blur-md py-4 border-b border-[#2a1a11]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d49b53] to-[#8c4b1d] flex items-center justify-center text-white shadow-lg shadow-[#d49b53]/20 group-hover:scale-105 transition-transform duration-300">
              <Coffee size={22} className="text-white" />
            </div>
            <div>
              <span className="font-serif-heading text-2xl font-bold tracking-tight text-white block leading-tight">
                Prince<span className="text-[#d49b53]"> Coffee</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#a89b91] font-semibold block">
                Shop & Roastery
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 bg-[#1a120c]/80 px-4 py-1.5 rounded-full border border-[#332015]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#ded3c8] hover:text-[#d49b53] hover:bg-[#28180e] rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#1e1510] text-[#ded3c8] hover:text-[#d49b53] hover:bg-[#2b1d15] border border-[#382317] transition-colors cursor-pointer"
              title="View Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#d49b53] text-black font-bold text-xs flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Table Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d49b53] to-[#b87635] hover:from-[#e2ab66] hover:to-[#c6823e] text-[#120c08] font-semibold text-sm shadow-md shadow-[#d49b53]/20 hover:shadow-[#d49b53]/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile Menu & Cart Buttons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg bg-[#1e1510] text-[#ded3c8] border border-[#382317]"
              title="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#d49b53] text-black font-bold text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#1e1510] text-[#ded3c8] hover:text-white border border-[#382317] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100 border-b border-[#332015] bg-[#140c08]/98 backdrop-blur-xl" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-base font-medium text-[#ded3c8] hover:text-[#d49b53] hover:bg-[#20140e] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-[#2d1b12] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d49b53] to-[#b87635] text-[#120c08] font-bold text-center text-sm shadow-md cursor-pointer"
              >
                Book a Table
              </button>
              <p className="text-center text-xs text-[#8c7b70] pt-1">
                📞 Call Prince Coffee Shop: +91 92340-XXXXX
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
