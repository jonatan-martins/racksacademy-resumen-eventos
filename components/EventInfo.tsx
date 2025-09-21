'use client';

import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export default function EventInfo() {
  return (
    <section id="evento" className="py-16 bg-bg-100">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-100 mb-4">
            Acerca del Evento
          </h2>
          <p className="text-lg text-text-200 max-w-2xl mx-auto">
            Información sobre el evento presencial de Inteligencia Artificial de Racks Academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Fecha */}
          <div className="bg-bg-200 border border-bg-300 rounded-xl p-6 text-center hover:border-primary-100/50 transition-all duration-200">
            <Calendar className="w-8 h-8 text-primary-100 mx-auto mb-4" />
            <h3 className="font-semibold text-text-100 mb-2">Fecha</h3>
            <p className="text-text-200">20 de Septiembre</p>
            <p className="text-sm text-text-300">2025</p>
          </div>

          {/* Ubicación */}
          <div className="bg-bg-200 border border-bg-300 rounded-xl p-6 text-center hover:border-primary-100/50 transition-all duration-200">
            <MapPin className="w-8 h-8 text-primary-100 mx-auto mb-4" />
            <h3 className="font-semibold text-text-100 mb-2">Ubicación</h3>
            <p className="text-text-200">Madrid</p>
            <p className="text-sm text-text-300">España</p>
          </div>

          {/* Capacidad */}
          <div className="bg-bg-200 border border-bg-300 rounded-xl p-6 text-center hover:border-primary-100/50 transition-all duration-200">
            <Users className="w-8 h-8 text-primary-100 mx-auto mb-4" />
            <h3 className="font-semibold text-text-100 mb-2">Asistentes</h3>
            <p className="text-text-200">500 personas</p>
            <p className="text-sm text-text-300">Aforo completo</p>
          </div>

          {/* Duración */}
          <div className="bg-bg-200 border border-bg-300 rounded-xl p-6 text-center hover:border-primary-100/50 transition-all duration-200">
            <Clock className="w-8 h-8 text-primary-100 mx-auto mb-4" />
            <h3 className="font-semibold text-text-100 mb-2">Duración</h3>
            <p className="text-text-200">Día completo</p>
            <p className="text-sm text-text-300">9:00 - 18:00</p>
          </div>
        </div>

        {/* Descripción del evento */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-200 border border-bg-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-text-100 mb-6 text-center">
              Sobre el Evento
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-200 mb-4">
                <strong className="text-primary-100">Racks Academy</strong> celebró un evento especial dedicado 
                a la Inteligencia Artificial, reuniendo a expertos, estudiantes y profesionales del sector 
                tecnológico.
              </p>
              <p className="text-text-200 mb-4">
                Durante este evento presencial, se presentaron las últimas tendencias en IA, casos de uso 
                prácticos, y se exploraron las oportunidades que esta tecnología ofrece en diferentes 
                industrias.
              </p>
              <p className="text-text-200">
                Todos los resúmenes de las ponencias y mapas mentales han sido extraídos utilizando 
                <strong className="text-primary-100"> plaud.ai</strong>, permitiendo un acceso rápido y 
                estructurado a la información presentada durante el evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

