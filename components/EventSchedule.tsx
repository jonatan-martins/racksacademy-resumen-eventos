'use client';

import { Clock, Users, Utensils, Trophy, MessageCircle } from 'lucide-react';

export default function EventSchedule() {
  const scheduleItems = [
    {
      time: '11:00 - 12:00',
      title: 'Entrada al recinto',
      description: 'Inicio de la entrada al evento y proceso de checking.',
      icon: <Users className="w-6 h-6" />,
      type: 'entry'
    },
    {
      time: '12:00 - 13:00', 
      title: 'Networking',
      description: 'Iniciamos el evento con un espacio para charlar libremente, con dinámicas para potenciar la comunicación entre alumnos y profesores.',
      icon: <MessageCircle className="w-6 h-6" />,
      type: 'networking'
    },
    {
      time: '13:00 - 14:00',
      title: 'IA en el pasado - IA en el presente',
      description: 'Espacio donde expertos de distintas áreas nos cuentan cómo era la IA en sus inicios y cómo ha evolucionado hasta hoy, además de hablar de los retos que encontraron en su desarrollo, aprendizajes y resultados.',
      icon: <Clock className="w-6 h-6" />,
      type: 'talk',
      speakers: ['Leifer Méndez', 'Jaime Serrano', 'Domini Code']
    },
    {
      time: '14:00 - 16:00',
      title: 'Comida',
      description: 'Comida incluida con la entrada. Disponemos de menús adaptados para diferentes intolerancias alimentarias, con previa notificación.',
      icon: <Utensils className="w-6 h-6" />,
      type: 'meal'
    },
    {
      time: '16:00 - 16:45',
      title: 'Mesa redonda de casos de éxito',
      description: 'Espacio donde alumnos de cada edición nos cuentan sobre cómo consiguieron su caso de éxito, además de hablar de las dificultades que encontraron por el camino, aprendizajes y resultados.',
      icon: <Trophy className="w-6 h-6" />,
      type: 'success',
      speakers: ['Jesús Vega', 'Borja Guillén', 'Jaime Cabadas']
    },
    {
      time: '16:45 - 17:45',
      title: 'Recapitulación del primer año de Racks Academy',
      description: 'Espacio para conmemorar el año de Racks Academy, pasado, presente y futuro de la academia. En este espacio analizaremos la academia desde sus inicios hasta el presente.',
      icon: <Clock className="w-6 h-6" />,
      type: 'talk'
    },
    {
      time: '17:45 - 18:15',
      title: 'Entrega de premios',
      description: 'Reconocimiento a los destacados del año.',
      icon: <Trophy className="w-6 h-6" />,
      type: 'awards'
    },
    {
      time: '18:15 - 18:30',
      title: 'Cierre del evento',
      description: 'Palabras finales de los cofundadores Carlos Adams y Leifer Méndez.',
      icon: <Users className="w-6 h-6" />,
      type: 'closing'
    },
    {
      time: '18:30 - 20:00',
      title: 'Networking',
      description: 'Espacio de networking hasta el cierre de las instalaciones, con barra libre de bebidas y snacks.',
      icon: <MessageCircle className="w-6 h-6" />,
      type: 'networking'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      entry: 'bg-primary-100/10 border-primary-100/20 text-primary-100',
      networking: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      talk: 'bg-green-500/10 border-green-500/20 text-green-400',
      meal: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      success: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
      awards: 'bg-red-500/10 border-red-500/20 text-red-400',
      closing: 'bg-accent-100/10 border-accent-100/20 text-accent-100'
    };
    return colors[type as keyof typeof colors] || 'bg-bg-300/50 border-bg-300 text-text-200';
  };

  return (
    <section id="itinerario" className="py-20 bg-bg-100">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-100 mb-6">
            Itinerario del Evento
          </h2>
          <p className="text-xl text-text-200 max-w-3xl mx-auto">
            Un día completo lleno de aprendizaje, networking y celebración del primer año de Racks Academy
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* TODO: Add ability to filter schedule items by type */}
          <div className="space-y-6">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className="group bg-bg-200/30 backdrop-blur-sm border border-bg-300/50 rounded-xl p-6 hover:bg-bg-200/50 transition-all duration-300 hover:border-primary-100/30"
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  {/* Time Badge */}
                  <div className="flex-shrink-0">
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border ${getTypeColor(item.type)}`}>
                      {item.icon}
                      <span className="font-semibold text-sm">{item.time}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-100 mb-2 group-hover:text-primary-100 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-text-200 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Speakers */}
                    {item.speakers && item.speakers.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.speakers.map((speaker, speakerIndex) => (
                          <span
                            key={speakerIndex}
                            className="bg-primary-100/10 text-primary-100 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {speaker}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FIXME: Add sticky time navigation for better UX on mobile */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-bg-200/30 backdrop-blur-sm border border-bg-300/50 rounded-xl p-4">
            <Clock className="w-5 h-5 text-primary-100" />
            <span className="text-text-200">Duración total: 9 horas de contenido y networking</span>
          </div>
        </div>
      </div>
    </section>
  );
}