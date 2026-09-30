import React from "react";
import { Plus } from "lucide-react";

const products = [
  {
    name: "Terno Azul Noite",
    category: "Ternos",
    price: 499.90,
    tag: "Mais Vendido",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Terno Cinza Chumbo",
    category: "Ternos",
    price: 499.90,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Camisa Egípcia Branca",
    category: "Camisas",
    price: 149.90,
    tag: "Essencial",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Blazer Caramelo",
    category: "Esporte Fino",
    price: 179.90,
    tag: "Novo",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="loja" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div>
          <span className="text-gold text-[11px] font-medium uppercase tracking-[5px] block mb-4">A Loja</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Peças de <em className="italic text-gold">assinatura</em>
          </h2>
        </div>
        <div className="flex gap-2 pb-2 overflow-x-auto w-full md:w-auto">
          {["Todos", "Ternos", "Camisas", "Esporte Fino"].map((tab, i) => (
            <button
              key={i}
              className={`px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[2px] whitespace-nowrap transition-colors border ${
                i === 0 ? "bg-ink text-bg border-ink" : "bg-transparent text-ink border-line hover:bg-ink hover:text-bg"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map((product, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-bg2 overflow-hidden mb-5">
              {product.tag && (
                <span className="absolute top-4 left-4 bg-bg text-ink text-[9px] font-medium uppercase tracking-[2px] px-3 py-1.5 z-10">
                  {product.tag}
                </span>
              )}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-grn text-white text-center py-4 text-[11px] uppercase tracking-[2px] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-10 flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Ver Detalhes
              </div>
            </div>
            
            <div>
              <span className="text-mut text-[10px] uppercase tracking-[2px] block mb-1">{product.category}</span>
              <h3 className="text-ink text-base font-normal mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <b className="font-medium">R$ {product.price.toFixed(2).replace(".", ",")}</b>
                <small className="text-mut text-xs">6x de R$ {(product.price / 6).toFixed(2).replace(".", ",")}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="border border-ink text-ink hover:bg-ink hover:text-white transition-colors duration-300 px-8 py-4 text-xs font-medium tracking-[2.5px] uppercase">
          Ver todos os produtos
        </button>
      </div>
    </section>
  );
}
