import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#003D82]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#004a9e] blur-[120px] opacity-60"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#002855] blur-[120px] opacity-80"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-12 animate-fade-in-up">
          <img
            src="/Gemini_Generated_Image_j0mmtgj0mmtgj0mm.png"
            alt="Dayanne Nascimento - Psicanalista Logo"
            className="h-40 md:h-56 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Psicoterapia Psicanalítica com{' '}
            <span className="text-[#D4A574] italic">acolhimento</span> e
            profissionalismo
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Psicanalista Clínica | CRP 07/42225 | Terapia Online
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="group flex items-center gap-2 bg-[#D4A574] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b88a5d] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Agendar Consulta
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 rounded-full font-medium text-lg text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              Conhecer mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
