'use client';

import { BookOpen, Instagram, Mail } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-bg-200 border-t border-bg-300/50">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Top Section - Brand and Event Info */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary-100" />
              <div className="text-xl font-bold text-text-100">
                Racks <span className="text-primary-100">Academy</span>
              </div>
            </div>
            <p className="text-text-200">
              Documentos del evento - 20 de Septiembre, 2025
            </p>
          </div>

          {/* Contact Links Section */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <a
              href="https://instagram.com/jmartinssss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-text-200 hover:text-primary-100 transition-colors duration-200 group"
            >
              <div className="w-10 h-10 bg-bg-300/50 group-hover:bg-primary-100 rounded-full flex items-center justify-center transition-all duration-200">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </div>
              <span className="font-medium">@jmartinssss</span>
            </a>
            
            <a
              href="mailto:jonatan@jonatanmartins.dev"
              className="flex items-center space-x-3 text-text-200 hover:text-primary-100 transition-colors duration-200 group"
            >
              <div className="w-10 h-10 bg-bg-300/50 group-hover:bg-primary-100 rounded-full flex items-center justify-center transition-all duration-200">
                <Mail className="w-5 h-5 group-hover:text-white" />
              </div>
              <span className="font-medium">jonatan@jonatanmartins.dev</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-bg-300/50 py-6 text-center">
          <p className="text-text-300 text-sm">
            © 2025 <span className="text-text-100 font-medium">Jonatan Martins</span> - Alumno de Racks Academy
          </p>
        </div>
      </div>
    </footer>
  );
}