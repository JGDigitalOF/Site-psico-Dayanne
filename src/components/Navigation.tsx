import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  const navLinks = [
  {
    name: 'Início',
    href: '#inicio'
  },
  {
    name: 'Sobre',
    href: '#sobre'
  },
  {
    name: 'Especialidades',
    href: '#especialidades'
  },
  {
    name: 'Contato',
    href: '#contato'
  }];

  return (
    <>
      {/* Mobile Nav Overlay - rendered outside header for proper stacking */}
      <div
        className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Close button inside overlay */}
        <button
          className="absolute top-5 right-4 p-2 text-[#003D82] z-[70]"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fechar menu">
          
          <X size={28} />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-[#003D82] hover:text-[#D4A574] transition-colors">
            
              {link.name}
            </a>
          )}
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 rounded-full bg-[#D4A574] text-white font-medium hover:bg-[#b88a5d] transition-colors">
            
            Agendar Consulta
          </a>
        </nav>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <span
              className={`font-serif text-xl font-semibold tracking-wide transition-colors ${isScrolled ? 'text-[#003D82]' : 'text-white'}`}>
              
              Dayanne Nascimento
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#D4A574] ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
              
                {link.name}
              </a>
            )}
            <a
              href="#contato"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${isScrolled ? 'bg-[#003D82] text-white hover:bg-[#002855]' : 'bg-[#D4A574] text-white hover:bg-[#b88a5d]'}`}>
              
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 -mr-2 transition-colors ${isScrolled ? 'text-[#003D82]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu">
            
            <Menu size={24} />
          </button>
        </div>
      </header>
    </>);

}