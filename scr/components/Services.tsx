import React, { useEffect, useState, useRef } from 'react';
import {
  HeartPulse,
  CloudRain,
  Brain,
  Users,
  Sparkles,
  UserPlus,
  Compass
} from 'lucide-react';

function ServiceCard({
  service,
  index
}: {
  service: { title: string; description: string; icon: React.ElementType };
  index: number;
}) {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detectar se é mobile na montagem do componente
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    // Atualizar quando a janela for redimensionada
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Se for desktop, não ativar o observer de scroll
    if (!isMobile) {
      setIsActive(false);
      return;
    }

    // Se for mobile, ativar o observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ativar quando o card cruza o meio da tela (linha imaginária)
        setIsActive(entry.isIntersecting);
      },
      {
        // Define uma linha imaginária no meio da tela (rootMargin)
        // -45% do topo e -45% do fundo cria uma "janela" estreita no centro
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl p-8 shadow-sm transition-all duration-500 border border-gray-100 group 
        ${isMobile && isActive ? 'shadow-xl -translate-y-1 border-[#D4A574]/30' : 'hover:shadow-xl hover:-translate-y-1'}
      `}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 
        ${isMobile && isActive ? 'bg-[#003D82]' : 'bg-[#F0F4F8] group-hover:bg-[#003D82]'}
      `}>
        <Icon className={`w-7 h-7 transition-colors duration-300 
          ${isMobile && isActive ? 'text-white' : 'text-[#D4A574] group-hover:text-white'}
        `} />
      </div>
      <h3 className={`font-serif text-xl font-medium mb-3 transition-colors duration-300 
        ${isMobile && isActive ? 'text-[#D4A574]' : 'text-[#003D82] group-hover:text-[#D4A574]'}
      `}>
        {service.title}
      </h3>
      <p className="text-gray-600 font-light leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export function Services() {
  const questions = [
    "Você se sente constantemente sobrecarregado pelo estresse e ansiedade?",
    "Conflitos emocionais estão afetando suas relações pessoais e profissionais?",
    "Você enfrenta dificuldades para lidar com traumas do passado?",
    "A tristeza e a melancolia são constantes em sua vida?",
    "Você está enfrentando mudanças significativas e precisa de apoio?",
    "Sente-se perdido ou sem esperança constantemente em sua jornada?"
  ];

  const services = [
    {
      title: 'Ansiedade',
      description: 'Aprenda a gerenciar pensamentos acelerados, medos e preocupações excessivas, recuperando o controle e a tranquilidade no seu dia a dia.',
      icon: HeartPulse
    },
    {
      title: 'Depressão',
      description: 'Acolhimento e tratamento para sentimentos de tristeza profunda, desânimo e falta de energia, ajudando a resgatar o sentido da vida.',
      icon: CloudRain
    },
    {
      title: 'Psicanálise Clínica',
      description: 'Investigação das causas profundas do sofrimento psíquico através da abordagem psicanalítica, tratando a raiz dos conflitos e não apenas os sintomas.',
      icon: Brain
    },
    {
      title: 'Relacionamentos',
      description: 'Desenvolvimento de habilidades de comunicação, estabelecimento de limites saudáveis e resolução de conflitos interpessoais.',
      icon: Users
    },
    {
      title: 'Autoestima',
      description: 'Trabalho focado no fortalecimento do amor-próprio, autoaceitação e construção de uma autoimagem positiva e realista.',
      icon: Sparkles
    },
    {
      title: 'Psicanálise Infantil',
      description: 'Atendimento especializado para crianças e adolescentes, auxiliando no desenvolvimento emocional e resolução de conflitos precoces.',
      icon: UserPlus
    }
  ];

  return (
    <section id="especialidades" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Questions Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-[#D4A574] font-semibold tracking-wider uppercase text-sm">
              Conscientização
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#003D82] font-medium">
              Como saber se você precisa de uma psicanalista?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {questions.map((question, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#D4A574] flex items-start gap-4">
                <Compass className="text-[#D4A574] shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-light">{question}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div id="areas-atuacao" className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#D4A574] font-semibold tracking-wider uppercase text-sm">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#003D82] font-medium">
            Especialidades Psicanalíticas
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Ofereço acompanhamento psicológico especializado fundamentado na abordagem psicanalítica para diversas demandas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Discrete Online Therapy Info Box */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white border border-[#D4A574]/20 rounded-lg p-6 shadow-sm">
            <p className="text-gray-600 text-center leading-relaxed">
              A terapia online oferece a mesma qualidade e eficácia da terapia presencial, com a praticidade de você estar no conforto do seu lar. Atendo pacientes de todo o Brasil e brasileiros no exterior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
