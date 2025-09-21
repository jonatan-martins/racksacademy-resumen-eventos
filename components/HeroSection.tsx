'use client';

import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-20 pb-16 gradient-bg">
      <div className="container-max section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-bg-200/50 backdrop-blur-sm border border-primary-100/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary-100 rounded-full animate-pulse"></div>
            <span className="text-primary-100 font-medium text-sm">Especial Aniversario</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-100 mb-6 animate-slide-up">
            <span className="block">Racks</span>
            <span className="block text-primary-100">Academy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-200 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Documentos y resúmenes del evento de IA
          </p>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center space-x-3 bg-bg-200/30 backdrop-blur-sm rounded-xl p-4 border border-bg-300/50">
              <Calendar className="w-6 h-6 text-primary-100" />
              <div className="text-left">
                <div className="text-sm text-text-200">Fecha</div>
                <div className="font-semibold text-text-100">20 Septiembre</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-bg-200/30 backdrop-blur-sm rounded-xl p-4 border border-bg-300/50">
              <MapPin className="w-6 h-6 text-primary-100" />
              <div className="text-left">
                <div className="text-sm text-text-200">Ubicación</div>
                <div className="font-semibold text-text-100">Madrid</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-bg-200/30 backdrop-blur-sm rounded-xl p-4 border border-bg-300/50">
              <Users className="w-6 h-6 text-primary-100" />
              <div className="text-left">
                <div className="text-sm text-text-200">Capacidad</div>
                <div className="font-semibold text-text-100">500 personas</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('documentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-primary-100 hover:bg-primary-200 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Ver Documentos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={() => document.getElementById('evento')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-text-200 hover:border-primary-100 text-text-200 hover:text-primary-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-bg-300/20"
            >
              Acerca del Evento
            </button>
          </div>

          <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-text-200 text-sm mb-4">Resúmenes extraídos con plaud.ai para fácil acceso y consulta</p>
            <div className="w-16 h-1 bg-primary-100 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}