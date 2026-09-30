"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, Search, User } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-bg/95 backdrop-blur-md border-line text-ink py-4"
          : "bg-transparent border-transparent text-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center relative">
        {/* Mobile Menu */}
        <button className="lg:hidden p-2 -ml-2">
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-xs font-medium uppercase tracking-[2px]">
          <a href="#colecoes" className="hover:text-gold transition-colors">Alfaiataria</a>
          <a href="#loja" className="hover:text-gold transition-colors">Casual</a>
          <a href="#atelier" className="hover:text-gold transition-colors">Sob Medida</a>
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <a href="#" className="inline-block">
            <img 
              src="/logo.png" 
              alt="Thidel Alfaiataria" 
              className={`h-14 md:h-16 w-auto mx-auto transition-all duration-500 ${
                !isScrolled ? "brightness-0 invert opacity-90" : "opacity-100"
              }`} 
            />
          </a>
        </div>

        {/* Actions */}
        <div className="flex gap-4 items-center">
          <button aria-label="Buscar" className="p-2 hidden lg:block hover:text-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Minha Conta" className="p-2 hidden lg:block hover:text-gold transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button aria-label="Sacola" className="p-2 hover:text-gold transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 bg-gold text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
