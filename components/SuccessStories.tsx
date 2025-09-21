'use client';

import { Trophy, Target, Rocket, Star } from 'lucide-react';

export default function SuccessStories() {
  const successStories = [
    {
      name: 'Jesús Vega',
      title: 'Co-fundador BoosterPadel.AI',
      description: 'Revolucionó el mundo del padel con inteligencia artificial, creando una plataforma que optimiza el rendimiento de los jugadores.',
      achievement: 'Startup exitosa en el sector deportivo',
      icon: <Rocket className="w-8 h-8" />,
      tags: ['IA', 'Deportes', 'Startup'],
      impact: '+10,000 jugadores'
    },
    {
      name: 'Borja Guillén',
      title: 'Creador de Cognitio',
      description: 'Desarrolló un SaaS que convierte cada decisión de un concejal en resultados de alto impacto para la gestión municipal.',
      achievement: 'Transformación digital gubernamental',
      icon: <Target className="w-8 h-8" />,
      tags: ['SaaS', 'GovTech', 'Analytics'],
      impact: '+50 municipios'
    },
    {
      name: 'Jaime Cabadas',
      title: 'Transformación Digital Gastronómica',
      description: 'Llevó un restaurante tradicional al mundo digital de principio a fin, implementando soluciones tecnológicas innovadoras.',
      achievement: 'Digitalización completa del negocio',
      icon: <Star className="w-8 h-8" />,
      tags: ['E-commerce', 'Digital', 'Restauración'],
      impact: '+200% ventas online'
    }
  ];

  return (
    <section className="py-20 bg-bg-100">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-bg-200/30 backdrop-blur-sm border border-primary-100/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-5 h-5 text-primary-100" />
            <span className="text-primary-100 font-medium text-sm">Casos de Éxito</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-100 mb-6">
            Historias que Inspiran
          </h2>
          <p className="text-xl text-text-200 max-w-3xl mx-auto">
            Descubre cómo nuestros alumnos han transformado sus ideas en proyectos exitosos que están cambiando sus respectivas industrias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="group bg-bg-200/30 backdrop-blur-sm border border-bg-300/50 rounded-xl p-8 hover:bg-bg-200/50 transition-all duration-300 hover:border-primary-100/30 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                <div className="text-white">
                  {story.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-text-100 mb-2 group-hover:text-primary-100 transition-colors duration-200">
                  {story.name}
                </h3>
                
                <p className="text-primary-100 font-medium mb-4">
                  {story.title}
                </p>
                
                <p className="text-text-200 text-sm mb-6 leading-relaxed">
                  {story.description}
                </p>

                {/* Achievement Badge */}
                <div className="bg-primary-100/10 border border-primary-100/20 text-primary-100 px-4 py-2 rounded-lg text-sm font-medium mb-4">
                  {story.achievement}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {story.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-bg-300/30 text-text-200 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="border-t border-bg-300/50 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-200 text-sm">Impacto</span>
                    <span className="text-primary-100 font-semibold text-sm">{story.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-bg-200/30 backdrop-blur-sm border border-bg-300/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-100 mb-4">
              ¿Serás el próximo caso de éxito?
            </h3>
            <p className="text-text-200 mb-6">
              Únete a Racks Academy y forma parte de la siguiente generación de innovadores que están transformando la industria con IA
            </p>
            {/* TODO: Link to academy registration or info page */}
            <button className="bg-primary-100 hover:bg-primary-200 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Conoce más sobre la Academy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}