import React from "react";

const collections = [
  {
    title: "Ternos",
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Camisas",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Esporte Fino",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

export default function Categories() {
  return (
    <section id="colecoes" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="mb-12 md:mb-16">
        <span className="text-gold text-[11px] font-medium uppercase tracking-[5px] block mb-4">Coleções</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
          Escolha sua <em className="italic text-gold">ocasião</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="group relative aspect-[3/4] overflow-hidden bg-bg2 flex items-end p-8"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${item.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-2">{item.title}</h3>
              <span className="text-gold text-[10px] uppercase tracking-[3px] font-medium flex items-center gap-2">
                Ver Coleção <span className="text-lg leading-none">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
