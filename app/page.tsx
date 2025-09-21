import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DocumentsSection from '@/components/DocumentsSection';
import EventInfo from '@/components/EventInfo';
import Footer from '@/components/Footer';

export default function Home() {
  // Documentos del evento
  const sampleDocuments = [
    {
      id: '1',
      title: 'Podcast en directo: IA en el pasado - IA en el presente',
      speaker: 'Leifer, Yonathan, Jaime y Domini Code',
      type: 'presentation' as const,
      content: `Podcast en directo: Innovación, IA, fracaso y ejecución en proyectos

Participantes y contexto
Ponentes: Leifer, Yonathan, Jaime y Domini Code.
Formato: Podcast en vivo orientado a innovación tecnológica y ejecución práctica.
Enfoque: Aplicación de IA en proyectos reales, valor del fracaso, fundamentos técnicos y criterio de negocio.

Perfiles y perspectivas
Domini Code
  ~15 años viviendo de la programación (autoidentificado como "no muy buen programador", pero sostenible).
  Tránsito de la "vieja escuela" manual a aprovechar IA de forma pragmática.
  Experiencia en banca y seguros con alcance internacional.
Casos invitados y contexto adicional
  Vicente (blockchain): tokenización de Real Estate en Miami; busca usar IA para mejorar seguridad/fiabilidad y convencer a dirección.
  Profesional del fitness: explora IA para crecer negocio, superar prejuicios de clientes (sobre todo mayores) y saber qué código aprender tras no-code/low-code.

Adopción de IA en empresas tradicionales
Estado actual
  Subutilización por privacidad, seguridad y compliance.
  Bloqueos a herramientas (p. ej., ChatGPT vía VPN).
  Iniciativas internas sin estrategia (construir o "descargar" LLM propio sin caso sólido).`,
      tags: ['IA', 'MVP', 'Emprendimiento', 'Blockchain', 'Seguridad', 'Validación'],
      date: '20 Sept 2025'
    },
    {
      id: '2',
      title: 'Mesa redonda de casos de éxito',
      speaker: 'Jaime Cavadas, Jesús Vega y Borja Gillén',
      type: 'presentation' as const,
      content: `Sesión de casos: IA aplicada a restaurantes, clubes de pádel y política municipal

Contexto general y propósito
Presentación del próximo libro "Siempre hay alguien más listo que tú (Subnormal)", que reúne 40 frameworks, modelos mentales y estrategias recopiladas a lo largo de los años.

Introducción del concepto "Efecto crack": la creencia limitante de que figuras referentes como Carlos, Víctor, Jonathan, Heimes o Draper son inalcanzables, lo que frena la acción y hace que la gente no se mueva de su zona de confort.

Objetivo de la sesión: mostrar casos reales de personas "corrientes" (Jaime Cavadas, Borja y Jesús Bema) que aplican IA, procesos y una mentalidad proactiva para crear valor, superar adversidades y vender soluciones.

Caso 1: Jaime Cavadas — Resiliencia, automatización y ventas en negocio tradicional
Perfil y contexto:
  Ingresó en RACKS en octubre, dedicando tres meses a un estudio intenso.
  Experimentó un duelo y una carga familiar significativa tras el fallecimiento de su madre.
  Experiencia previa: A los 17 años abrió un restaurante con su padre, gestionándolo durante aproximadamente 12 años.

Estrategia y ejecución:
  Identificación de ventaja asimétrica: Decidió automatizar el restaurante familiar.
  Implementaciones:
    - Creación de una página web para el restaurante
    - Desarrollo de un chatbot de pedidos online por WhatsApp
    - Integración directa con la cocina mediante impresora y tablet

Criterios de valor:
  Logró un incremento de aproximadamente 1.500€ en pedidos solo en agosto.`,
      tags: ['IA', 'Casos de Uso', 'Restaurantes', 'Pádel', 'Política', 'Automatización', 'Ventas'],
      date: '20 Sept 2025'
    },
    {
      id: '3',
      title: 'Sesión de estrategia: Academia de IA, producto SaaS y go-to-market',
      speaker: 'RACKS Academy Team',
      type: 'presentation' as const,
      content: `# Sesión de estrategia: Academia de IA, producto SaaS y go-to-market

## Contexto, propósito y enfoque
Presentación de un video emotivo sobre la evolución de una academia centrada en inteligencia artificial (IA) y su comunidad.

Inicio de una conversación abierta sobre perspectivas y futuro de la IA sin caer en extremos apocalípticos o aceleracionistas, enfocándose en sus implicaciones reales en trabajo, emprendimiento y adopción tecnológica.

Formación orientada a producto, automatización y construcción de SaaS a partir de necesidades reales de clientes y alumnos, con énfasis en validar con casos prácticos, integraciones y feedback directo.

Importancia de reducir fricción operativa mediante paneles internos, automatizaciones y plantillas escalables.`,
      tags: ['IA', 'Academia', 'SaaS', 'Go-to-market', 'Producto', 'Estrategia'],
      date: '20 Sept 2025'
    },
    {
      id: '4',
      title: 'Uso no convencional de la IA para indagación, persuasión y revelación de información',
      speaker: 'Carlos Adams y Jota Red Pill',
      type: 'presentation' as const,
      content: `# Uso no convencional de la IA para indagación, persuasión y revelación de información

## Enfoque de uso de la IA
Uso principal orientado a resolver dudas complejas y filosóficas, y el ponente [Speaker 3] está empezando a utilizarla para productividad.

Áreas de consulta: dudas históricas, farmacéuticas, científicas, económicas y sobre supuestas "mentiras institucionalizadas" a día de hoy.

Objetivo: obtener "verdades" o perspectivas más críticas ajustando parámetros y el encuadre del prompt.`,
      tags: ['IA', 'Prompting', 'Técnicas Avanzadas', 'Persuasión', 'Filosofía', 'Investigación'],
      date: '20 Sept 2025'
    }
  ];


  return (
    <main className="min-h-screen bg-bg-100">
      <Header />
      <HeroSection />
      <DocumentsSection documents={sampleDocuments} />
      <EventInfo />
      <Footer />
    </main>
  );
}