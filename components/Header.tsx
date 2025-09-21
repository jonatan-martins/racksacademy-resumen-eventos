'use client';

import { useState } from 'react';
import { Menu, X, BookOpen, Calendar } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Documentos', href: '#documentos' },
    { name: 'Acerca del Evento', href: '#evento' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-200/95 backdrop-blur-sm border-b border-bg-300">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-primary-100" />
            <div className="text-xl font-bold text-text-100">
              Racks <span className="text-primary-100">Academy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-200 hover:text-primary-100 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => document.getElementById('documentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-100 hover:bg-primary-200 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Ver Documentos
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-text-200 hover:text-text-100 hover:bg-bg-300 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-bg-200 border-t border-bg-300">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-text-200 hover:text-primary-100 hover:bg-bg-300 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <button 
                  onClick={() => {
                    document.getElementById('documentos')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary-100 hover:bg-primary-200 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Ver Documentos
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}