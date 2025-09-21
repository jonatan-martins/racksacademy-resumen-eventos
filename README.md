<<<<<<< HEAD
# 🚀 Racks Academy - Evento de IA

Una plataforma web moderna para documentar y compartir contenido del evento especial de aniversario de Racks Academy, enfocado en innovación con Inteligencia Artificial, ejecución de MVPs y casos de éxito empresariales.

![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes Principales](#-componentes-principales)
- [Contenido del Evento](#-contenido-del-evento)
- [Desarrollo](#-desarrollo)
- [Despliegue](#-despliegue)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

- **🎯 Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **📱 Responsive**: Optimizado para todos los dispositivos
- **🔍 Búsqueda Avanzada**: Filtrado por ponentes, tags y contenido
- **📄 Documentos Interactivos**: Visualización de presentaciones y mapas mentales
- **🎨 UI Components**: Biblioteca completa de componentes con Radix UI
- **⚡ Performance**: Optimizado con Next.js 13 y App Router
- **🌙 Tema Adaptativo**: Soporte para modo claro y oscuro

## 🛠 Tecnologías

### Frontend
- **Next.js 13.5.1** - Framework React con App Router
- **TypeScript 5.2.2** - Tipado estático
- **TailwindCSS 3.3.3** - Framework CSS utilitario
- **React 18.2.0** - Biblioteca de UI

### UI Components
- **Radix UI** - Componentes accesibles y personalizables
- **Lucide React** - Iconografía moderna
- **Framer Motion** - Animaciones fluidas
- **Class Variance Authority** - Gestión de variantes CSS

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento CSS
- **Autoprefixer** - Compatibilidad de navegadores

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm, yarn o pnpm

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/racks-academy-event.git
   cd racks-academy-event
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📖 Uso

### Navegación Principal
- **Inicio**: Landing page con información del evento
- **Documentos**: Sección principal con todas las presentaciones
- **Información del Evento**: Detalles sobre ponentes y agenda
- **Mapas Mentales**: Visualizaciones interactivas del contenido

### Funcionalidades de Búsqueda
- **Filtro por Ponente**: Buscar contenido por speaker específico
- **Filtro por Tags**: Filtrar por temas (IA, MVP, Blockchain, etc.)
- **Búsqueda de Texto**: Buscar contenido dentro de los documentos

### Visualización de Contenido
- **Presentaciones**: Documentos estructurados con resúmenes detallados
- **Mapas Mentales**: Visualizaciones gráficas del conocimiento
- **Enlaces Externos**: Acceso a recursos adicionales

## 📁 Estructura del Proyecto

```
project/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── ponencia/          # Páginas dinámicas de ponencias
├── components/            # Componentes React
│   ├── ui/               # Componentes base (Radix UI)
│   ├── DocumentsSection.tsx
│   ├── EventInfo.tsx
│   ├── HeroSection.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── content/              # Contenido markdown
│   └── ponencias/        # Documentos de ponencias
├── hooks/                # Custom hooks
├── lib/                  # Utilidades
└── public/               # Assets estáticos
```

## 🧩 Componentes Principales

### `HeroSection`
- Landing principal con información del evento
- Animaciones de entrada
- Detalles clave (fecha, ubicación, participantes)

### `DocumentsSection`
- Lista de documentos del evento
- Sistema de filtrado avanzado
- Búsqueda en tiempo real
- Cards interactivas con preview

### `EventInfo`
- Información detallada del evento
- Perfiles de ponentes
- Agenda y horarios

### `MindMapSection`
- Visualizaciones interactivas
- Navegación por conceptos
- Enlaces entre ideas

## 📚 Contenido del Evento

### Sesiones Principales

1. **Podcast en Directo: IA en el Pasado vs Presente**
   - Ponentes: Leifer, Yonathan, Jaime y Domini Code
   - Enfoque: Innovación tecnológica y ejecución práctica

2. **Mesa Redonda de Casos de Éxito**
   - Ponentes: Jaime Cavadas, Jesús Vega y Borja Gillén
   - Casos: Restaurantes, clubes de pádel, política municipal

3. **Sesión de Estrategia: Academia de IA**
   - Equipo: RACKS Academy Team
   - Temas: Producto SaaS, go-to-market, automatización

4. **Uso No Convencional de IA**
   - Ponentes: Carlos Adams y Jota Red Pill
   - Enfoque: Indagación, persuasión, revelación de información

### Tags Principales
- `IA` - Inteligencia Artificial
- `MVP` - Producto Mínimo Viable
- `Emprendimiento` - Casos de negocio
- `Blockchain` - Tecnología blockchain
- `Automatización` - Procesos automatizados
- `Ventas` - Estrategias comerciales

## 🔧 Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting de código
```

### Configuración de Desarrollo

1. **Variables de Entorno**
   ```bash
   cp .env.example .env.local
   ```

2. **Configuración de TailwindCSS**
   - Archivo: `tailwind.config.ts`
   - Colores personalizados definidos
   - Animaciones personalizadas

3. **Configuración de TypeScript**
   - Archivo: `tsconfig.json`
   - Paths absolutos configurados
   - Strict mode habilitado

### Estructura de Componentes

```typescript
// Ejemplo de componente
interface ComponentProps {
  title: string;
  content: string;
  tags: string[];
}

export default function Component({ title, content, tags }: ComponentProps) {
  return (
    <div className="component-container">
      {/* Contenido del componente */}
    </div>
  );
}
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify
```bash
# Build estático
npm run build

# Subir carpeta 'out' a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Sigue las convenciones de código existentes
- Añade tests para nuevas funcionalidades
- Actualiza la documentación cuando sea necesario
- Usa commits descriptivos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **Racks Academy Team** - Desarrollo y contenido
- **Ponentes del Evento** - Experiencia y casos de uso
- **Comunidad** - Feedback y mejoras continuas

## 📞 Contacto

- **Website**: [Racks Academy](https://racks.academy)
- **Email**: info@racks.academy
- **Twitter**: [@RacksAcademy](https://twitter.com/racksacademy)

---

⭐ **¡No olvides darle una estrella al proyecto si te gusta!**

Made with ❤️ by the Racks Academy Team
=======
# racksacademy-resumen-eventos
>>>>>>> 0a79a81b527f9825799338e1f108cf05293eec07
