'use client';

import React, { useState } from 'react';
import { GitBranch, Maximize2, Minimize2, FileText, Brain } from 'lucide-react';

interface MindMapNode {
  id: string;
  title: string;
  description: string;
  children?: MindMapNode[];
  level: number;
}

interface Ponencia {
  id: string;
  title: string;
  speaker: string;
  content: string;
}

interface PonenciaContentProps {
  ponencia: Ponencia;
}

// Datos del mapa mental completo extraído del documento
const mindMapData = {
  '1': {
    id: 'root',
    title: 'RACKS ACADEMY 09-20 Podcast en directo: Innovación con IA, ejecución de MVPs y seguridad en proyectos',
    level: 0,
    x: 50,
    y: 50,
    children: [
      {
        id: 'perfiles',
        title: 'Perfiles y perspectivas',
        level: 1,
        angle: 0,
        children: [
          { id: 'bezaer', title: 'Bezaer (Dominic Code)', level: 2, children: [
            { id: 'bezaer-exp', title: '~15 años viviendo de la programación', level: 3 },
            { id: 'bezaer-transition', title: 'Tránsito de la "vieja escuela" manual a aprovechar IA', level: 3 },
            { id: 'bezaer-bank', title: 'Experiencia en banca y seguros con alcance internacional', level: 3 }
          ]},
          { id: 'casos-invitados', title: 'Casos invitados y contexto adicional', level: 2, children: [
            { id: 'vicente', title: 'Vicente (blockchain): tokenización de Real Estate en Miami', level: 3 },
            { id: 'fitness-prof', title: 'Profesional del fitness: explora IA para crecer negocio', level: 3 }
          ]}
        ]
      },
      {
        id: 'adopcion-ia',
        title: 'Adopción de IA en empresas tradicionales',
        level: 1,
        angle: 45,
        children: [
          { id: 'estado-actual', title: 'Estado actual', level: 2, children: [
            { id: 'subutilizacion', title: 'Subutilización por privacidad, seguridad y compliance', level: 3 },
            { id: 'bloqueos', title: 'Bloqueos a herramientas (ChatGPT vía VPN)', level: 3 },
            { id: 'iniciativas-sin-estrategia', title: 'Iniciativas internas sin estrategia', level: 3 }
          ]},
          { id: 'razones-estructurales', title: 'Razones estructurales', level: 2, children: [
            { id: 'requerimientos-seguridad', title: 'Requerimientos de seguridad/fiabilidad no comparables con MVP', level: 3 },
            { id: 'burocracia', title: 'Burocracia que frena pese al interés real', level: 3 }
          ]},
          { id: 'ventana-pequenos', title: 'Ventana para pequeños equipos', level: 2, children: [
            { id: 'menor-friccion', title: 'Menor fricción para experimentar y "entrenar" al mercado', level: 3 },
            { id: 'geografia', title: 'Geografía: EE.UU./Europa más cautos; Sudamérica/Asia más agresivos', level: 3 }
          ]},
          { id: 'recomendaciones-corp', title: 'Recomendaciones corporativas', level: 2, children: [
            { id: 'politicas-seguras', title: 'Sustituir bloqueos por políticas seguras y auditables', level: 3 },
            { id: 'ia-gestionada', title: 'Preferir IA gestionada/proveedores con acuerdos', level: 3 }
          ]}
        ]
      },
      {
        id: 'ia-acelerador',
        title: 'IA como acelerador del ciclo de producto',
        level: 1,
        angle: 90,
        children: [
          { id: 'antes-vs-ahora', title: 'Antes vs ahora', level: 2, children: [
            { id: 'antes-research', title: 'Antes: research/validación de hasta 9 meses', level: 3 },
            { id: 'ahora-mvp', title: 'Ahora: MVPs y pruebas rápidas, baratas con IA', level: 3 }
          ]},
          { id: 'iteracion-continua', title: 'Iteración continua', level: 2, children: [
            { id: 'lean-method', title: 'Lean + método científico: lanzar, medir, iterar', level: 3 },
            { id: 'ejemplo-facturacion', title: 'Ejemplo: panel de facturación construido y ajustado "on the fly"', level: 3 }
          ]},
          { id: 'cultura-error', title: 'Cultura del error', level: 2, children: [
            { id: 'errores-indicador', title: 'Errores como indicador de aprendizaje', level: 3 },
            { id: 'ventaja-diferencial', title: 'Ventaja diferencial: criterio técnico y de negocio', level: 3 },
            { id: 'monetizacion-inicio', title: 'Pensar monetización desde el inicio', level: 3 }
          ]}
        ]
      },
      {
        id: 'emprendimiento',
        title: 'Emprendimiento, fracaso y complementariedad',
        level: 1,
        angle: 135,
        children: [
          { id: 'patrones-fracaso', title: 'Patrones de fracaso', level: 2, children: [
            { id: 'mayoria-fallan', title: 'La mayoría de ideas fallan', level: 3 },
            { id: 'equipos-desequilibrados', title: 'Problemas de equipos desequilibrados (técnico vs ventas/marketing)', level: 3 }
          ]},
          { id: 'nueva-ventaja-ia', title: 'Nueva ventaja con IA', level: 2, children: [
            { id: 'vendedores-mvp', title: 'Vendedores/marketineros pueden construir MVPs antes inviables', level: 3 },
            { id: 'tecnicos-marketing', title: 'Técnicos pueden cubrir marketing básico con IA', level: 3 }
          ]},
          { id: 'caso-practico', title: 'Caso práctico', level: 2, children: [
            { id: 'app-juegos', title: 'App de juegos/películas que murió por carga manual de preguntas', level: 3 },
            { id: 'hoy-ia-podria', title: 'Hoy IA podría generar y mantener el banco de preguntas', level: 3 }
          ]}
        ]
      },
      {
        id: 'identificacion-problemas',
        title: 'Identificación de problemas y oportunidades',
        level: 1,
        angle: 180,
        children: [
          { id: 'enfoque-reales', title: 'Enfoque en problemas reales y cercanos', level: 2, children: [
            { id: 'resolver-dolores', title: 'Resolver dolores del dominio propio', level: 3 },
            { id: 'escuchar-entorno', title: 'Escuchar a entorno y clientes: las oportunidades emergen al preguntar', level: 3 }
          ]},
          { id: 'copiar-adaptar', title: 'Copiar/adaptar con criterio', level: 2, children: [
            { id: 'modelos-probados', title: 'Traer modelos probados a contextos locales/subnichos desatendidos', level: 3 },
            { id: 'copiar-criterio', title: '"Copiar con criterio" como atajo validado', level: 3 }
          ]},
          { id: 'validacion-datos', title: 'Validación con datos y ejemplos', level: 2, children: [
            { id: 'valencia-scraping', title: 'Valencia: scraping global de productos → múltiples modelos de negocio', level: 3 },
            { id: 'restauracion-ruta', title: 'Restauración en ruta: agregación de reseñas, monetización con audiencia IG ~100k', level: 3 },
            { id: 'saas-wrapper', title: 'SaaS "wrapper" (WhatsApp + BAPI + transcripción): conversión 1–5% en <1 mes', level: 3 }
          ]},
          { id: 'frameworks-prompts', title: 'Frameworks y prompts', level: 2, children: [
            { id: 'golden-mind', title: 'Golden Mind Framework: prompt para derivar subnichos, dolores y oportunidades', level: 3 },
            { id: 'extensiones-rastreo', title: 'Extensiones que rastrean fuentes (Reddit, etc.) para mapear dolores específicos', level: 3 }
          ]}
        ]
      },
      {
        id: 'ejecucion-validacion',
        title: 'Ejecución, validación y go-to-market',
        level: 1,
        angle: 225,
        children: [
          { id: 'empezar-pronto', title: 'Empezar pronto, fallar rápido', level: 2, children: [
            { id: 'lanzar-landings', title: 'Lanzar landings con frecuencia; aprender por iteración con IA como acelerador', level: 3 },
            { id: 'reutilizar-automatizaciones', title: 'Reutilizar automatizaciones/activos aunque un proyecto no venda al inicio', level: 3 }
          ]},
          { id: 'casos-cercanos', title: 'Probar con casos cercanos', level: 2, children: [
            { id: 'pilotos-bajo-riesgo', title: 'Pilotos de bajo riesgo para validar valor', level: 3 },
            { id: 'gratis-tactico', title: 'Usar "gratis" de forma táctica, sin devaluar', level: 3 }
          ]},
          { id: 'estetica-utilidad', title: 'Estética vs utilidad', level: 2, children: [
            { id: 'priorizar-utilidad', title: 'En etapas tempranas, priorizar utilidad y conversión sobre estética', level: 3 }
          ]},
          { id: 'paquetizacion', title: 'Paquetización y límites', level: 2, children: [
            { id: 'definir-alcance', title: 'Definir alcance con claridad; grabar llamadas y usar resúmenes', level: 3 },
            { id: 'entregar-hasta-aqui', title: 'Entregar "hasta aquí" y gestionar extras como adicionales', level: 3 }
          ]},
          { id: 'medicion-reporting', title: 'Medición y reporting', level: 2, children: [
            { id: 'metricas-conversion', title: 'Métricas de conversión (1–5% en cold calling), tiempos de respuesta, ROI', level: 3 }
          ]},
          { id: 'pricing-economia', title: 'Pricing y economía', level: 2, children: [
            { id: 'base-coste-margen', title: 'Base: coste + margen; evolucionar a value-based con evidencia', level: 3 },
            { id: 'sensibilidad-segmento', title: 'Sensibilidad por segmento: grandes aceptan tickets altos; pymes exigen ROI claro', level: 3 },
            { id: 'flexibilidad-tractores', title: 'Flexibilidad con clientes tractores; ajustar costes para viabilizar margen', level: 3 }
          ]},
          { id: 'freelance-startup', title: 'Freelance vs startup', level: 2, children: [
            { id: 'freelance-caracteristicas', title: 'Freelance: reputación, especialización, trabajos simples iniciales (≤24h)', level: 3 },
            { id: 'hacia-startup', title: 'Hacia startup: elegir vertical rentable, deadline 3–6 meses, productizar automatizaciones validadas', level: 3 }
          ]},
          { id: 'distribucion-marca', title: 'Distribución y marca personal', level: 2, children: [
            { id: 'vencer-miedo-spam', title: 'Vencer miedo a "spamear": vender es ayudar si aporta valor', level: 3 },
            { id: 'lista-correo', title: 'Lista de correo propia, networking, partners con autoridad, casos y testimonios', level: 3 },
            { id: 'evitar-autodevaluacion', title: 'Evitar autodevaluación: cuidar narrativa y posicionamiento', level: 3 }
          ]}
        ]
      },
      {
        id: 'estrategia-mvp',
        title: 'Estrategia de lanzamiento y operación del MVP',
        level: 1,
        angle: 270,
        children: [
          { id: 'scope-tiempos', title: 'Scope y tiempos', level: 2, children: [
            { id: 'ventana-construccion', title: 'Ventana de construcción: 3 meses', level: 3 },
            { id: 'deadline-2-semanas', title: 'Deadline 2 semanas antes del cierre para forzar salida', level: 3 },
            { id: 'ultimas-2-semanas', title: 'Últimas 2 semanas: hotfixes y mejoras rápidas', level: 3 },
            { id: 'priorizar-3-funciones', title: 'Priorizar 3 funcionalidades núcleo; evitar scope creep', level: 3 }
          ]},
          { id: 'gestion-incidentes', title: 'Gestión de incidentes en producción', level: 2, children: [
            { id: 'incidencias-inevitables', title: 'Incidencias inevitables: importa volumen y respuesta', level: 3 },
            { id: 'senales-operativas', title: 'Señales operativas (ej. Builderbot):', level: 3 },
            { id: 'menos-180-notif', title: '<180 notificaciones al despertar: severidad media/normal', level: 3 },
            { id: 'mas-255-notif', title: '>255 notificaciones + llamadas perdidas: incidente serio, máxima prioridad', level: 3 },
            { id: 'normalizar-frustracion', title: 'Normalizar la frustración del equipo y gestionar el factor humano', level: 3 }
          ]}
        ]
      },
      {
        id: 'seguridad-blockchain',
        title: 'Seguridad y fiabilidad en contextos críticos (Blockchain y salud/fitness)',
        level: 1,
        angle: 315,
        children: [
          { id: 'practicas-blockchain', title: 'Prácticas técnicas clave (blockchain)', level: 2, children: [
            { id: 'tests-exhaustivos', title: 'Tests unitarios/integración exhaustivos (Ethers, Hardhat, Foundry)', level: 3 },
            { id: 'tests-casos-negocio', title: 'Tests orientados a casos de negocio en lenguaje legible', level: 3 },
            { id: 'auditoria-externa', title: 'Auditoría externa para autoridad/credibilidad ante dirección', level: 3 },
            { id: 'modelos-matematicos', title: 'Modelos matemáticos del protocolo (DEFI) como respaldo formal', level: 3 }
          ]},
          { id: 'rol-ia-seguridad', title: 'Rol de la IA en seguridad', level: 2, children: [
            { id: 'soporte-generacion', title: 'Soporte: generación/asesoría de tests, revisión de código, documentación', level: 3 },
            { id: 'limitaciones-ia', title: 'Limitaciones: no delegar contratos críticos totalmente a IA', level: 3 },
            { id: 'observabilidad-trazabilidad', title: 'Observabilidad/trazabilidad: base de conocimiento de errores, post-mortems', level: 3 }
          ]},
          { id: 'gobierno-control', title: 'Gobierno y control', level: 2, children: [
            { id: 'repositorio-seguridad', title: 'Repositorio interno (mini SaaS) de seguridad: errores, incidentes', level: 3 },
            { id: 'agente-llm', title: 'Agente/LLM interno entrenado para reforzar políticas SDLC', level: 3 },
            { id: 'observabilidad-logs', title: 'Observabilidad: logs y monitoreo de interacciones IA-cliente', level: 3 }
          ]},
          { id: 'comunicacion-stakeholders', title: 'Comunicación con stakeholders', level: 2, children: [
            { id: 'tecnicos-suite', title: 'Técnicos: suite de tests, cobertura, reproducibilidad, modelos, auditorías', level: 3 },
            { id: 'no-tecnicos', title: 'No técnicos: traducción de tests a comportamientos esperados', level: 3 }
          ]},
          { id: 'aplicacion-fitness', title: 'Aplicación en fitness y sectores sensibles', level: 2, children: [
            { id: 'servicio-hibrido', title: 'Servicio híbrido: asistente 24/7 (WhatsApp) + escalado automático a humano', level: 3 },
            { id: 'lista-negra', title: 'Lista negra de temas no respondibles por IA; panel de observabilidad', level: 3 },
            { id: 'mensaje-profesional', title: 'Mensaje: profesional asistido por IA, con control y validación humana', level: 3 }
          ]}
        ]
      },
      {
        id: 'ruta-aprendizaje',
        title: 'Ruta de aprendizaje: de no-code a código',
        level: 1,
        angle: 30,
        children: [
          { id: 'proceso', title: 'Proceso', level: 2, children: [
            { id: 'prototipar-n8n', title: 'Prototipar en N8N (u orquestador) para clarificar flujo y requisitos', level: 3 },
            { id: 'migrar-microservicios', title: 'Al crecer complejidad, migrar a microservicios', level: 3 }
          ]},
          { id: 'tecnologias-recomendadas', title: 'Tecnologías recomendadas', level: 2, children: [
            { id: 'backend-nodejs', title: 'Backend: Node.js/TypeScript o Python', level: 3 },
            { id: 'web-html-css', title: 'Web: HTML/CSS/JS para frontends simples', level: 3 },
            { id: 'buenas-practicas', title: 'Buenas prácticas: definir requerimientos antes de codificar', level: 3 },
            { id: 'ia-apoyo', title: 'IA como apoyo: generar esqueletos, controladores y suites de tests', level: 3 }
          ]}
        ]
      },
      {
        id: 'recursos-costes',
        title: 'Recursos, costes y cloud',
        level: 1,
        angle: 60,
        children: [
          { id: 'creditos-programas', title: 'Créditos y programas', level: 2, children: [
            { id: 'microsoft-aws', title: 'Microsoft/AWS ofrecen créditos para impulsar MVPs y testing con bajo coste inicial', level: 3 },
            { id: 'evitar-sesgo', title: 'Evitar sesgo a la inacción: usar créditos para validar pronto', level: 3 }
          ]},
          { id: 'optimizacion-costes', title: 'Optimización de costes', level: 2, children: [
            { id: 'ajustar-infra', title: 'Ajustar infra y flujo para asegurar margen positivo desde la primera versión', level: 3 }
          ]}
        ]
      },
      {
        id: 'brecha-conocimiento',
        title: 'Brecha de conocimiento y oportunidad',
        level: 1,
        angle: 120,
        children: [
          { id: 'muchos-desconocen', title: 'Muchos desconocen herramientas como ChatGPT, BAPI, n8n', level: 2 },
          { id: 'oportunidad-obvias', title: 'Oportunidad de soluciones "obvias" para técnicos pero novedosas para el mercado', level: 2 },
          { id: 'clientes-prefieren', title: 'Los clientes prefieren soluciones llave en mano más que aprender a hacerlo', level: 2 }
        ]
      },
      {
        id: 'conclusiones-clave',
        title: 'Conclusiones clave',
        level: 1,
        angle: 150,
        children: [
          { id: 'ia-reduce-tiempo', title: 'La IA reduce drásticamente tiempo y coste de validación, habilitando ideas antes inviables', level: 2 },
          { id: 'criterio-diferencial', title: 'El criterio técnico y de negocio es la ventaja diferencial más allá del prompting', level: 2 },
          { id: 'burocracia-frena', title: 'Burocracia y compliance frenan a grandes; los pequeños tienen una ventana de oportunidad', level: 2 },
          { id: 'lanzar-iterar', title: 'Lanzar pronto, iterar rápido y aceptar el error como parte del proceso es lo más efectivo', level: 2 },
          { id: 'contextos-criticos', title: 'En contextos críticos, la IA es soporte: la confianza se construye con pruebas, auditorías, observabilidad y control humano', level: 2 }
        ]
      },
      {
        id: 'ejemplos-cifras',
        title: 'Ejemplos y cifras destacadas',
        level: 1,
        angle: 210,
        children: [
          { id: 'conversion-1-5', title: 'Conversión 1–5% en llamadas en frío con SaaS wrapper (WhatsApp + BAPI + transcripción)', level: 2 },
          { id: 'ig-100k', title: 'IG ~100k como canal de monetización/promo en caso restauración', level: 2 },
          { id: 'senalizacion-operativa', title: 'Señalización operativa de severidad via volumen de notificaciones (Builderbot)', level: 2 },
          { id: 'venta-side-project', title: 'Venta de side project (The Control de Network) derivada de intento fallido previo', level: 2 }
        ]
      },
      {
        id: 'recomendaciones-practicas',
        title: 'Recomendaciones prácticas y procesos accionables',
        level: 1,
        angle: 240,
        children: [
          { id: 'corporaciones', title: 'Corporaciones', level: 2, children: [
            { id: 'politicas-seguras-corp', title: 'Políticas seguras de uso de IA con control y auditoría', level: 3 },
            { id: 'evaluar-ia-gestionada', title: 'Evaluar IA gestionada/proveedores antes que LLM propio sin caso claro', level: 3 }
          ]},
          { id: 'startups-indies', title: 'Startups/indies', level: 2, children: [
            { id: 'solicitar-creditos', title: 'Solicitar y usar créditos de Microsoft/AWS para validar PMF', level: 3 },
            { id: 'plazos-estrictos', title: 'Plazos estrictos: 3 meses + 2 semanas hotfix; evitar scope creep', level: 3 },
            { id: 'priorizar-3-funciones-rec', title: 'Priorizar 3 funcionalidades núcleo; enviar y medir', level: 3 },
            { id: 'metricas-operativas', title: 'Métricas operativas simples, umbrales de severidad y protocolos de respuesta', level: 3 },
            { id: 'activar-lista-correo', title: 'Activar lista de correo y narrativa de valor con cifras', level: 3 }
          ]},
          { id: 'perfiles-no-tecnicos', title: 'Perfiles no técnicos', level: 2, children: [
            { id: 'usar-ia-prototipado', title: 'Usar IA para prototipado de MVP, contenido y landings', level: 3 },
            { id: 'enfocarse-ventas', title: 'Enfocarse en ventas/distribución; IA cubre parte técnica básica', level: 3 }
          ]},
          { id: 'identificacion-oportunidades-rec', title: 'Identificación de oportunidades', level: 2, children: [
            { id: 'mapear-dolores', title: 'Mapear dolores en negocios cercanos; usar reseñas, foros y Golden Mind Framework', level: 3 },
            { id: 'priorizar-dolores', title: 'Priorizar dolores recurrentes y monetizables en nichos dominados', level: 3 }
          ]},
          { id: 'validacion-ventas', title: 'Validación y ventas', level: 2, children: [
            { id: 'cohorte-reducida', title: 'Cohorte reducida, medir ROI, comunicar casos y métricas', level: 3 },
            { id: 'outreach-consistente', title: 'Outreach consistente; partners con autoridad; eventos del sector', level: 3 }
          ]},
          { id: 'pricing-rec', title: 'Pricing', level: 2, children: [
            { id: 'empezar-coste-margen', title: 'Empezar con coste + margen; pasar a value-based con evidencia', level: 3 },
            { id: 'flexibilidad-tractores-rec', title: 'Flexibilidad con clientes tractores; ajustar costes si es necesario', level: 3 }
          ]},
          { id: 'seguridad-sdlc', title: 'Seguridad y SDLC (blockchain/sistemas críticos)', level: 2, children: [
            { id: 'tests-ethers', title: 'Tests con Ethers/Hardhat/Foundry, auditoría externa y modelo matemático', level: 3 },
            { id: 'rag-interno', title: 'RAG interno de errores/políticas; agente que refuerce SDLC', level: 3 },
            { id: 'observabilidad-escalado', title: 'Observabilidad y escalado humano en temas sensibles', level: 3 }
          ]}
        ]
      }
    ]
  }
};

