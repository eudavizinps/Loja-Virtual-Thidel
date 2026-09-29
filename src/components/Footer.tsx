import React from "react";

export default function Footer() {
  return (
    <footer className="bg-grn text-[#cfd6cc] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="font-serif text-2xl tracking-[0.1em] text-white mb-6">THIDEL</div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Alta alfaiataria masculina.<br />
              Ternos e moda esporte fino cortados com precisão.
            </p>
            <p className="text-sm opacity-80">
              contato@thidel.com.br<br />
              São Paulo, SP
            </p>
          </div>
          
          <div>
            <h4 className="text-gold text-[11px] font-medium uppercase tracking-[3px] mb-6">Loja</h4>
            <ul className="space-y-3 text-sm opacity-85">
              <li><a href="#" className="hover:text-gold transition-colors">Ternos</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Camisas</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Esporte Fino</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Acessórios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold text-[11px] font-medium uppercase tracking-[3px] mb-6">Ajuda</h4>
            <ul className="space-y-3 text-sm opacity-85">
              <li><a href="#" className="hover:text-gold transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Rastrear Pedido</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Guia de Medidas</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold text-[11px] font-medium uppercase tracking-[3px] mb-6">Siga</h4>
            <ul className="space-y-3 text-sm opacity-85">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© 2026 Thidel Men's Wear. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Pix</span>
            <span>Boleto</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
