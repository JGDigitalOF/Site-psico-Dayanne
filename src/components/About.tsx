import React from 'react';

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
              {/* Moldura minimalista com sombra suave e borda deslocada */}
              <div className="absolute -inset-4 bg-[#D4A574]/20 rounded-2xl blur-xl -z-10"></div>
              <div className="absolute -inset-3 border-2 border-[#D4A574]/30 rounded-2xl -z-10"></div>
              
              <img
                src="/Gemini_Generated_Image_mvea2umvea2umvea.png"
                alt="Dayanne Nascimento - Psicanalista"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-[#D4A574]/20 rounded-2xl pointer-events-none"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F0F4F8] rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4A574]/10 rounded-full -z-10"></div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <span className="text-[#D4A574] font-semibold tracking-wider uppercase text-sm">
                Sobre Mim
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#003D82] font-medium">
                Olá, sou Dayanne Nascimento
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                Olá, sou Dayanne Nascimento, <strong>Psicanalista Clínica</strong> graduada pela Faculdade da Serra Gaúcha (FSG). Trabalho com a <strong>abordagem Psicanalítica</strong>, oferecendo um espaço ético e acolhedor para o autoconhecimento e crescimento pessoal. Realizo <strong>atendimentos online</strong> para todo o Brasil e brasileiros no exterior.
              </p>
              <p>
                Com especializações em Psicanálise Clínica Avançada, Psicanálise Infantil e do Adolescente pela FACUMINAS, dedico-me a investigar as causas profundas do sofrimento psíquico, tratando a raiz dos conflitos e não apenas os sintomas.
              </p>
              
              <div className="pt-4 space-y-2">
                <h3 className="font-serif text-xl text-[#003D82] font-medium">Minha Formação e Experiência:</h3>
                <ul className="list-disc pl-5 space-y-1 text-base">
                  <li>Graduação em Psicologia (FSG)</li>
                  <li>Especialização em Psicanálise Clínica Avançada (FACUMINAS)</li>
                  <li>Especialização em Psicanálise Infantil e do Adolescente (FACUMINAS)</li>
                  <li>Aperfeiçoamento em Cuidados com a Pessoa Idosa e Envelhecimento</li>
                  <li>Experiência em Recrutamento e Seleção com foco humanizado</li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <div className="inline-block border-l-4 border-[#D4A574] pl-4 italic text-gray-500">
                "Se você está aqui, já deu um grande passo para o seu processo de autoconhecimento."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