// El mapa mental se implementará en el futuro

export default function PonenciaContent({ ponencia }: PonenciaContentProps) {
  const [activeTab, setActiveTab] = useState<'documento' | 'mapa'>('documento');

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl md:text-4xl font-bold text-text-100 mb-6 mt-8 first:mt-0">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-primary-100 mb-4 mt-8">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-semibold text-text-100 mb-3 mt-6">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 text-text-200 mb-1 list-disc">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim() === '---') {
        return <hr key={index} className="my-8 border-bg-300" />;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="text-text-200 mb-3 leading-relaxed">
            {line}
          </p>
        );
      }
    });
  };

  // Los datos del mapa mental se cargarán cuando esté implementado

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex space-x-1 bg-bg-200 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('documento')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-all duration-200 ${
            activeTab === 'documento'
              ? 'bg-primary-100 text-white shadow-sm'
              : 'text-text-200 hover:text-text-100 hover:bg-bg-300'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span>Documento Completo</span>
        </button>
        <button
          onClick={() => setActiveTab('mapa')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-medium transition-all duration-200 ${
            activeTab === 'mapa'
              ? 'bg-primary-100 text-white shadow-sm'
              : 'text-text-200 hover:text-text-100 hover:bg-bg-300'
          }`}
        >
          <Brain className="w-5 h-5" />
          <span>Mapa Mental</span>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'documento' ? (
        <article className="prose prose-lg max-w-none">
          {renderContent(ponencia.content)}
        </article>
      ) : (
        <div className="bg-bg-200 rounded-xl p-6 border border-bg-300">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-text-100 mb-2 flex items-center space-x-2">
              <GitBranch className="w-6 h-6 text-primary-100" />
              <span>Mapa Mental: {ponencia.title}</span>
            </h3>
            <p className="text-text-200">
              Visualización estructurada de los conceptos principales de la ponencia
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="bg-gradient-to-br from-bg-300 to-bg-200 rounded-lg border border-bg-300 min-h-[400px] flex flex-col items-center justify-center">
            <div className="text-center">
              <Brain className="w-16 h-16 text-primary-100 mx-auto mb-4 opacity-50" />
              <h4 className="text-xl font-semibold text-text-100 mb-2">
                Mapa Mental en Desarrollo
              </h4>
              <p className="text-text-200 mb-4 max-w-md">
                Estamos trabajando en una visualización interactiva que mostrará todos los conceptos clave de esta ponencia de forma estructurada y navegable.
              </p>
              <div className="inline-flex items-center space-x-2 bg-primary-100/10 border border-primary-100/20 rounded-lg px-4 py-2">
                <div className="w-2 h-2 bg-primary-100 rounded-full animate-pulse"></div>
                <span className="text-primary-100 font-medium">Próximamente disponible</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
