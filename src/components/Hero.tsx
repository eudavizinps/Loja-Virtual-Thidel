"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop",
    title: "A Arte de Vestir Bem",
    subtitle: "COLEÇÃO OUTONO / INVERNO 2026",
    text: "Ternos, camisas e esporte fino cortados com precisão em tecidos nobres.",
  },
  {
    image: "https://images.unsplash.com/photo-1593030761757-71fae4630b14?q=80&w=2000&auto=format&fit=crop",
    title: "Elegância Casual",
    subtitle: "LINHA ESPORTE FINO",
    text: "Conforto sem abrir mão da sofisticação para o seu dia a dia.",
  },
  {
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop",
    title: "Feito Para Você",
    subtitle: "ALFAIATARIA SOB MEDIDA",
    text: "Do primeiro emprego ao dia do casamento. Caimento impecável.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-grn">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Zoom Effect */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ${
              index === current ? "scale-105" : "scale-100"
            }`}
            style={{ backgroundImage: \`url('\${slide.image}')\` }}
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white pt-20">
        <span className="text-gold text-[11px] md:text-xs font-medium uppercase tracking-[5px] mb-6 drop-shadow-md animate-fade-in-up">
          {slides[current].subtitle}
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight drop-shadow-lg max-w-4xl leading-[1.1] animate-fade-in-up animation-delay-200 text-balance">
          {slides[current].title}
        </h1>
        <p className="max-w-md mx-auto text-sm md:text-base text-gray-200 mb-10 drop-shadow-md animate-fade-in-up animation-delay-400">
          {slides[current].text}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#loja"
            className="bg-white text-ink hover:bg-gold hover:text-white transition-colors duration-300 px-8 py-4 text-xs font-medium tracking-[2.5px] uppercase"
          >
            Ver a Coleção
          </a>
          <a
            href="#atelier"
            className="border border-white text-white hover:bg-white hover:text-ink transition-colors duration-300 px-8 py-4 text-xs font-medium tracking-[2.5px] uppercase"
          >
            Agendar Prova
          </a>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === current ? "w-12 bg-gold" : "w-6 bg-white/50 hover:bg-white"
            }`}
            aria-label={\`Ir para slide \${index + 1}\`}
          />
        ))}
      </div>
    </section>
  );
}
