'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Search, Filter, ExternalLink } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  speaker: string;
  type: 'presentation' | 'mindmap';
  content: string;
  tags: string[];
  date: string;
}

interface DocumentsSectionProps {
  documents: Document[];
}

export default function DocumentsSection({ documents }: DocumentsSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'presentation' | 'mindmap'>('all');

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <section id="documentos" className="py-16 bg-bg-100">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-100 mb-4">
            Documentos del Evento
          </h2>
          <p className="text-lg text-text-200 max-w-2xl mx-auto">
            Resúmenes de las ponencias y mapas mentales extraídos con plaud.ai
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-300 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar documentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-bg-200 border border-bg-300 rounded-lg text-text-100 placeholder-text-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-transparent"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-text-200" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as 'all' | 'presentation' | 'mindmap')}
              className="bg-bg-200 border border-bg-300 rounded-lg px-4 py-3 text-text-100 focus:outline-none focus:ring-2 focus:ring-primary-100"
            >
              <option value="all">Todos los tipos</option>
              <option value="presentation">Presentaciones</option>
              <option value="mindmap">Mapas Mentales</option>
            </select>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid gap-6">
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-text-300 mx-auto mb-4" />
              <p className="text-text-200">No se encontraron documentos con esos criterios.</p>
            </div>
          ) : (
            filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-bg-200 border border-bg-300 rounded-xl p-6 hover:border-primary-100/50 transition-all duration-200"
              >
                {/* Document Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="w-5 h-5 text-primary-100" />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doc.type === 'presentation' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {doc.type === 'presentation' ? 'Presentación' : 'Mapa Mental'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-100 mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-text-200">
                      Por <span className="font-medium text-primary-100">{doc.speaker}</span>
                    </p>
                    <p className="text-sm text-text-300 mt-1">{doc.date}</p>
                  </div>
                  <Link
                    href={`/ponencia/${doc.id}`}
                    className="bg-primary-100 hover:bg-primary-200 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>Ver Documento Completo</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>

                {/* Tags */}
                {doc.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doc.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-bg-300 text-text-200 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Content Preview */}
                <div className="text-text-200 mb-4">
                  <p>{doc.content.substring(0, 300)}...</p>
                </div>

                {/* Actions */}
                <div className="flex items-center pt-4 border-t border-bg-300">
                  <Link
                    href={`/ponencia/${doc.id}`}
                    className="text-primary-100 hover:text-primary-200 font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>Leer documento completo</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

