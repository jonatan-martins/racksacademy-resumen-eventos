'use client';

import { Code, Cpu, Layers, Linkedin, Twitter } from 'lucide-react';

export default function Speakers() {
  const speakers = [
    {
      name: 'Leifer Méndez',
      role: 'Desarrollador Full Stack',
      description: 'Experto en desarrollo web moderno y arquitecturas escalables',
      icon: <Code className="w-8 h-8" />,
      sessions: ['IA en el pasado - IA en el presente', 'Cierre del evento']
    },
    {
      name: 'Jaime Serrano', 
      role: 'Cofundador de Racks',
      description: 'Visionario en tecnología y educación, líder en innovación educativa',
      icon: <Cpu className="w-8 h-8" />,
      sessions: ['IA en el pasado - IA en el presente']
    },
    {
      name: 'Domini Code',
      role: 'Especialista en Frontend',
      description: 'Experto en interfaces modernas y experiencia de usuario',
      icon: <Layers className="w-8 h-8" />,
      sessions: ['IA en el pasado - IA en el presente']
    },
    {
      name: 'Carlos Adams',
      role: 'Cofundador de Racks',
      description: 'Estratega en tecnología y desarrollo de producto',
      icon: <Cpu className="w-8 h-8" />,
      sessions: ['Cierre del evento']
    }
  ];

  return (
    <section id="ponentes" className="py-20 bg-bg-200/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-100 mb-6">
            Ponentes Destacados
          </h2>
          <p className="text-xl text-text-200 max-w-3xl mx-auto">
            Conoce a los expertos que compartirán sus experiencias y conocimientos sobre el presente y futuro de la IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-bg-200/50 backdrop-blur-sm border border-bg-300/50 rounded-xl p-6 hover:bg-bg-200/70 transition-all duration-300 hover:border-primary-100/30 hover:transform hover:scale-105"
            >
              {/* Avatar and Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {speaker.icon}
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-text-100 mb-2 group-hover:text-primary-100 transition-colors duration-200">
                  {speaker.name}
                </h3>
                <p className="text-primary-100 font-medium mb-3">
                  {speaker.role}
                </p>
                <p className="text-text-200 text-sm mb-4 leading-relaxed">
                  {speaker.description}
                </p>

                {/* Sessions */}
                <div className="space-y-2 mb-6">
                  {speaker.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className="bg-bg-300/30 text-text-200 px-3 py-1 rounded-full text-xs"
                    >
                      {session}
                    </div>
                  ))}
                </div>

                {/* TODO: Add real social media links when available */}
                <div className="flex items-center justify-center space-x-3">
                  <button className="w-8 h-8 bg-bg-300/50 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-200 group/social">
                    <Linkedin className="w-4 h-4 text-text-200 group-hover/social:text-white" />
                  </button>
                  <button className="w-8 h-8 bg-bg-300/50 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors duration-200 group/social">
                    <Twitter className="w-4 h-4 text-text-200 group-hover/social:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FIXME: Add loading states for speaker data if fetched from API */}
        <div className="mt-12 text-center">
          <p className="text-text-200 text-lg">
            Más ponentes por anunciar...
          </p>
        </div>
      </div>
    </section>
  );
}