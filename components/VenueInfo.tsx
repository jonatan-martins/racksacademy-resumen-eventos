'use client';

import { MapPin, Users, Mic, Wifi, Car, Utensils } from 'lucide-react';

export default function VenueInfo() {
  const facilities = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Auditorio de Última Tecnología',
      description: 'Equipamiento audiovisual de alta calidad para una experiencia envolvente'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Espacios de Networking',
      description: 'Amplias áreas diseñadas para facilitar la conexión entre asistentes'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Conectividad Premium',
      description: 'WiFi de alta velocidad en todas las instalaciones'
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Fácil Acceso',
      description: 'Ubicación céntrica con excelente conectividad de transporte público'
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Servicios de Catering',
      description: 'Menús adaptados para diferentes intolerancias alimentarias'
    }
  ];

  return (
    <section id="instalaciones" className="py-20 bg-bg-200/30">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-bg-200/30 backdrop-blur-sm border border-primary-100/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-100" />
              <span className="text-primary-100 font-medium text-sm">Instalaciones</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text-100 mb-6">
              Fundación Pablo VI
            </h2>
            
            <p className="text-xl text-text-200 mb-8 leading-relaxed">
              Para esta edición especial de aniversario de Racks Academy, elegimos la Fundación Pablo VI 
              para celebrar con nuestros alumnos. Con capacidad para <span className="text-primary-100 font-semibold">500 personas</span>, 
              la Fundación cuenta con instalaciones de primer nivel.
            </p>

            {/* Location Details */}
            <div className="bg-bg-200/50 backdrop-blur-sm border border-bg-300/50 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-100 mt-1" />
                <div>
                  <h4 className="font-semibold text-text-100 mb-2">Dirección</h4>
                  <p className="text-text-200">Madrid, España</p>
                  {/* TODO: Add specific address when available */}
                  <p className="text-sm text-text-200 mt-2">Fácil acceso en transporte público</p>
                </div>
              </div>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-bg-200/30 backdrop-blur-sm border border-bg-300/30 rounded-lg hover:bg-bg-200/50 transition-colors duration-200"
                >
                  <div className="text-primary-100 mt-1">
                    {facility.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-text-100 text-sm mb-1">
                      {facility.title}
                    </h5>
                    <p className="text-text-200 text-xs leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            {/* FIXME: Replace with actual venue image when available */}
            <div className="aspect-[4/3] bg-gradient-to-br from-bg-300 to-bg-200 rounded-xl border border-bg-300/50 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-10 h-10 text-primary-100" />
                </div>
                <p className="text-text-200 font-medium">Fundación Pablo VI</p>
                <p className="text-text-200/60 text-sm">Madrid</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-primary-100/10 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary-100/5 rounded-full"></div>
              <div className="absolute top-1/2 left-8 w-4 h-4 bg-primary-100/20 rounded-full"></div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-6 -right-6 bg-bg-200/90 backdrop-blur-sm border border-bg-300/50 rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-100">500</div>
                <div className="text-sm text-text-200">Capacidad</div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-bg-200/90 backdrop-blur-sm border border-bg-300/50 rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-100">9h</div>
                <div className="text-sm text-text-200">Duración</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-bg-200/30 backdrop-blur-sm border border-bg-300/50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-100 mb-4">
              Una experiencia completa
            </h3>
            <p className="text-text-200 leading-relaxed">
              La Fundación Pablo VI nos brinda el espacio perfecto para celebrar este hito especial. 
              Sus instalaciones modernas y su ambiente inspirador crearán el entorno ideal para el 
              aprendizaje, la conexión y la celebración de nuestro primer año de Racks Academy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}