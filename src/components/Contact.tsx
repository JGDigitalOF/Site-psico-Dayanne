import React from 'react';
import { Phone, Instagram, Mail, MapPin, AlertCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="relative bg-white">
      {/* Main Contact Area */}
      <div className="py-20 md:py-32 max-w-6xl mx-auto px-6">
        <div className="bg-[#003D82] rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#004a9e] rounded-full blur-[80px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A574] rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium">
                Dê o primeiro passo para o seu bem-estar
              </h2>
              <p className="text-blue-100 text-lg font-light max-w-md mx-auto lg:mx-0">
                Agende sua consulta pelo WhatsApp ou acompanhe meus conteúdos sobre saúde mental no Instagram.
              </p>
            </div>

            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-end">
              <a
                href="https://wa.me/message/BMNBGLJNG6M6G1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#20bd5a] transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Phone size={24} />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/psidayannenascimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Instagram size={24} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="border-2 border-[#D4A574]/30 rounded-2xl p-8 bg-[#F8FAFC] flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="bg-[#D4A574]/10 p-4 rounded-full">
            <AlertCircle className="text-[#D4A574]" size={32} />
          </div>
          <div className="space-y-2">
            <p className="text-[#003D82] font-medium text-lg">
              Ligue para o CVV – 188 em caso de crise com ideação ou planejamento suicida.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Este site não oferece atendimento de emergência. <strong>Atenção:</strong> Ligue para o CVV – 188 e procure ajuda! Para atendimento de emergência em casos de crise, você deve procurar imediatamente um hospital mais próximo ou havendo risco de morte ligue imediatamente ao SAMU (ligue 192) ou Bombeiros (ligue 193).
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F8FAFC] py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-semibold text-[#003D82]">
              Dayanne Nascimento
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5511951608812"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              title="JG Digital - Desenvolvido com excelência"
            >
              <img
                src="/jg-digital-logo.jpg"
                alt="JG Digital"
                className="h-12 w-12 object-contain"
              />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-gray-500 font-light">
            <p>
              © {new Date().getFullYear()} Dayanne Nascimento - Psicóloga Clínica
            </p>
            <p>CRP 07/42225</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
